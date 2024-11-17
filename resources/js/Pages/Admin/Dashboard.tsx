import { StyledTable } from "@/Components/tables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    Text,
} from "@mantine/core";

export default function Dashboard() {
    return (
        <AuthenticatedLayout title="Dashboard | Company Wide">
            <Text fw="lighter" mb="md" size="lg">
                Goodlife Program Weekly Reports as of 1-1
            </Text>
            <StyledTable>
                <TableThead>
                    <TableTr>
                        <TableTh w={200}>Project Managers</TableTh>
                        <TableTh w={300}>LR</TableTh>
                        <TableTh w={200}>Target</TableTh>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    <TableTr>
                        <TableTd>John Doe</TableTd>
                        <TableTd>1,000,000.00</TableTd>
                        <TableTd>1,000,000.00</TableTd>
                    </TableTr>
                </TableTbody>
            </StyledTable>
        </AuthenticatedLayout>
    );
}
