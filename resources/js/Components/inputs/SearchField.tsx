import { type TextInputProps, TextInput, CloseButton } from "@mantine/core";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { isEmpty } from "lodash";
import React from "react";

type SearchFieldProps = {
    onClear: () => void;
} & TextInputProps;

export function SearchField({ onClear, ...props }: SearchFieldProps) {
    const ref = React.useRef<HTMLInputElement>(null);

    return (
        <TextInput
            {...props}
            type="search"
            ref={ref}
            rightSection={
                isEmpty(ref.current?.value) ? (
                    <MagnifyingGlass size={18} />
                ) : (
                    <CloseButton
                        onClick={onClear}
                        style={{ display: !isEmpty(ref.current?.value) ? undefined : "none" }}
                    />
                )
            }
        />
    );
}
