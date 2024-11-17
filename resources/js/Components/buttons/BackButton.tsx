import { Anchor, Flex, Text } from "@mantine/core";
import { ArrowLeft } from "@phosphor-icons/react";
import { V } from "../../../types";

type BackButtonProps = {
    title: string;
    path: string;
    component: V;
};

export function BackButton({ title, path, component }: BackButtonProps) {
    return (
        <Anchor component={component} href={path}>
            <Flex align="center" gap="xs">
                <ArrowLeft size={20} />
                <Text fw={500}>{title}</Text>
            </Flex>
        </Anchor>
    );
}
