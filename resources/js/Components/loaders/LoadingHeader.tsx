import { Skeleton, Stack } from "@mantine/core";

type LoadingHeaderProps = {
    withDescription?: boolean;
    withBackButton?: boolean;
    withTabs?: boolean;
};

export function LoadingHeader({
    withDescription,
    withBackButton,
    withTabs,
}: LoadingHeaderProps) {
    return (
        <Stack gap="sm" mb="lg">
            {withBackButton && <Skeleton h="lg" maw={200} />}
            <Skeleton h="4rem" maw={150} miw={30} />
            {withDescription && <Skeleton h="lg" maw={500} />}
            {withTabs && <Skeleton h="2.5rem" maw={700} mt="xl" />}
        </Stack>
    );
}
