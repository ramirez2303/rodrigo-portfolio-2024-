import { Heading, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const HomeTexts = () => {
    const { t } = useTranslation();
    return (
        <Stack gap="15px">
            <Heading as="h1" fontSize="3xl" fontWeight="bold">
                Rodrigo Exequiel Ramirez
            </Heading>
            <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt="-7px">
                {t("frontendDeveloper")}
            </Heading>
        </Stack>
    );
};

export default HomeTexts;
