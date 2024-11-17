import { KycStatuses } from "@package/database/core";
import { Select, SelectProps } from "@mantine/core";
import { toWords } from "@package/helpers/common";

export function UserKycStatusSelect({ ...props }: SelectProps) {
    return (
        <Select
            {...props}
            data={Object.entries(KycStatuses).map(([, value]) => ({
                label: toWords(value),
                value,
            }))}
        />
    );
}
