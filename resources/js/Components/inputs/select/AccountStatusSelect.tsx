"use client";

import { UserStatuses } from "@package/database/core";
import { Select, type SelectProps } from "@mantine/core";

export function AccountStatusSelect({ ...props }: SelectProps) {
    return (
        <Select
            {...props}
            data={[
                { label: "Active", value: UserStatuses.ACTIVE },
                { label: "Disabled", value: UserStatuses.DISABLED },
            ]}
        />
    );
}
