import { Select, SelectProps } from "@mantine/core";
import { Currencies } from "@package/database/core";

export function CurrencySelect({ ...props }: SelectProps) {
    return (
        <Select
            {...props}
            checkIconPosition="right"
            data={Object.keys(Currencies).map((c) => ({
                label: c.toString().toUpperCase(),
                value: c,
            }))}
        />
    );
}
