import { Box, Text, Title, TitleProps } from "@mantine/core";
import React from "react";

type HeadingProps = {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    centered?: boolean;
} & Omit<TitleProps, "children" | "title">;

export function Heading({
    title,
    description,
    centered = false,
    ...props
}: HeadingProps) {
    return (
        <Box py="xl" ta={centered ? "center" : "initial"}>
            <Title size="2rem" fw={500} {...props}>
                {title}
            </Title>
            <Box>
                {React.isValidElement(description) ? (
                    description
                ) : (
                    <Text component="p" c="dimmed">
                        {description}
                    </Text>
                )}
            </Box>
        </Box>
    );
}
