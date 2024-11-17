import { GridCol } from "@mantine/core";

export function ResponsiveGridCol({ children }: { children: React.ReactNode }) {
    return <GridCol span={{ base: 12, lg: 4 }}>{children}</GridCol>;
}
