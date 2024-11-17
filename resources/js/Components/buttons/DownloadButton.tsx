import { Button } from "@mantine/core";
import { camelCase } from "lodash";
import { Download } from "@phosphor-icons/react";

type DownloadButtonProps = {
    name?: string;
    table: string;
    filters?: URLSearchParams;
};

export function DownloadButton({ table, filters, name = "download" }: DownloadButtonProps) {
    const handleClick = async () => {
        const endpoint = new URL(
            `api/export/${camelCase(table)}?${filters?.toString() ?? ""}`,
            process.env.NEXT_PUBLIC_APP_URL
        );
        const response = await fetch(endpoint);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = objectUrl;
        a.download = `${name}.csv`;

        document.body.appendChild(a);

        a.click();
        a.remove();
    };

    return (
        <Button autoContrast onClick={handleClick} leftSection={<Download size={18} />}>
            Download
        </Button>
    );
}
