"use client";

import { Text, type TextProps } from "@mantine/core";
import * as _TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReactTimeAgo from "react-time-ago";

_TimeAgo.default.addDefaultLocale(en);

type TimeAgoProps = { date: Date } & TextProps;

export function TimeAgo({ ...props }: TimeAgoProps) {
    const { date, ...rest } = props;

    return (
        <Text {...rest}>
            <ReactTimeAgo date={date} locale="en-US" />
        </Text>
    );
}
