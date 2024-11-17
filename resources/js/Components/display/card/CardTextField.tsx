import { Flex, Text, Tooltip } from "@mantine/core";

type CardTextFieldProps = {
    label: string;
    value: string | null;
};

export function CardTextField({ label, value }: CardTextFieldProps) {
    const _value = value ?? "N/A";

    return (
        <Flex align="center" justify="space-between">
            <Text c="dimmed">{label}</Text>
            <Tooltip label={_value}>
                <Text ta="left" w="50%" fw={500} truncate="end">
                    {_value}
                </Text>
            </Tooltip>
        </Flex>
    );
}
