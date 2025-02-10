import { Image, Text } from "@chakra-ui/react";
import balcarceBg from "/src/assets/la-barrosa-1.jpg";
import { useTranslation } from "react-i18next";

const AboutMeInfo = () => {
    const { t } = useTranslation();
    return (
        <>
            <Image
                src={balcarceBg}
                w={["150px", "200px"]}
                h={["150px", "200px"]}
                borderRadius="full"
                mt="-10px"
            />
            <Text
                fontSize={["md", "lg"]}
                fontWeight="medium"
                textAlign="left"
                maxW="800px"
                opacity={0.9}
            >
                {t("aboutMeDescription2")} 🤩
            </Text>
        </>
    );
};

export default AboutMeInfo;
