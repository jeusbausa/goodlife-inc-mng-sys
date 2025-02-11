import { StyledTable } from "@/Components/tables";
import {
    Button,
    Grid,
    Group,
    LoadingOverlay,
    MenuItem,
    Modal,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    TextInput,
} from "@mantine/core";
import { branchSchema } from "@/schemas/branch";
import { FormEvent, useState } from "react";
import { IconCirclePlus } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { useBranches } from "@/hooks/swr/branches";
import { useDisclosure } from "@mantine/hooks";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ActionButton from "@/Components/tables/ActionButton";
import useHttp from "@/hooks/useHttp";
import StackContainer from "@/Layouts/StackContainer";

type FormProps = z.infer<typeof branchSchema>;

export default function Branches() {
    const [page, setPage] = useState(1);
    const {
        data: branches,
        mutate,
        isLoading,
    } = useBranches({
        filters: { page },
    });
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm<FormProps>({
        initialValues: { name: "" },
        validate: zodResolver(branchSchema),
        validateInputOnBlur: true,
    });

    const store = useHttp({
        url: route("api.branches.store"),
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
            <StackContainer title="Branches">
                <Modal
                    opened={opened}
                    onClose={close}
                    title="Add a new branch"
                    centered
                >
                    <form onSubmit={handleSubmit}>
                        <Grid columns={4}>
                            <Grid.Col span={4}>
                                <TextInput
                                    {...form.getInputProps("name")}
                                    label="Branch name"
                                    withAsterisk
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
                        Add branch
                    </Button>
                </Group>
                {isLoading ? (
                    <LoadingOverlay
                        visible={isLoading}
                        loaderProps={{ children: "Loading branches..." }}
                    />
                ) : (
                    <StyledTable
                        page={page}
                        total={branches.total}
                        onPageChange={setPage}
                    >
                        <TableThead>
                            <TableTr>
                                <TableTh>Name</TableTh>
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            {branches.data.map((branch, index) => (
                                <TableTr key={`${branch.id}.${index}`}>
                                    <TableTd>{branch.name}</TableTd>
                                    <TableTd>
                                        <ActionButton>
                                            <MenuItem
                                                component={Link}
                                                href={route("admin.clients.page")}
                                            >
                                                View
                                            </MenuItem>
                                        </ActionButton>
                                    </TableTd>
                                </TableTr>
                            ))}
                        </TableTbody>
                    </StyledTable>
                )}
            </StackContainer>
        </AuthenticatedLayout>
    );
}
