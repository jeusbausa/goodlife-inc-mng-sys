"use client";

import { useToggle } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { isString, isUndefined } from "lodash";

type Methods = "GET" | "PUT" | "POST" | "DELETE";

type UseHttp<D = never> = {
    method?: Methods;
    url: string | URL;
    abortController?: AbortController;
    onSuccess?: (data: D) => Promise<void> | void;
    onError?: (
        request?: AxiosError["request"],
        response?: AxiosError["response"],
    ) => Promise<void> | void;
};

export default function useHttp<Data = unknown, Payload = unknown>({
    method = "POST",
    url,
    abortController,
    onSuccess,
    onError,
}: UseHttp<Data>) {
    /** temporarily eject the interceptor */

    const controller = abortController ?? new AbortController();
    const [submitting, toggle] = useToggle([false, true] as const);
    const [data, setData] = useState<Data | null>(null);
    const mutate = async (payload: Payload) => {
        try {
            toggle();

            const response = await axios[
                method.toLocaleLowerCase() as Lowercase<Methods>
            ]<Data>(
                ...[
                    isString(url) ? url : url.toString(),
                    payload,
                    { signal: controller.signal },
                ],
            );

            setData(response.data);

            if (!isUndefined(onSuccess)) {
                onSuccess(response.data);
            }

            toggle();
        } catch (error) {
            if (error instanceof AxiosError) {
                if (!isUndefined(onError)) {
                    onError(error.request, error.response);
                    toggle(false);

                    return;
                }

                notifications.show({
                    color: "red",
                    title: error.name,
                    message: error.message,
                });
            }

            console.log("An unexpected error occurred", JSON.stringify(error));

            toggle(false);
        }
    };

    useEffect(() => {
        return () => controller.abort();
    }, []);

    return { submitting, data, mutate };
}
