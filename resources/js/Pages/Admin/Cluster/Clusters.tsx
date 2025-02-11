import { StyledTable } from "@/Components/tables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Button,
    Grid,
    Group,
    LoadingOverlay,
    MenuItem,
    Modal,
    Select,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    TextInput,
} from "@mantine/core";
import { route } from "ziggy-js";
import { FormEvent, Suspense, useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconCirclePlus } from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { z } from "zod";
import { useClusters } from "@/hooks/swr/clusters";
import { clusterSchema } from "@/schemas/cluster";
import useHttp from "@/hooks/useHttp";
import { LOAN_TERM } from "@/utils/constant";
import BranchSelect from "@/Components/selects/BranchSelect";
import StaffSelect from "@/Components/selects/StaffSelect";
import { getDateOfLastPayment, showSuccessNotification } from "@/utils/common";
import ActionButton from "@/Components/tables/ActionButton";
import { Link } from "@inertiajs/react";
import StackContainer from "@/Layouts/StackContainer";

type FormProps = z.infer<typeof clusterSchema>;

export default function Clusters() {
    const [page, setPage] = useState(1);
    const [opened, { open, close }] = useDisclosure(false);
    const { data: clusters, mutate, isLoading } = useClusters({ config: { suspense: true } });
    const form = useForm<FormProps>({
        initialValues: {
            branchId: null,
            staffId: null,
            dateOfFirstPayment: null,
            dateOfLastPayment: null,
            dateOfRelease: null,
            loanTerm: null,
            clusterCode: "",
        },
        validate: zodResolver(clusterSchema),
        validateInputOnBlur: true,
    });

    const store = useHttp({
        url: route("api.clusters.store"),
        async onSuccess() {
            await mutate();
            form.reset();
            close();
            showSuccessNotification(
                `${form.values.clusterCode} is successfully created.`,
            );
        },
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await store.mutate(form.values);
    };

    useEffect(() => {
        form.setFieldValue(
            "dateOfLastPayment",
            getDateOfLastPayment(
                form.values.loanTerm,
                form.values.dateOfFirstPayment,
            ),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form.values.loanTerm, form.values.dateOfFirstPayment]);

    return (
        <AuthenticatedLayout>
            <Suspense fallback={<LoadingOverlay
                visible
                loaderProps={{ children: "Loading clusters..." }}
            />}>
                <StackContainer title="Clusters">
                    <Modal
                        opened={opened}
                        onClose={close}
                        title="Add a new cluster"
                        centered
                        size="lg"
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid>
                                <Grid.Col>
                                    <BranchSelect
                                        onSelectAction={(branchId) =>
                                            form.setFieldValue("branchId", branchId)
                                        }
                                    />
                                </Grid.Col>
                                <Grid.Col>
                                    <StaffSelect
                                        onSelectAction={(staffId) =>
                                            form.setFieldValue("staffId", staffId)
                                        }
                                        filters={{ branchId: form.values.branchId }}
                                    />
                                </Grid.Col>
                                <Grid.Col>
                                    <TextInput
                                        {...form.getInputProps("clusterCode")}
                                        label="Cluster code"
                                        withAsterisk
                                    />
                                </Grid.Col>
                                <Grid.Col>
                                    <DateInput
                                        {...form.getInputProps("dateOfRelease")}
                                        label="Date of released"
                                        withAsterisk
                                    />
                                </Grid.Col>
                                <Grid.Col>
                                    <Select
                                        {...form.getInputProps("loanTerm")}
                                        label="Loan term"
                                        multiple={false}
                                        placeholder="Select a loan term"
                                        data={LOAN_TERM.map((loanTerm) => ({
                                            label: `${loanTerm} Weeks`,
                                            value: String(loanTerm),
                                        }))}
                                        withAsterisk
                                    />
                                </Grid.Col>
                                <Grid.Col>
                                    <DateInput
                                        {...form.getInputProps("dateOfFirstPayment")}
                                        label="Date of first payment"
                                        withAsterisk
                                    />
                                </Grid.Col>
                                <Grid.Col>
                                    <DateInput
                                        value={form.values.dateOfLastPayment}
                                        label="Date of last payment"
                                        readOnly
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
                            Add cluster
                        </Button>
                    </Group>
                    <StyledTable
                        page={page}
                        total={clusters.total}
                        onPageChange={setPage}
                    >
                        <TableThead>
                            <TableTr>
                                <TableTh>Code No.</TableTh>
                                <TableTh>Status</TableTh>
                                <TableTh>No. of client(s)</TableTh>
                                <TableTh>Week No.</TableTh>
                                <TableTh>Loan Term</TableTh>
                                <TableTh>Loan Cycle</TableTh>
                                <TableTh>Date of Released</TableTh>
                                <TableTh>Date of First Payment</TableTh>
                                <TableTh>Date of Last Payment</TableTh>
                                <TableTh>Action</TableTh>
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            {clusters.data.map((cluster, index) => (
                                <TableTr key={`${cluster.id}.${index}`}>
                                    <TableTd>{`${cluster.staffAssigned} | ${cluster.clusterCode}`}</TableTd>
                                    <TableTd>{cluster.status}</TableTd>
                                    <TableTd>0 client(s)</TableTd>
                                    <TableTd>0 week(s)</TableTd>
                                    <TableTd>{cluster.loanTerm} week(s)</TableTd>
                                    <TableTd>{cluster.loanCycle}</TableTd>
                                    <TableTd>{cluster.dateOfRelease}</TableTd>
                                    <TableTd>{cluster.dateOfFirstPayment}</TableTd>
                                    <TableTd>{cluster.dateOfLastPayment}</TableTd>
                                    <TableTd>
                                        <ActionButton>
                                            <MenuItem
                                                component={Link}
                                                href={route("admin.cluster.page", {
                                                    cluster: cluster.id,
                                                })}
                                            >
                                                View
                                            </MenuItem>
                                        </ActionButton>
                                    </TableTd>
                                </TableTr>
                            ))}
                        </TableTbody>
                    </StyledTable>
                </StackContainer>
            </Suspense>
        </AuthenticatedLayout >
    );
}
