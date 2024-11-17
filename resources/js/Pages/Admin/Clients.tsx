import { StyledTable } from "@/Components/tables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
} from "@mantine/core";

export default function Clients() {
    return (
        <AuthenticatedLayout title="Clients">
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
