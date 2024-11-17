import { Text } from "@react-email/components";

type HeadingProps = {
    title: string;
};

export default function Heading({ title }: HeadingProps) {
    return <Text className="my-20 leading-8 text-2xl font-bold">{title}</Text>;
}
