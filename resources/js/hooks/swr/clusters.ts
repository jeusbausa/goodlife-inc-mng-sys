"use client";

import { SWRHooksProps } from "@/types";
import axios from "axios";
import useSWR from "swr";

export function useClusters(options?: SWRHooksProps<{ page: number; }>) {
    const { config, filters } = options;

    return useSWR(
        route("api.clusters.index", { ...filters }),
        (url) => axios.get(url).then((res) => res.data),
        config,
    );
}

export function useCluster(clusterId: string, options?: SWRHooksProps<{ with: "members"; }>) {

    return useSWR(
        route("api.clusters.show", { cluster: clusterId, ...options.filters }),
        (url) => axios.get(url).then((res) => res.data),
        options?.config,
    );
}
