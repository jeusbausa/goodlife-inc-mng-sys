import { Title, GridCol, Text, Grid } from "@mantine/core";
import React from "react";

type GridListProps = {
    title: string;
    items: Array<{ label: string; value: string }>;
};

export default function GridList({ title, items }: GridListProps) {
    return (
        <>
            <Title order={3}>{title}</Title>
            <Grid columns={2} mt="lg">
                {items.map(({ label, value }, i) => (
                    <React.Fragment key={i}>
                        <GridCol span={1}>
                            <Text size="sm" c="dimmed">
                                {label}
                            </Text>
                        </GridCol>
                        <GridCol>
                            <Text c="dark.9" fw="bold">
                                {value}
                            </Text>
                        </GridCol>
                    </React.Fragment>
                ))}
            </Grid>
        </>
    );
}
