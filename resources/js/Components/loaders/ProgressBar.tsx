import { AppProgressBar } from "next-nprogress-bar";
import { Suspense } from "react";

export function ProgressBar() {
    return (
        <Suspense>
            <AppProgressBar height="4px" color="green" options={{ showSpinner: false }} shallowRouting />
        </Suspense>
    );
}
