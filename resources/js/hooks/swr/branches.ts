"use client";

import { SWRHooksProps } from "@/types";
import axios from "axios";
import useSWR from "swr";

export function useBranches(
    options?: SWRHooksProps<{ page?: number; keyword?: string }>,
) {
    const { config, filters } = options;

    return useSWR(
        route("api.branches.index", { ...filters }),
        (url) => axios.get(url).then((res) => res.data),
        config,
    );
}
