import { Span } from "@chakra-ui/react";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { ChangeLanguageContainer } from "./style";
import { changeLanguage } from "@/utils";

const ChangeLanguage = () => {
    const [language, setLanguage] = useState(i18next.language);
    const languageText = `${language[0].toLocaleUpperCase()}${language[1]}`;

    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setLanguage(lng);
        };

        i18next.on("languageChanged", handleLanguageChange);

        return () => {
            i18next.off("languageChanged", handleLanguageChange);
        };
    }, []);

    return (
        <ChangeLanguageContainer onClick={() => changeLanguage()}>
            <Span fontSize="md" fontWeight="medium" cursor="pointer">
                {languageText}
            </Span>
        </ChangeLanguageContainer>
    );
};

export default ChangeLanguage;
