import { UserStatuses } from "@package/database/core";
import { Select, type SelectProps } from "@mantine/core";

export function UserStatusSelect({ ...props }: SelectProps) {
    const values = [
        {
            label: "Active",
            value: UserStatuses.ACTIVE,
        },
        {
            label: "Disabled",
            value: UserStatuses.DISABLED,
        },
    ];

    return <Select {...props} data={values} />;
}
