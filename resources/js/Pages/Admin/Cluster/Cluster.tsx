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
import { FormEvent, useEffect, useMemo, useState } from "react";
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
import { useClusters } from "@/hooks/swr/clusters";
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

type FormProps = z.infer<typeof clusterSchema>;

export default function Clusters() {
    const props = usePage<PageProps<{ [key: string]: any; }>>().props;
    const cluster = useMemo(() => props.cluster, [props]);

    const [page, setPage] = useState(1);
    const [opened, { open, close }] = useDisclosure(false);
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
        <AuthenticatedLayout title={cluster.clusterCode}>
            <Card withBorder shadow="lg" radius="md">
                <SimpleGrid cols={3} spacing="xs">
                    <div>
                        <Text fw={600}>Staff Name</Text>
                        <Text c="dimmed">{cluster.staffAssigned}</Text>
                    </div>
                    <div>
                        <Text fw={600}>Code No.</Text>
                        <Text c="dimmed">{cluster.clusterCode}</Text>
                    </div>
                    <div>
                        <Text fw={600}>Loan Term</Text>
                        <Text c="dimmed">{cluster.loanTerm} week(s)</Text>
                    </div>
                    <div>
                        <Text fw={600}>Week No.</Text>
                        <Text c="dimmed">0</Text>
                    </div>
                    <div>
                        <Text fw={600}>Loan Cycle</Text>
                        <Text c="dimmed">{cluster.loanCycle}</Text>
                    </div>
                    <div>
                        <Text fw={600}>Date of Released</Text>
                        <Text c="dimmed">{cluster.dateOfRelease}</Text>
                    </div>
                    <div>
                        <Text fw={600}>Date of First Payment</Text>
                        <Text c="dimmed">{cluster.dateOfFirstPayment}</Text>
                    </div>
                    <div>
                        <Text fw={600}>Date of Last Payment</Text>
                        <Text c="dimmed">{cluster.dateOfLastPayment}</Text>
                    </div>
                </SimpleGrid>
            </Card>
        </AuthenticatedLayout>
    );
}
