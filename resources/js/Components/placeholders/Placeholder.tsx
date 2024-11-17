"use client";

import {
    Container,
    Center,
    Stack,
    Flex,
    Text,
    Title,
    Group,
    Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { V } from "../../../types";
import React from "react";

type PlaceholderProps = {
    placeholderImg: React.ReactElement;
    title?: string;
    message?: string;
    redirectUrl?: string | null;
    redirectMessage?: string;
    componentLink?: V;
};

export function Placeholder({
    placeholderImg,
    title = "Page Not Found",
    message,
    redirectUrl = "/",
    redirectMessage,
    componentLink,
}: PlaceholderProps) {
    const [loading, { toggle }] = useDisclosure();

    return (
        <Container miw={800} mx="auto">
            <Center mih="80vh">
                <Stack maw={600}>
                    <Flex justify="center">{placeholderImg}</Flex>
                    <Title ta="center">{title}</Title>
                    <Text ta="center" c="dimmed">
                        {message}
                    </Text>
                    {redirectMessage && (
                        <Group justify="center">
                            <Button
                                component={componentLink}
                                href={redirectUrl}
                                size="md"
                                loading={loading}
                                onClick={toggle}
                            >
                                {redirectMessage}
                            </Button>
                        </Group>
                    )}
                </Stack>
            </Center>
        </Container>
    );
}
