import { StyledTable } from "@/Components/tables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    ActionIcon,
    Badge,
    Button,
    Card,
    Container,
    Divider,
    Grid,
    Group,
    LoadingOverlay,
    MenuItem,
    Modal,
    ScrollAreaAutosize,
    Select,
    SimpleGrid,
    Stack,
    Table,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { route } from "ziggy-js";
import { FormEvent, Suspense, useEffect, useMemo, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
    IconCirclePlus,
    IconEye,
    IconPencil,
    IconRecycle,
    IconTrash,
} from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { z } from "zod";
import { useCluster, useClusters } from "@/hooks/swr/clusters";
import { clusterSchema } from "@/schemas/cluster";
import useHttp from "@/hooks/useHttp";
import { LOAN_TERM } from "@/utils/constant";
import BranchSelect from "@/Components/selects/BranchSelect";
import StaffSelect from "@/Components/selects/StaffSelect";
import { getDateOfLastPayment, showSuccessNotification } from "@/utils/common";
import { notifications } from "@mantine/notifications";
import ActionButton from "@/Components/tables/ActionButton";
import { Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import StackContainer from "@/Layouts/StackContainer";
import {
    IconArrowLeft,
    IconUserPlus,
    IconUsers,
    IconDiamond,
    IconCheck,
    IconAlertTriangle,
} from "@tabler/icons-react";
import React from "react";
import { modals } from "@mantine/modals";
type FormProps = z.infer<typeof clusterSchema>;

export default function Cluster() {
    const props = usePage<PageProps<{ [key: string]: any }>>().props;
    // const cluster = useMemo(() => props.cluster, [props]);

    const [page, setPage] = useState(1);
    const [opened, { open, close }] = useDisclosure(false);
    const { data: cluster, isLoading } = useCluster(props.clusterId, {
        filters: { with: "members" },
        config: { suspense: true },
    });

    // const form = useForm<FormProps>({
    //     initialValues: {
    //         branchId: null,
    //         staffId: null,
    //         dateOfFirstPayment: null,
    //         dateOfLastPayment: null,
    //         dateOfRelease: null,
    //         loanTerm: null,
    //         clusterCode: "",
    //     },
    //     validate: zodResolver(clusterSchema),
    //     validateInputOnBlur: true,
    // });

    // const store = useHttp({
    //     url: route("api.clusters.store"),
    //     async onSuccess() {
    //         await mutate();
    //         form.reset();
    //         close();
    //         showSuccessNotification(
    //             `${form.values.clusterCode} is successfully created.`,
    //         );
    //     },
    // });

    // const handleSubmit = async (e: FormEvent) => {
    //     e.preventDefault();
    //     await store.mutate(form.values);
    // };

    // useEffect(() => {
    //     form.setFieldValue(
    //         "dateOfLastPayment",
    //         getDateOfLastPayment(
    //             form.values.loanTerm,
    //             form.values.dateOfFirstPayment,
    //         ),
    //     );
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [form.values.loanTerm, form.values.dateOfFirstPayment]);

    return (
        <AuthenticatedLayout>
            <Suspense
                fallback={
                    <LoadingOverlay
                        visible
                        loaderProps={{ children: "Loading cluster..." }}
                    />
                }
            >
                <StackContainer title={cluster.data.clusterCode}>
                    <Container fluid>
                        <Group>
                            <Button
                                leftSection={<IconArrowLeft size={16} />}
                                variant="default"
                            >
                                Back
                            </Button>
                            <Button
                                leftSection={<IconUserPlus size={16} />}
                                variant="default"
                                onClick={() =>
                                    modals.openContextModal({
                                        title: "Add a client",
                                        size: "lg",
                                        centered: true,
                                        scrollAreaComponent: ScrollAreaAutosize,
                                        modal: "addClientCluster",
                                        innerProps: {
                                            onConfirm: (values) =>
                                                console.log(values),
                                        },
                                    })
                                }
                            >
                                Add Client
                            </Button>
                            <Button
                                leftSection={<IconRecycle size={16} />}
                                variant="default"
                            >
                                Cluster Resolution
                            </Button>
                            <Button
                                leftSection={<IconUsers size={16} />}
                                variant="default"
                            >
                                Update All
                            </Button>
                            <Button
                                leftSection={<IconDiamond size={16} />}
                                variant="default"
                            >
                                Reward
                            </Button>
                            <Button
                                leftSection={<IconCheck size={16} />}
                                variant="default"
                            >
                                Completed Accounts / Withdrawals
                            </Button>
                            <Button
                                leftSection={<IconAlertTriangle size={16} />}
                                variant="default"
                            >
                                Dead Accounts
                            </Button>
                        </Group>
                    </Container>
                    <Card withBorder shadow="lg" radius="md">
                        <SimpleGrid cols={3} spacing="xs">
                            <div>
                                <Text fw={600}>Staff Name</Text>
                                <Text c="dimmed">
                                    {cluster.data.staffAssigned}
                                </Text>
                            </div>
                            <div>
                                <Text fw={600}>Code No.</Text>
                                <Text c="dimmed">
                                    {cluster.data.clusterCode}
                                </Text>
                            </div>
                            <div>
                                <Text fw={600}>Loan Term</Text>
                                <Text c="dimmed">
                                    {cluster.data.loanTerm} week(s)
                                </Text>
                            </div>
                            <div>
                                <Text fw={600}>Week No.</Text>
                                <Text c="dimmed">0</Text>
                            </div>
                            <div>
                                <Text fw={600}>Loan Cycle</Text>
                                <Text c="dimmed">{cluster.data.loanCycle}</Text>
                            </div>
                            <div>
                                <Text fw={600}>Date of Released</Text>
                                <Text c="dimmed">
                                    {cluster.data.dateOfRelease}
                                </Text>
                            </div>
                            <div>
                                <Text fw={600}>Date of First Payment</Text>
                                <Text c="dimmed">
                                    {cluster.data.dateOfFirstPayment}
                                </Text>
                            </div>
                            <div>
                                <Text fw={600}>Date of Last Payment</Text>
                                <Text c="dimmed">
                                    {cluster.data.dateOfLastPayment}
                                </Text>
                            </div>
                        </SimpleGrid>
                    </Card>
                    <StyledTable page={page} total={2} onPageChange={setPage}>
                        <TableThead>
                            <TableTr>
                                <TableTh>Client Name</TableTh>
                                <TableTh>LR</TableTh>
                                <TableTh>SK CUM</TableTh>
                                <TableTh>W.I</TableTh>
                                <TableTh>Past Due</TableTh>
                                <TableTh>Updated By</TableTh>
                                <TableTh>Action</TableTh>
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            <TableTr>
                                <TableTd>Tets</TableTd>
                            </TableTr>
                            {/* <TableTr key={`${cluster.id}.${index}`}>
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
                    </TableTr> */}
                        </TableTbody>
                    </StyledTable>
                </StackContainer>
            </Suspense>
        </AuthenticatedLayout>
    );
}
