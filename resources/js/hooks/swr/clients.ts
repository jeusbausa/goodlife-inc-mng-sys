"use client";

import { SWRHooksProps } from "@/types";
import axios from "axios";
import useSWR from "swr";

export function useClients(options?: SWRHooksProps<{ keyword: string, }>) {
    const { config, filters } = options;

    return useSWR(
        route("api.clients.index", { ...filters }),
        (url) => axios.get(url).then((res) => res.data),
        config,
    );
}
