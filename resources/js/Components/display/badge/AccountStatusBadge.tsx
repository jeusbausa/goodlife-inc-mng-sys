import { Badge } from "@mantine/core";
import { UserStatuses } from "@package/database/core";
import { useMemo } from "react";

type AccountStatusBadgeProps = {
    status: UserStatuses;
};

export function AccountStatusBadge({ status }: AccountStatusBadgeProps) {
    const badgeColor = useMemo(() => {
        switch (status) {
            case UserStatuses.ACTIVE:
                return "green";
            case UserStatuses.DISABLED:
                return "red";
        }
    }, [status]);

    return (
        <Badge color={badgeColor} size="sm" variant="light">
            {status}
        </Badge>
    );
}
