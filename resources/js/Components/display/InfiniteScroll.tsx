import { ScrollArea, ScrollAreaProps } from "@mantine/core";
import React from "react";

type InfiniteScrollProps = ScrollAreaProps & {
    isLoading?: boolean;
    hasMore?: boolean;
    onLoad: () => void;
};

export function InfiniteScroll({
    children,
    onLoad,
    hasMore = false,
    isLoading = false,
    ...props
}: InfiniteScrollProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const handleScrollChange = ({ y }: { x: number; y: number }) => {
        const scrollHeight = scrollRef.current!.scrollHeight;
        const clientHeight = scrollRef.current!.offsetHeight;
        const isAtBottom = Math.floor(y) >= scrollHeight - clientHeight - 1;

        if (isAtBottom && hasMore && !isLoading) {
            onLoad();
        }
    };

    return (
        <ScrollArea {...props} onScrollPositionChange={handleScrollChange} viewportRef={scrollRef}>
            {children}
        </ScrollArea>
    );
}
