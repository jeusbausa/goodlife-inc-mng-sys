import { Box, Text, Container, Title, Paper } from "@mantine/core";
import { isUndefined } from "lodash";

export function PageHeading({
    fluid,
    title,
    description,
    crumbs,
}: {
    crumbs?: React.ReactNode;
    fluid?: boolean;
    title: string;
    description?: string;
}) {
    return (
        <Paper
            fluid
            component={Container}
            shadow="xs"
            radius={0}
            styles={{
                root: {
                    borderBottom: "1px solid var(--app-shell-border-color)",
                },
            }}
        >
            <Container fluid={fluid} size="xl">
                <Box py="xl">
                    {!isUndefined(crumbs) && <Box mb="lg">{crumbs}</Box>}
                    <Title size="2rem" fw={500}>
                        {title}
                    </Title>
                    {description && (
                        <Box>
                            <Text component="p" c="dimmed">
                                {description}
                            </Text>
                        </Box>
                    )}
                </Box>
            </Container>
        </Paper>
    );
}
