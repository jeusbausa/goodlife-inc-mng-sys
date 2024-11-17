import {
    Card,
    Flex,
    Group,
    ScrollArea,
    Skeleton,
    Table,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
} from "@mantine/core";

type LoadingTableProps = {
    columns?: number;
    rows?: number;
    withCreateButton?: boolean;
    withCheckbox?: boolean;
};

export function LoadingTable({
    columns = 7,
    rows = 8,
    withCreateButton,
    withCheckbox = false,
}: LoadingTableProps) {
    return (
        <Card withBorder>
            <Flex align="center" justify="space-between" mb="md">
                <Group>
                    <Skeleton h="xl" w={400} />
                    <Skeleton h="xl" w={100} />
                </Group>
                <Group align="center" justify="end">
                    <Skeleton h="xl" w={120} />
                    {withCreateButton && <Skeleton h="xl" w={120} />}
                </Group>
            </Flex>
            <ScrollArea h="54vh" miw={300}>
                <Table stickyHeader highlightOnHover>
                    <TableThead>
                        <TableTr>
                            {withCheckbox && (
                                <TableTh w={10}>
                                    <Skeleton h="lg" w="lg" />
                                </TableTh>
                            )}
                            {[...new Array(columns)].map((index) => (
                                <TableTh key={index}>
                                    <Skeleton
                                        h="lg"
                                        w={{ base: "100%", lg: "60%" }}
                                    />
                                </TableTh>
                            ))}
                        </TableTr>
                    </TableThead>
                    <TableTbody>
                        {[...new Array(rows)].map((index) => (
                            <TableTr key={index}>
                                {withCheckbox && (
                                    <TableTh w={10}>
                                        <Skeleton h="lg" w="lg" />
                                    </TableTh>
                                )}
                                {[...new Array(columns)].map((index) => (
                                    <TableTd key={index}>
                                        <Skeleton
                                            h="lg"
                                            w={{ base: "100%", lg: "60%" }}
                                        />
                                    </TableTd>
                                ))}
                            </TableTr>
                        ))}
                    </TableTbody>
                </Table>
            </ScrollArea>
            <Flex justify="space-between" mt="sm" align="center">
                <Group align="center" w={170}>
                    <Skeleton h="xl" />
                </Group>
                <Group align="center" w={250}>
                    <Skeleton h="xl" />
                </Group>
            </Flex>
        </Card>
    );
}
