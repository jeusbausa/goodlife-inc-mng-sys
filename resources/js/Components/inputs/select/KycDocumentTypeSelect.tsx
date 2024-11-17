import { KycDocumentType } from "@package/database/core";
import { Select, type SelectProps } from "@mantine/core";
import { toWords } from "@package/helpers/common";

export function KycDocumentTypeSelect({ ...props }: SelectProps) {
    return (
        <Select
            {...props}
            data={Object.entries(KycDocumentType).map(([, value]) => ({ label: toWords(value), value }))}
        />
    );
}
