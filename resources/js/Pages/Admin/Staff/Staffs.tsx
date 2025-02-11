import { StyledTable } from "@/Components/tables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Button,
    Grid,
    Group,
    LoadingOverlay,
    Modal,
    NumberInput,
    Select,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    Textarea,
    TextInput,
} from "@mantine/core";
import { route } from "ziggy-js";
import { FormEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconCirclePlus } from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import { z } from "zod";
import { staffSchema } from "@/schemas/staff";
import { useStaffs } from "@/hooks/swr/staffs";
import useHttp from "@/hooks/useHttp";
import StackContainer from "@/Layouts/StackContainer";

type FormProps = z.infer<typeof staffSchema>;

export default function Staffs() {
    const { branches } = usePage<
        PageProps<{
            branches: Array<{ id: string; name: string }>;
        }>
    >().props;
    const [page, setPage] = useState(1);

    const {
        data: staffs,
        mutate,
        isLoading,
    } = useStaffs({
        filters: { page },
    });

    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm<FormProps>({
        initialValues: {
            firstName: "",
            lastName: "",
            codeName: "",
            phone: null,
            addressLine1: "",
            idNo: "",
            branchId: null,
            birthday: null,
        },
        validate: zodResolver(staffSchema),
        validateInputOnBlur: true,
    });

    const store = useHttp({
        url: route("api.staffs.store"),
        async onSuccess() {
            await mutate();
            form.reset();
            close();
        },
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await store.mutate(form.values);
    };

    return (
        <AuthenticatedLayout>
            <StackContainer title="Staffs">
                <Modal
                    opened={opened}
                    onClose={close}
                    title="Add a new staff"
                    centered
                    size="xl"
                >
                    <form onSubmit={handleSubmit}>
                        <Grid>
                            <Grid.Col span={4}>
                                <TextInput
                                    {...form.getInputProps("firstName")}
                                    label="First name"
                                    withAsterisk
                                />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <TextInput
                                    {...form.getInputProps("lastName")}
                                    label="Last name"
                                    withAsterisk
                                />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <TextInput
                                    {...form.getInputProps("codeName")}
                                    label="Codename"
                                    withAsterisk
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={4}>
                                <Select
                                    {...form.getInputProps("branchId")}
                                    label="Assign branch"
                                    multiple={false}
                                    placeholder="Select assign branch"
                                    data={branches.map((branch) => ({
                                        label: branch.name,
                                        value: branch.id.toString(),
                                    }))}
                                    withAsterisk
                                />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <TextInput
                                    {...form.getInputProps("idNo")}
                                    label="ID No."
                                    withAsterisk
                                />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <NumberInput
                                    {...form.getInputProps("phone")}
                                    label="Contact no."
                                    allowDecimal={false}
                                    allowLeadingZeros={false}
                                    allowNegative={false}
                                    hideControls
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={4}>
                                <Textarea
                                    {...form.getInputProps("addressLine1")}
                                    label="Address"
                                />
                            </Grid.Col>
                        </Grid>
                        <Group justify="end" mt="xl">
                            <Button type="submit" loading={store.submitting}>
                                Create
                            </Button>
                        </Group>
                    </form>
                </Modal>

                <Group align="center" justify="end" mb="sm">
                    <Button
                        onClick={open}
                        leftSection={<IconCirclePlus size={18} />}
                    >
                        Add client
                    </Button>
                </Group>
                {isLoading ? (
                    <LoadingOverlay
                        visible={isLoading}
                        loaderProps={{ children: "Loading staffs..." }}
                    />
                ) : (
                    <StyledTable
                        page={page}
                        total={staffs.total}
                        onPageChange={(_page) => {
                            setPage(_page);
                        }}
                    >
                        <TableThead>
                            <TableTr>
                                <TableTh w={300}>Name</TableTh>
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            {staffs.data.map((staff, index) => (
                                <TableTr key={`${staff.id}.${index}`}>
                                    <TableTd>{staff.fullName}</TableTd>
                                </TableTr>
                            ))}
                        </TableTbody>
                    </StyledTable>
                )}
            </StackContainer>
        </AuthenticatedLayout>
    );
}
