import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { FormEventHandler } from "react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <Container size={420} my={40}>
                <Title size={30} ta="center">
                    Goodlife Microlending Inc Management System.
                </Title>

                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Do not have an account yet?{" "}
                    <Anchor href={route("register")} size="sm" component={Link}>
                        Create account
                    </Anchor>
                </Text>
                <form onSubmit={submit}>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput
                            label="Email"
                            placeholder="johndoe@example.com"
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors.email}
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Your password"
                            mt="md"
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            error={errors.password}
                        />
                        <Group justify="space-between" mt="lg">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                                label="Remember me"
                                error={errors.remember}
                            />
                            {canResetPassword && (
                                <Anchor component="button" size="sm">
                                    Forgot password?
                                </Anchor>
                            )}
                        </Group>
                        <Button
                            type="submit"
                            fullWidth
                            mt="xl"
                            loading={processing}
                        >
                            Sign in
                        </Button>
                    </Paper>
                </form>
            </Container>
        </GuestLayout>
    );
}
