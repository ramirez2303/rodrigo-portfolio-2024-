import { Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { IconContainer } from "../../style";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useAnimate } from "framer-motion";
import curriculum from "/src/assets/cv/rodrigoRamirezCV.pdf";
import { useTranslation } from "react-i18next";

const HomeCVButton = () => {
    const { t } = useTranslation();
    const [scope, animate] = useAnimate();

    const opacity = { opacity: 1 };
    const noOpacity = { opacity: 0 };
    const duration = { duration: 0.1 };

    const onButtonHover = () => {
        animate([
            [".animatedCVText", noOpacity, duration],
            [".animatedCVIcon", opacity, duration],
        ]);
    };
    const onMouseLeave = () => {
        animate([
            [".animatedCVIcon", noOpacity, duration],
            [".animatedCVText", opacity, duration],
        ]);
    };

    return (
        <Flex w="100%" ref={scope}>
            <Link
                w="100%"
                href={curriculum}
                download="Rodrigo Ramirez CV"
                target="_blank"
                textDecor="none"
            >
                <Button
                    borderColor="#e1e1e1"
                    _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                    variant="outline"
                    size="md"
                    borderRadius="md"
                    w="100%"
                    overflow="hidden"
                    onMouseEnter={onButtonHover}
                    onMouseLeave={onMouseLeave}
                >
                    <Stack justify="center" alignItems="center" gap="1px">
                        <Text
                            className="animatedCVText"
                            fontSize="md"
                            fontWeight="medium"
                            color="#e1e1e1"
                        >
                            {t("downloadCv")}
                        </Text>
                        <IconContainer
                            initial={{ opacity: 0 }}
                            className="animatedCVIcon"
                        >
                            <FaCloudDownloadAlt size="xl" />
                        </IconContainer>
                    </Stack>
                </Button>
            </Link>
        </Flex>
    );
};

export default HomeCVButton;
