"use client";

import { Tooltip, ActionIcon, CopyButton as _CopyButton } from "@mantine/core";
import { Check, Copy } from "@phosphor-icons/react";

type CopyButtonProps = {
    value: string;
    size?: number;
};

export function CopyButton({ value, size = 17 }: CopyButtonProps) {
    return (
        <_CopyButton value={value} timeout={2000}>
            {({ copied, copy }) => (
                <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
                    <ActionIcon color={copied ? "teal" : "gray"} variant="subtle" onClick={copy}>
                        {copied ? <Check size={size} /> : <Copy size={size} />}
                    </ActionIcon>
                </Tooltip>
            )}
        </_CopyButton>
    );
}
