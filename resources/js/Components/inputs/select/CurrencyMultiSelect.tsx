import { Currencies } from "@package/database/core";
import { MultiSelect, MultiSelectProps } from "@mantine/core";

export default function CurrencyMultiSelect({ ...props }: MultiSelectProps) {
    return (
        <MultiSelect
            {...props}
            label="Currency"
            data={Object.keys(Currencies).map((c) => ({
                label: c.toString().toUpperCase(),
                value: c,
            }))}
        />
    );
}
