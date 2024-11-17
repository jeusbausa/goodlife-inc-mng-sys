"use client";

import { Anchor, Breadcrumbs, Flex, Stack, Text, Title } from "@mantine/core";
import React from "react";

type StyledBreadcrumbsProps = {
    title: string;
    subtitle?: string;
    withExportButton?: boolean;
    crumbs: Array<{ href: string; title: string }>;
    onExport?: () => void;
    children?: React.ReactNode;
};

export function StyledBreadcrumbs({ title, subtitle, crumbs, children }: StyledBreadcrumbsProps) {
    return (
        <Stack mb="sm">
            <Breadcrumbs separator="/">
                {crumbs.map((item, index) => (
                    <Anchor href={item.href} key={index}>
                        {item.title}
                    </Anchor>
                ))}
            </Breadcrumbs>
            <Flex gap="sm" align="end">
                <Title order={1}>{title}</Title>
                {subtitle && (
                    <Text lh={2.2} c="dimmed" size="sm">
                        {subtitle}
                    </Text>
                )}
            </Flex>
            <Flex>{children}</Flex>
        </Stack>
    );
}
