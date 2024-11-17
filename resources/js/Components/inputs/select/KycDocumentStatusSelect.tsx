import { KycDocumentStatuses } from "@package/database/core";
import { Select, type SelectProps } from "@mantine/core";
import { toWords } from "@package/helpers/common";

export function KycDocumentStatusSelect({ ...props }: SelectProps) {
    return (
        <Select
            {...props}
            data={Object.entries(KycDocumentStatuses).map(([, value]) => ({
                label: toWords(value),
                value,
            }))}
        />
    );
}
