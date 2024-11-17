"use client";

import {
    Anchor,
    AnchorProps,
    PolymorphicComponentProps,
    useComputedColorScheme,
} from "@mantine/core";
import { isEqual } from "lodash";
import { V } from "../../../types";
import React from "react";

type StyledAnchorProps = PolymorphicComponentProps<V, AnchorProps> & {
    label: React.ReactNode;
    href?: string;
};

export function StyledAnchor({ ...props }: StyledAnchorProps) {
    const colorScheme = useComputedColorScheme();
    const { label, ...rest } = props;
    return (
        <Anchor
            c={isEqual(colorScheme, "dark") ? "gray.4" : "dark.9"}
            {...rest}
        >
            {label}
        </Anchor>
    );
}
