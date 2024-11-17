import { Button, Section } from "@react-email/components";

type MainButtonProps = {
    title: string;
    href: string;
};

export default function MainButton({ title, href }: MainButtonProps) {
    return (
        <Section className="my-20">
            <Button className="bg-brand text-white rounded-md py-2 px-[14px]" href={href}>
                {title}
            </Button>
        </Section>
    );
}
