import { Heading, Stack } from "@chakra-ui/react";
import { ContactWrapper } from "./style";
import ContactButton from "./components/ContactButton";
import { FaWhatsapp } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import ClipboardButton from "./components/ClipboardButton";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <ContactWrapper id="contact">
            <Stack
                maxW="800px"
                justify="center"
                align="center"
                m="180px auto 0px"
                gap={10}
            >
                <Heading as="h2" size={["2xl", "3xl"]} fontWeight="bold">
                    {t("contactMe")}
                </Heading>
                <ContactButton
                    icons={[
                        {
                            icon: FaLinkedin,
                            link: "https://www.linkedin.com/in/rodrigo-ramirez-b643b9215/",
                        },
                        {
                            icon: VscGithubInverted,
                            link: "https://github.com/ramirez2303",
                        },
                    ]}
                />
                <Stack justifyContent="flex-start" alignItems="center" gap={8}>
                    <Stack
                        justifyContent="flex-start"
                        alignItems="center"
                        gap={5}
                    >
                        <Heading as="h4" size="lg" fontWeight="bold">
                            {t("or")}
                        </Heading>
                        <Heading as="h4" size="xl" fontWeight="bold">
                            {t("leaveMessage")}
                        </Heading>
                    </Stack>
                    <ContactButton
                        icons={[
                            {
                                icon: FaWhatsapp,
                                link: "https://wa.me/2266537973",
                            },
                            {
                                icon: TbMailFilled,
                                link: "mailto:exeramirez23@gmail.com",
                            },
                        ]}
                    />
                    <ClipboardButton />
                </Stack>
            </Stack>
        </ContactWrapper>
    );
};

export default Contact;
