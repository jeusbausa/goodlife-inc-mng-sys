"use client";

import { IMaskInput, ReactMaskProps } from "react-imask";
import { Input, InputProps, InputWrapper, __InputWrapperProps } from "@mantine/core";

type MobileNumberInputProps = Pick<__InputWrapperProps, "withAsterisk"> & InputProps & ReactMaskProps<HTMLInputElement>;

export function MobileNumberInput({ ...props }: MobileNumberInputProps) {
    const { error, withAsterisk, ...rest } = props;

    return (
        <InputWrapper error={error} label="Mobile number" withAsterisk={withAsterisk}>
            <Input
                mask="+(00) 000-000-0000"
                placeholder="+(00) 000-000-0000"
                component={IMaskInput}
                error={error}
                {...rest}
            />
        </InputWrapper>
    );
}
