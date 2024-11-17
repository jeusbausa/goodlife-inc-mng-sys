import { Card, CardSection, CardSectionProps, Group, Text } from "@mantine/core";
import React from "react";

type StyledCardProps = CardSectionProps & {
    title?: string | React.ReactNode;
    children: React.ReactNode;
};

export function StyledCard({ title, children, ...props }: StyledCardProps) {
    return (
        <Card withBorder shadow="sm" radius="md">
            {title && (
                <CardSection withBorder inheritPadding py="xs">
                    <Group justify="space-between">
                        {typeof title === "string" ? (
                            <Text size="lg" fw={600}>
                                {title}
                            </Text>
                        ) : (
                            title
                        )}
                    </Group>
                </CardSection>
            )}
            <CardSection inheritPadding py={props?.py ?? "md"} {...props}>
                {children}
            </CardSection>
        </Card>
    );
}
