import { Box, Flex, GridCol, Paper, Skeleton, Stack } from "@mantine/core";

type LoadingRemarksProps = {
    rows?: number;
};

export function LoadingRemarks({ rows = 2 }: LoadingRemarksProps) {
    return (
        <GridCol span={{ base: 12, lg: 7 }}>
            <Paper p="md">
                <Skeleton height={30} w="40%" />
                <Stack gap={3} mt="sm">
                    <Stack gap={1}>
                        {[...new Array(rows)].map((index) => (
                            <Box p="sm" key={index}>
                                <Flex justify="space-between" align="center">
                                    <Flex align="center" gap={8}>
                                        <Skeleton circle height={30} />
                                        <Skeleton height={20} w={100} />
                                    </Flex>
                                    <Skeleton height={20} w={80} />
                                </Flex>
                                <Box mt="sm">
                                    <Skeleton height={100} />
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                    <Skeleton height={150} />
                    <Skeleton height={30} />
                </Stack>
            </Paper>
        </GridCol>
    );
}
