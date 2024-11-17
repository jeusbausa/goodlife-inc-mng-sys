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
                            "https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/308775200_427083756190584_4910632801039326913_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CpfXlRSLaR8Q7kNvgExMeuD&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&_nc_gid=Avo_YKXqqBn7EajaOee1X8m&oh=00_AYCEgiR7DNKjzCd3WLXMPuHkfqkg4yppDgEDQ3ocJ_loBQ&oe=673E1E44"
                        }
                    />
                    <Text>GMIMS</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <NavLink
                    component={Link}
                    href={route("dashboard.page")}
                    label="Dashboard"
                    leftSection={<IconDashboard />}
                    active={isEqual(activeMenu, "")}
                />
                <NavLink
                    component={Link}
                    href={route("branches.page")}
                    label="Branches"
                    leftSection={<IconBuilding />}
                    active={isEqual(activeMenu, "branches")}
                />
                <NavLink
                    component={Link}
                    href={"/clients"}
                    label="Clients"
                    leftSection={<IconUsers />}
                    active={isEqual(activeMenu, "clients")}
                />
                <NavLink
                    component={Link}
                    href={"/staffs"}
                    label="Staffs"
                    leftSection={<IconUserCheck />}
                    active={isEqual(activeMenu, "staffs")}
                />
                <NavLink
                    component={Link}
                    href={"/dead-accounts"}
                    label="Dead Account"
                    leftSection={<IconCross />}
                    active={isEqual(activeMenu, "dead-accounts")}
                />
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
