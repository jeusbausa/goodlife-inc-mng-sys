import { Anchor } from "@mantine/core";
import React from "react";

export function StyledTableLink({ href, children }: { children: React.ReactNode; href: string }) {
    return (
        <Anchor href={href} underline="never">
            {children}
        </Anchor>
    );
}
