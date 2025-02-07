"use client";

import { SWRHooksProps } from "@/types";
import axios from "axios";
import useSWR from "swr";

export function useStaffs(
    options?: SWRHooksProps<{
        page?: number;
        keyword?: string;
        branchId?: string;
    }>,
) {
    const { config, filters } = options;

    return useSWR(
        route("api.staffs.index", { ...filters }),
        (url) => axios.get(url).then((res) => res.data),
        config,
    );
}
