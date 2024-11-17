import { UserTypes } from "@package/database/core";
import { Select, type SelectProps } from "@mantine/core";
import { toWords } from "@package/helpers/common";

export function UserTypeSelect({ hideValues = [], ...props }: SelectProps & { hideValues?: UserTypes[] }) {
    const _values = Object.entries(UserTypes)
        .filter(([, value]) => !hideValues.includes(value))
        .map(([, type]) => ({
            label: toWords(type),
            value: type,
        }));

    return <Select {...props} data={_values} />;
}
