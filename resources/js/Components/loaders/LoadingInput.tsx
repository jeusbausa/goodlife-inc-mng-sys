import { Skeleton, Flex } from "@mantine/core";

export function LoadingInput() {
    return (
        <Flex gap="xs" direction="column">
            <Skeleton h="sm" width="30%" />
            <Skeleton h="xl" />
        </Flex>
    );
}
