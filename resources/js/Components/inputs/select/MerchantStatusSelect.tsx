import { OrganizationStatuses } from "@package/database/core";
import { Select, type SelectProps } from "@mantine/core";
import { toWords } from "@package/helpers/common";

const statuses = [
    {
        label: toWords(OrganizationStatuses.ACTIVE),
        value: OrganizationStatuses.ACTIVE,
    },
    {
        label: toWords(OrganizationStatuses.DISABLED),
        value: OrganizationStatuses.DISABLED,
    },
    {
        label: toWords(OrganizationStatuses.FOR_REVIEW),
        value: OrganizationStatuses.FOR_REVIEW,
    },
];

export function MerchantStatusSelect({ ...props }: SelectProps) {
    return <Select {...props} data={statuses} label="Status" />;
}
