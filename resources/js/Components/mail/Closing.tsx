import { Text } from "@react-email/components";

type ClosingProps = {
    sender?: string;
};

export default function Closing({ sender = "JVoucher Team" }: ClosingProps) {
    return (
        <Text className="text-sm text-gray-600 leading-[24px]">
            Best regards, <br />- <strong>{sender}</strong>
        </Text>
    );
}
