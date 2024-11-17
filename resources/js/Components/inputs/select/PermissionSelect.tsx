"use client";

import { getPermissions } from "../../../utils/server/common";
import { toWords } from "@package/helpers/common";
import {
    type ComboboxData,
    MultiSelect,
    type MultiSelectProps,
} from "@package/ui/mantine";
import { useEffect, useState } from "react";

export function PermissionSelect({ ...props }: MultiSelectProps) {
    const [permissions, setPermissions] = useState<ComboboxData>([]);

    useEffect(() => {
        void (async () => {
            setPermissions(
                (await getPermissions()).map(({ name, id }) => ({
                    label: toWords(name),
                    value: `${id}`,
                })),
            );
        })();
    }, []);

    return <MultiSelect {...props} data={permissions} />;
}
