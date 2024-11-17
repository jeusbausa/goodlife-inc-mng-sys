import { StyledTable } from "@/Components/tables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useSWR from "swr";
import {
    Button,
    Grid,
    Group,
    Modal,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    TextInput,
} from "@mantine/core";
import { route } from "ziggy-js";
import { Suspense, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconCirclePlus } from "@tabler/icons-react";

const fetcher = (url: string) =>
    fetch(url, {
        headers: { Accept: "application/json" },
    }).then((res) => res.json());

const BranchesPagination = () => {
    const [page, setPage] = useState(1);

    const { data: branches } = useSWR(
        route("branches.get", { page }),
        fetcher,
        { suspense: true },
    );

    return (
        <StyledTable
            page={page}
            total={branches.total}
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
                {branches.data.map((branch: any, index: any) => (
                    <TableTr key={`${branch.id}.${index}`}>
                        <TableTd>{branch.name}</TableTd>
                    </TableTr>
                ))}
            </TableTbody>
        </StyledTable>
    );
};

const AddBranch = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Add a new branch"
                centered
            >
                <form>
                    <Grid columns={4}>
                        <Grid.Col span={4}>
                            <TextInput label="Branch name" withAsterisk />
                        </Grid.Col>
                    </Grid>
                    <Group justify="end" mt="xl">
                        <Button type="submit">Create</Button>
                    </Group>
                </form>
            </Modal>

            <Group align="center" justify="end" mb="sm">
                <Button
                    onClick={open}
                    leftSection={<IconCirclePlus size={18} />}
                >
                    Create a Branch
                </Button>
            </Group>
        </>
    );
};

export default function Branches() {
    return (
        <AuthenticatedLayout title="Branches">
            <Suspense fallback={<div>Loading...</div>}>
                <AddBranch />
                <BranchesPagination />
            </Suspense>
        </AuthenticatedLayout>
    );
}
