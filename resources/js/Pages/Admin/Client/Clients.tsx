import { StyledTable } from "@/Components/tables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useSWR from "swr";
import useSWRMutation, { SWRMutationHook } from "swr/mutation";

import {
    Button,
    Grid,
    Group,
    LoadingOverlay,
    Modal,
    NumberInput,
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
import { DateInput } from "@mantine/dates";
import { z } from "zod";
import { clientSchema } from "@/schemas/client";
import { useClients } from "@/hooks/swr/clients";
import useHttp from "@/hooks/useHttp";
import StackContainer from "@/Layouts/StackContainer";

type FormProps = z.infer<typeof clientSchema>;

export default function Clients() {
    const [page, setPage] = useState(1);
    const {
        data: clients,
        mutate,
        isLoading,
    } = useClients({
        filters: { page },
    });
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm<FormProps>({
        initialValues: {
            firstName: "",
            lastName: "",
            middleName: "",
            birthday: null,
            phone: null,
            addressLine1: "",
        },
        validate: zodResolver(clientSchema),
        validateInputOnBlur: true,
    });

    const store = useHttp({
        url: route("api.clients.store"),
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
            <StackContainer title="Clients">
                <Modal
                    opened={opened}
                    onClose={close}
                    title="Add a new client"
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
                                    {...form.getInputProps("middleName")}
                                    label="Middle name"
                                />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <TextInput
                                    {...form.getInputProps("lastName")}
                                    label="Last name"
                                    withAsterisk
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={4}>
                                <DateInput
                                    {...form.getInputProps("birthday")}
                                    label="Birthday"
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
                        loaderProps={{ children: "Loading clients..." }}
                    />
                ) : (
                    <StyledTable
                        page={page}
                        total={clients.total}
                        onPageChange={setPage}
                    >
                        <TableThead>
                            <TableTr>
                                <TableTh w={300}>Name</TableTh>
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            {clients.data.map((client, index) => (
                                <TableTr key={`${client.id}.${index}`}>
                                    <TableTd>{client.fullName}</TableTd>
                                </TableTr>
                            ))}
                        </TableTbody>
                    </StyledTable>
                )}
            </StackContainer>
        </AuthenticatedLayout>
    );
}
