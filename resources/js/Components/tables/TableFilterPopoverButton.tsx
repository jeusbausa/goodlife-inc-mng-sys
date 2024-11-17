"use client";

import {
    Popover,
    PopoverTarget,
    Button,
    PopoverDropdown,
    Box,
    PopoverProps,
    Flex,
    Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Funnel } from "@phosphor-icons/react";

type TableFilterPopoverButtonProps = {
    onReset: () => void;
    onSubmit: () => void;
    resetLabel?: string;
    filterLabel?: string;
} & PopoverProps;

export function TableFilterPopoverButton({
    resetLabel = "Reset",
    filterLabel = "Filter",
    onReset,
    onSubmit,
    children,
    ...props
}: TableFilterPopoverButtonProps) {
    const [opened, { open, close, toggle }] = useDisclosure();
    const handleReset = () => {
        onReset();
        close();
    };
    const handleSubmit = () => {
        onSubmit();
        close();
    };

    return (
        <Popover
            {...props}
            opened={opened}
            onOpen={open}
            onClose={close}
            closeOnClickOutside={props.closeOnClickOutside}
            position="bottom-start"
            transitionProps={{ duration: 50, transition: "pop-top-left" }}
        >
            <PopoverTarget>
                <Button
                    variant="outline"
                    onClick={toggle}
                    leftSection={<Funnel size={18} />}
                >
                    Filters
                </Button>
            </PopoverTarget>
            <PopoverDropdown>
                <Box miw={300}>
                    <Stack w={350}>
                        {children}
                        <Flex gap="sm" justify="space-between" align="center">
                            <Button
                                onClick={handleReset}
                                fullWidth
                                variant="outline"
                            >
                                {resetLabel}
                            </Button>
                            <Button onClick={handleSubmit} fullWidth>
                                {filterLabel}
                            </Button>
                        </Flex>
                    </Stack>
                </Box>
            </PopoverDropdown>
        </Popover>
    );
}
