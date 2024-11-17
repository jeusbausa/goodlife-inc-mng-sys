import { Select, SelectProps } from "@mantine/core";
import { TransactionStatuses } from "@package/database/core";
import { isEqual } from "lodash";

export function TransactionStatusSelect({ ...props }: SelectProps) {
    return (
        <Select
            {...props}
            checkIconPosition="right"
            data={Object.keys(TransactionStatuses)
                .filter((status) => !isEqual(status, TransactionStatuses.PENDING))
                .map((c) => ({
                    label: c.toString().toUpperCase(),
                    value: c,
                }))}
            label="Status"
        />
    );
}
