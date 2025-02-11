import React, { useState } from "react";
import { Button, Flex, RemoveScroll, Stack } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";
import ClientSelect from "../selects/ClientSelect";
import AmountInput from "../inputs/AmountInput";
import { useForm } from "@mantine/form";

type FormProps = {
    clientId: string | null;
    amount: number;
};

export default function AddClusterClient({
    context,
    innerProps,
}: ContextModalProps<{ onConfirm: (values: FormProps) => Promise<void> }>) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormProps>({
        initialValues: {
            clientId: null,
            amount: 0,
        },
    });

    const handleSubmit = async (values: FormProps) => {
        setIsSubmitting(true);

        await innerProps.onConfirm(values);

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <ClientSelect
                    onSelectAction={(clientId) =>
                        form.setFieldValue("clientId", clientId)
                    }
                />
                <AmountInput
                    {...form.getInputProps("amount")}
                    label="Amount"
                    placeholder="Enter a amount"
                    withAsterisk
                />
                <Flex justify="space-between">
                    <Button
                        variant="outline"
                        disabled={isSubmitting}
                        onClick={context.closeAll}
                    >
                        Back
                    </Button>
                    <Button type="submit" loading={isSubmitting}>
                        Confirm
                    </Button>
                </Flex>
            </Stack>
        </form>
    );
}
