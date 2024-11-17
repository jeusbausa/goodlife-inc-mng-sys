"use client";

import { getCountries } from "../../../utils/server/common";
import { isEqual } from "lodash";
import { type ComboboxData, MultiSelect, type MultiSelectProps, Select, type SelectProps } from "@mantine/core";
import { useEffect, useState } from "react";

type CountrySelectProps = (SelectProps | MultiSelectProps) & {
    multiple?: boolean;
    fieldAsValue?: "id" | "alpha2";
    allowedCountriesOnly?: boolean;
};

export function CountrySelect({
    multiple = false,
    allowedCountriesOnly = false,
    fieldAsValue = "alpha2",
    ...props
}: CountrySelectProps) {
    const [countries, setCountries] = useState<ComboboxData>([]);

    useEffect(() => {
        void (async () => {
            setCountries(
                (await getCountries(allowedCountriesOnly)).map(({ name, id, alpha2 }) => ({
                    label: name,
                    value: isEqual(fieldAsValue, "alpha2") ? alpha2.toUpperCase() : id.toString(),
                }))
            );
        })();
    }, [fieldAsValue, allowedCountriesOnly]);

    if (multiple) {
        return (
            <MultiSelect
                {...(props as MultiSelectProps)}
                data={countries}
                comboboxProps={{ shadow: "lg" }}
                checkIconPosition="right"
                nothingFoundMessage="Nothing found..."
            />
        );
    }

    return (
        <Select
            {...(props as SelectProps)}
            data={countries}
            comboboxProps={{ shadow: "lg" }}
            checkIconPosition="right"
        />
    );
}
