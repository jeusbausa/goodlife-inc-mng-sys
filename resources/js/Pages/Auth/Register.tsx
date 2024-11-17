import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import {
    Button,
    Container,
    Paper,
    PasswordInput,
    TextInput,
    Title,
} from "@mantine/core";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "passwordConfirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Container size={420} my={40}>
                <Title ta="center">Register your account.</Title>
                <form onSubmit={submit}>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput
                            label="First name"
                            placeholder="John"
                            id="firstName"
                            type="firstName"
                            mt="md"
                            name="firstName"
                            value={data.firstName}
                            autoComplete="firstName"
                            onChange={(e) =>
                                setData("firstName", e.target.value)
                            }
                            error={errors.firstName}
                        />
                        <TextInput
                            label="Last name"
                            placeholder="Doe"
                            id="lastName"
                            mt="md"
                            type="lastName"
                            name="lastName"
                            value={data.lastName}
                            autoComplete="lastName"
                            onChange={(e) =>
                                setData("lastName", e.target.value)
                            }
                            error={errors.lastName}
                        />
                        <TextInput
                            label="Email"
                            placeholder="johndoe@example.com"
                            id="email"
                            mt="md"
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
                        <PasswordInput
                            label="Confirm Password"
                            placeholder="Retype your password"
                            mt="md"
                            id="passwordConfirm"
                            type="password"
                            name="passwordConfirm"
                            value={data.passwordConfirmation}
                            autoComplete="passwordConfirm"
                            onChange={(e) =>
                                setData("passwordConfirmation", e.target.value)
                            }
                            error={errors.passwordConfirmation}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            mt="xl"
                            disabled={processing}
                        >
                            Register
                        </Button>
                    </Paper>
                </form>
            </Container>
        </GuestLayout>
    );
}
