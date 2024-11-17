import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { Solutions } from "@package/database/core";

export default function SolutionMultiSelect(props: MultiSelectProps) {
    return (
        <MultiSelect
            {...props}
            label="Solution"
            data={Object.keys(Solutions).map((c) => ({
                label: c.toString().toUpperCase(),
                value: c,
            }))}
        />
    );
}
