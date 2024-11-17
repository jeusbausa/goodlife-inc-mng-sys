import { OrganizationRoleType } from "@package/database/core";
import { toWords } from "@package/helpers/common";
import { Select, type SelectProps } from "@mantine/core";

export function OrganizationRoleSelect({ ...props }: SelectProps) {
    const statuses = [
        {
            label: toWords(OrganizationRoleType.MEMBER),
            value: OrganizationRoleType.MEMBER,
        },
        {
            label: toWords(OrganizationRoleType.OWNER),
            value: OrganizationRoleType.OWNER,
        },
    ];

    return <Select {...props} data={statuses} label="Role" />;
}
