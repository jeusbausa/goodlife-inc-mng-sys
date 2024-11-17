import { Card, CardSection, Skeleton, Stack } from "@mantine/core";
import React from "react";

type LoadingStyledCardProps = {
    withTitle?: boolean;
    withDescription?: boolean;
    children: React.ReactNode;
};

export function LoadingStyledCard({
    withTitle,
    withDescription,
    children,
}: LoadingStyledCardProps) {
    return (
        <Card withBorder shadow="sm" radius="md">
            {withTitle && (
                <CardSection withBorder inheritPadding py="xs">
                    <Stack>
                        <Skeleton h="xl" w="50%" />
                        {withDescription && <Skeleton h="lg" />}
                    </Stack>
                </CardSection>
            )}
            <CardSection inheritPadding py="md">
                {children}
            </CardSection>
        </Card>
    );
}
