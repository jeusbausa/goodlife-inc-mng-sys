"use client";

import { ChangeEvent, useState } from "react";
import { isEmpty } from "lodash";
import { useDebouncedCallback } from "@mantine/hooks";
import {
    Combobox,
    ComboboxTarget,
    ComboboxProps,
    Loader,
    TextInput,
    useCombobox,
    ComboboxDropdown,
    ComboboxOption,
    ComboboxOptions,
    ComboboxEmpty,
    ScrollAreaAutosize,
} from "@mantine/core";
import { useBranches } from "@/hooks/swr/branches";

type BranchInputProps = {
    onSelectAction: (branchId: string) => void;
} & ComboboxProps;

export default function BranchSelect({
    onSelectAction,
    ...props
}: BranchInputProps) {
    const [keyword, setKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const combobox = useCombobox({ scrollBehavior: "smooth" });
    const [value, setValue] = useState("");
    const { data: branches } = useBranches({
        filters: { keyword },
        config: {
            revalidateOnFocus: false,
            fallbackData: [],
            onSuccess: () => {
                setIsLoading(false);
            },
        },
    });

    const debounceSearch = useDebouncedCallback((value) => {
        setKeyword(value);
        setIsLoading(false);
    }, 1000);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        debounceSearch(e.currentTarget.value);
        setValue(e.currentTarget.value);
        combobox.resetSelectedOption();
        combobox.openDropdown();
    };

    const options = branches?.data?.map((item) => (
        <ComboboxOption value={item.id} key={item.id}>
            {item.name}
        </ComboboxOption>
    ));

    return (
        <Combobox
            {...props}
            onOptionSubmit={(value, option) => {
                setValue(option.children as string);
                onSelectAction(JSON.parse(value));
                combobox.closeDropdown();
            }}
            withinPortal={false}
            store={combobox}
        >
            <ComboboxTarget>
                <TextInput
                    value={value}
                    label="Branch"
                    placeholder="Search branch"
                    onChange={handleOnChange}
                    onClick={() => combobox.openDropdown()}
                    onBlur={() => combobox.closeDropdown()}
                    rightSection={isLoading && <Loader size={18} />}
                    withAsterisk
                />
            </ComboboxTarget>
            <ComboboxDropdown>
                <ComboboxOptions>
                    <ScrollAreaAutosize mah={200} type="scroll">
                        {!isEmpty(branches?.data) ? (
                            options
                        ) : (
                            <ComboboxEmpty>No results found</ComboboxEmpty>
                        )}
                    </ScrollAreaAutosize>
                </ComboboxOptions>
            </ComboboxDropdown>
        </Combobox>
    );
}
