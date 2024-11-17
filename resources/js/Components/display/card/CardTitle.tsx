import React from "react";
import { Text } from "@mantine/core";

type CardTitleProps = {
    title: string | React.ReactNode;
};

export function CardTitle({ title }: CardTitleProps) {
    return <Text fw={600}>{title}</Text>;
}
