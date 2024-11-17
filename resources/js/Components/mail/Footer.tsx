import { Container, Link, Section, Text } from "@react-email/components";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Container className="text-center mt-45">
            <Section className="text-xs">
                <Link className="text-gray-700">About Us </Link> ・{" "}
                <Link className="text-gray-700">Terms and Condition</Link> ・{" "}
                <Link className="text-gray-700">Privacy Policy</Link>
            </Section>
            <Section>
                <Text className="text-xs text-gray-400">
                    ©{currentYear} JVoucher Inc・ All rights reserved.
                </Text>
            </Section>
        </Container>
    );
}
