/* eslint-disable react/no-children-prop */

import { Alert, Transition } from "@mantine/core";
import { isNull, isUndefined } from "lodash";
import React from "react";

type ResultMessageProps = {
    serverError?: string;
    result?: {
        success: boolean;
        message: string | null;
    };
    successTitle: string | React.ReactNode;
    successDescription?: string | React.ReactNode;
};

export function ResultMessage({ successDescription, successTitle, serverError, result }: ResultMessageProps) {
    const hasError = serverError || (!isUndefined(result) && !result?.success);
    const isSuccessful = result?.success;
    const hasNoErrorMessage = !result?.success && isNull(result?.message);

    if (hasNoErrorMessage) {
        return <></>;
    }

    const render = (styles: React.CSSProperties) => {
        return (
            <Alert
                style={styles}
                autoContrast
                fw={500}
                c="white"
                color={hasError ? "red.5" : "green.5"}
                title={hasError ? serverError || result?.message : successTitle}
                variant="filled"
                mb="sm"
            >
                {isSuccessful && successDescription}
            </Alert>
        );
    };

    return (
        <Transition
            children={render}
            duration={300}
            mounted={isSuccessful || Boolean(hasError)}
            timingFunction="ease"
            transition="fade"
        />
    );
}
