import { isNull } from "lodash";
import { modals } from "@mantine/modals";
import { rescue } from "@package/helpers/common";
import CompleteProfileDetails from "./profile/CompleteProfileDetails";

type CompleteProfileModalProps = {
    error: string;
    countryServerAction: (
        allowedCountriesOnly: boolean,
    ) => Promise<
        Array<{ id: number; alpha2: string; name: string; alpha3: string }>
    >;
};

export const completeProfileModal = async ({
    error,
}: CompleteProfileModalProps) => {
    const _error = await rescue(
        () => JSON.parse(error),
        () => null,
    );

    if (!isNull(_error)) {
        modals.open({
            size: "lg",
            title: "Complete profile first before buying",
            children: <CompleteProfileDetails />,
            centered: true,
        });
    }
};
