import _ from "lodash";
import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { type NotificationData, notifications } from "@mantine/notifications";
import { rem } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { V } from "@/Components/types";
import React from "react";

export function populateValidationErrors<F>(
    form: UseFormReturnType<F, (values: F) => F>,
    errors: Partial<Record<"_root" | keyof F, string[]>> | undefined,
) {
    if (errors != null) {
        for (const field in errors) {
            form.setFieldError(field, _.chain(errors).get(field).value()[0]);
        }
    }
}

export function populateCustomErrors<F>(
    form: UseFormReturnType<F, (values: F) => F>,
    data:
        | {
              success: boolean;
              message: string | null;
          }
        | undefined,
) {
    const generalError: string[] = [];

    if (data == null || !data.message) {
        return;
    }

    try {
        const error = JSON.parse(data.message);

        error.issues.map((issue: V) => {
            if (issue && form && !_.isEmpty(issue.path)) {
                form.setFieldError(issue.path[0]!.toString(), issue.message);
            } else {
                generalError.push(issue.message);
            }
        });

        if (_.isEmpty(generalError)) {
            data.message = null;
            return;
        }

        showErrorNotification(generalError.join());
    } catch (error) {
        showErrorNotification(data.message);
    }
}

export function showServerErrorMessage(message?: string) {
    if (message) {
        showErrorNotification(message);
    }
}

export function showSuccessNotification(
    message: string | React.ReactNode,
    title = "Request complete",
    options?: Omit<NotificationData, "title" | "message">,
) {
    notifications.show({
        title,
        message: <div data-testId="generalSuccessNotification">{message}</div>,
        color: "green",
        icon: <Check style={{ width: rem(20), height: rem(20) }} />,
        withBorder: true,
        withCloseButton: false,
        ...options,
    });
}

export function showErrorNotification(
    message: string | React.ReactNode,
    title = "Unable to process request",
    options?: Omit<NotificationData, "title" | "message">,
) {
    notifications.show({
        title,
        message,
        color: "red",
        icon: <X style={{ width: rem(20), height: rem(20) }} />,
        withBorder: true,
        withCloseButton: false,
        ...options,
    });
}
