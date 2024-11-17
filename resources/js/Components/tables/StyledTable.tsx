"use client";

import {
    Table,
    Flex,
    Pagination,
    Text,
    Group,
    ScrollArea,
} from "@mantine/core";
import React from "react";

type StyledTableProps = {
    children: React.ReactNode;
    onPageChange?: (page: number) => void;
    page?: number;
    total?: number;
    limit?: number;
    showPagination?: boolean;
};

export function StyledTable({
    showPagination = true,
    onPageChange,
    page = 1,
    children,
    total = 1,
    limit = 20,
}: StyledTableProps) {
    const start = (page - 1) * limit + 1;
    const end = start + limit - 1;

    return (
        <>
            <ScrollArea scrollbarSize={4}>
                <Table
                    withTableBorder
                    verticalSpacing="xs"
                    stickyHeader
                    highlightOnHover
                >
                    {children}
                </Table>
            </ScrollArea>
            {showPagination && (
                <Flex justify="space-between" mt="sm" align="center">
                    <Group align="center">
                        <Text>
                            Showing {start} to {end} of {total} entries
                        </Text>
                    </Group>
                    <Pagination
                        onChange={onPageChange}
                        siblings={2}
                        value={page ?? 1}
                        boundaries={3}
                        total={Math.ceil(total / limit) ?? 1}
                    />
                </Flex>
            )}
        </>
    );
}
