"use client";

import { getRoles } from "../../../utils/server/common";
import {
    type ComboboxData,
    Select,
    type SelectProps,
} from "@package/ui/mantine";
import { useEffect, useState } from "react";

export function RoleSelect({ ...props }: SelectProps) {
    const [roles, setRoles] = useState<ComboboxData>([]);

    useEffect(() => {
        void (async () => {
            setRoles(
                (await getRoles()).map(({ id, name }) => ({
                    label: name,
                    value: `${id}`,
                })),
            );
        })();
    }, []);

    return <Select searchable {...props} data={roles} />;
}
