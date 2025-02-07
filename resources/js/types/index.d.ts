import { SWRConfiguration } from "swr";
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export type SWRHooksProps<F = unknown, Q = unknown> = {
    filters?: F;
    query?: Q;
    headers?: Record<string, string>;
    config?: Omit<SWRConfiguration, "fetcher">;
};
