import { IconDots } from "@tabler/icons-react";
import {
    Menu,
    MenuTarget,
    ActionIcon,
    MenuDropdown,
    type MenuProps,
    MenuLabel,
    MenuDivider,
} from "@mantine/core";
import React from "react";

type ActionButtonProps = MenuProps & {
    children: React.ReactNode;
    totalSelectedRows?: number;
};

export default function ActionButton({
    totalSelectedRows,
    children,
    ...props
}: ActionButtonProps) {
    return (
        <Menu
            {...props}
            position="bottom-end"
            offset={5}
            transitionProps={{
                duration: 100,
                transition: "pop-top-right",
            }}
        >
            <MenuTarget>
                <ActionIcon variant="subtle">
                    <IconDots stroke={1.5} size={18} color="black" />
                </ActionIcon>
            </MenuTarget>
            <MenuDropdown>
                {totalSelectedRows && (
                    <>
                        <MenuLabel fw={700}>
                            {totalSelectedRows} rows selected
                        </MenuLabel>
                        <MenuDivider />
                    </>
                )}
                {children}
            </MenuDropdown>
        </Menu>
    );
}
