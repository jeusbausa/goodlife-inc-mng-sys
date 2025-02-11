import { Divider, Stack, Text } from "@mantine/core";

export default function StackContainer({ children, title }) {
    return <Stack>
        <Text fw="bold">{title}</Text>
        <Divider size="xs" my="md" variant="solid" />
        {children}
    </Stack>;
}
