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
import { useClients } from "@/hooks/swr/clients";

type ClientInputProps = {
    onSelectAction: (clientId: string) => void;
} & ComboboxProps;

export default function ClientSelect({
    onSelectAction,
    ...props
}: ClientInputProps) {
    const [keyword, setKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const combobox = useCombobox({ scrollBehavior: "smooth" });
    const [value, setValue] = useState("");
    const { data: clients } = useClients({
        filters: { keyword },
        config: {
            revalidateOnFocus: false,
            revalidateOnMount: false,
            fallbackData: [],
            onSuccess: () => {
                if (isEmpty(clients.data)) {
                    setValue("");
                }
                setIsLoading(false);
            },
        },
    });

    const debounceSearch = useDebouncedCallback((value) => {
        if (value) {
            setKeyword(value);
            return;
        }

        setIsLoading(false);
        combobox.closeDropdown();
    }, 1000);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        debounceSearch(e.currentTarget.value);
        setValue(e.currentTarget.value);
        combobox.resetSelectedOption();
        combobox.openDropdown();
    };

    const options = clients?.data?.map((item) => (
        <ComboboxOption value={item.id} key={item.id}>
            {item.fullName}
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
            store={combobox}
        >
            <ComboboxTarget>
                <TextInput
                    value={value}
                    label="Client name"
                    placeholder="Search client"
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
                        {!isEmpty(clients?.data) ? (
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
