"use client";

import { Grid, GridCol, Group, Input, Button, Drawer, Title, Flex, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Heading } from "../display";

type StyledTableFilterProps = {
    filterFormTitle?: string;
    filterForm?: React.ReactNode;
    createForm?: (onClose: () => void) => React.ReactNode;
    createFormTitle?: string;
    createFormDescription?: string;
    createButtonText?: string;
};

export function StyledTableFilter({
    createForm,
    createButtonText,
    createFormTitle,
    createFormDescription,
    filterForm,
    filterFormTitle,
}: StyledTableFilterProps) {
    const [filterOpened, { open: openFilters, close: closeFilters }] = useDisclosure(false);
    const [createModalOpened, { open: openCreate, close: closeCreate }] = useDisclosure(false);

    return (
        <>
            {createForm != null && (
                <Modal
                    opened={createModalOpened}
                    withCloseButton={false}
                    onClose={closeCreate}
                    size="md"
                    centered
                    title={
                        <Heading order={3} title={createFormTitle ?? "Create"} description={createFormDescription} />
                    }
                >
                    {createForm(closeCreate)}
                </Modal>
            )}
            {filterForm && (
                <Drawer
                    offset={10}
                    opened={filterOpened}
                    position="right"
                    onClose={closeFilters}
                    title={<Title order={2}>{filterFormTitle ?? "Filter table"}</Title>}
                >
                    {filterForm}
                </Drawer>
            )}
            <Grid columns={4} mb="sm">
                <GridCol span={3}>
                    <Flex gap={10}>
                        <Input w={600} placeholder="Search" leftSection={<MagnifyingGlass />} />
                        {filterForm && (
                            <Button onClick={openFilters} color="green" autoContrast={false}>
                                Filters
                            </Button>
                        )}
                    </Flex>
                </GridCol>
                <GridCol span={1}>
                    <Group justify="end" gap={10}>
                        {createForm != null && <Button onClick={openCreate}>{createButtonText ?? "Create"}</Button>}
                        <Button color="dark.9">Export</Button>
                    </Group>
                </GridCol>
            </Grid>
        </>
    );
}
