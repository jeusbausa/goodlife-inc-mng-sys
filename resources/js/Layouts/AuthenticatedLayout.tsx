import {
    AppShell,
    Burger,
    Container,
    Divider,
    Group,
    Image,
    NavLink,
    Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Head, Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { route } from "ziggy-js";
import {
    IconBuilding,
    IconDashboard,
    IconUsers,
    IconCross,
    IconUserCheck,
    IconUsersGroup,
} from "@tabler/icons-react";
import { isEqual } from "lodash";

export default function Authenticated({
    children,
    title,
}: PropsWithChildren<{ title?: string }>) {
    const [opened, { toggle }] = useDisclosure();
    const [, activeMenu] = usePage().url.split("/");

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 250,
                breakpoint: "sm",
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Image
                        w={35}
                        src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPgyCj8pBV9LVeupAPxEv7eEU5qMcJWQaNA&s"
                        }
                    />
                    <Text>GMIMS</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <NavLink
                    component={Link}
                    href={route("admin.dashboard.page")}
                    label="Dashboard"
                    leftSection={<IconDashboard />}
                    active={isEqual(activeMenu, "")}
                />
                <NavLink
                    component={Link}
                    href={route("admin.branches.page")}
                    label="Branches"
                    leftSection={<IconBuilding />}
                    active={isEqual(activeMenu, "branches")}
                />
                <NavLink
                    component={Link}
                    href={route("admin.clients.page")}
                    label="Clients"
                    leftSection={<IconUsers />}
                    active={isEqual(activeMenu, "clients")}
                />
                <NavLink
                    component={Link}
                    href={route("admin.staffs.page")}
                    label="Staffs"
                    leftSection={<IconUserCheck />}
                    active={isEqual(activeMenu, "staffs")}
                />
                <NavLink
                    component={Link}
                    href={route("admin.clusters.page")}
                    label="Clusters"
                    leftSection={<IconUsersGroup />}
                    active={isEqual(activeMenu, "clusters")}
                />
                {/* <NavLink
                    component={Link}
                    href={"/dead-accounts"}
                    label="Dead Account"
                    leftSection={<IconCross />}
                    active={isEqual(activeMenu, "dead-accounts")}
                /> */}
            </AppShell.Navbar>
            <AppShell.Main>
                <Container fluid>
                    <Head title={title} />
                    <Text fw="bold">{title}</Text>
                    <Divider size="xs" my="md" variant="solid" />
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}
