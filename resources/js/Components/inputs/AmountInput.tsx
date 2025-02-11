import { NumberInput, NumberInputProps } from "@mantine/core";

export default function AmountInput(props: NumberInputProps) {
    return (
        <NumberInput
            {...props}
            allowNegative={false}
            decimalScale={2}
            fixedDecimalScale
            hideControls
            max={9999999}
            min={1}
            thousandSeparator=","
        />
    );
}
