import { Body, Container, Tailwind } from "@react-email/components";
import Footer from "../../components/mail/Footer";
import JVoucherLogo from "../../components/mail/JVoucherLogo";
import React from "react";

type BodyContainerProps = {
    children: React.ReactNode;
};

export default function BodyContainer({ children }: BodyContainerProps) {
    return (
        <Tailwind
            config={{
                theme: {
                    extend: {
                        colors: { brand: "#2cb883" },
                        spacing: {
                            0: "0px",
                            10: "10px",
                            20: "20px",
                            45: "45px",
                        },
                    },
                },
            }}
        >
            <Body className="bg-slate-50 text-base font-sans py-45">
                <Container className="border border-solid border-stone-200 bg-white rounded p-20 my-45 mx-auto max-w-[465px]">
                    <JVoucherLogo />
                    {children}
                </Container>
                <Footer />
            </Body>
        </Tailwind>
    );
}
