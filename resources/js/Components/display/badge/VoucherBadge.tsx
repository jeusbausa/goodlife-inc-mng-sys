import { Badge } from "@mantine/core";
import { TransactionStatuses } from "@package/database/core";
import { useMemo } from "react";

type VoucherBadgeProps = {
    status: TransactionStatuses;
};

export function VoucherBadge({ status }: VoucherBadgeProps) {
    const badgeColor = useMemo(() => {
        switch (status) {
            case TransactionStatuses.PROCESSING:
                return "green.0";
            case TransactionStatuses.REDEEMED:
                return "dark.9";
            case TransactionStatuses.AVAILABLE:
                return "green.6";
            case TransactionStatuses.FAILED:
                return "red";
        }
    }, [status]);

    return (
        <Badge size="md" color={badgeColor} fw="bold">
            {status}
        </Badge>
    );
}
