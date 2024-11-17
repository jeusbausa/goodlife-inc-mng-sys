import { Badge } from "@mantine/core";
import { KycDocumentStatuses } from "@package/database/core";
import { useMemo } from "react";

type DocumentStatusBadgeProps = {
    status: KycDocumentStatuses;
};

export function DocumentStatusBadge({ status }: DocumentStatusBadgeProps) {
    const badgeColor = useMemo(() => {
        switch (status) {
            case KycDocumentStatuses.PENDING:
                return "green.0";
            case KycDocumentStatuses.REJECTED:
                return "red";
            case KycDocumentStatuses.APPROVED:
                return "green.6";
        }
    }, [status]);

    return (
        <Badge size="md" color={badgeColor} fw="bold">
            {status}
        </Badge>
    );
}
