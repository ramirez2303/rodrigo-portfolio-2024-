import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useAnimate } from "motion/react";
import { IconContainer } from "./style";

const LeftInfo = () => {
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
        <Stack gap="0px">
            <Stack gap="0px">
                <Text fontSize="3xl" fontWeight="bold" mb="5px">
                    Rodrigo Exequiel Ramirez
                </Text>
                <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    opacity={0.9}
                    mt="-7px"
                >
                    Desarrollador Frontend
                </Text>
            </Stack>
            <Stack gap="0px" mt="5px">
                <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    opacity={0.9}
                    mt="-5px"
                >
                    Balcarce, Buenos Aires, Argentina
                </Text>
            </Stack>

            <Stack gap="20px" mt="15px" maxW="300px">
                <Flex
                    gap="20px"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Button
                        size="lg"
                        borderColor="#e1e1e1"
                        _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                        variant="outline"
                        borderRadius="md"
                    >
                        <Icon fontSize="22px" color="#e1e1e1">
                            <VscGithubInverted />
                        </Icon>
                        <Text fontSize="lg" fontWeight="medium" color="#e1e1e1">
                            Linkedin
                        </Text>
                    </Button>
                    <Button
                        size="lg"
                        borderColor="#e1e1e1"
                        _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                        variant="outline"
                        borderRadius="md"
                    >
                        <Icon fontSize="22px" color="#e1e1e1">
                            <FaLinkedin />
                        </Icon>
                        <Text fontSize="lg" fontWeight="medium" color="#e1e1e1">
                            Github
                        </Text>
                    </Button>
                </Flex>
                <Flex w="100%" ref={scope}>
                    <Button
                        borderColor="#e1e1e1"
                        _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                        variant="outline"
                        size="lg"
                        borderRadius="md"
                        w="100%"
                        overflow="hidden"
                        onMouseEnter={onButtonHover}
                        onMouseLeave={onMouseLeave}
                    >
                        <Stack justify="center" alignItems="center" gap="1px">
                            <Text
                                className="animatedCVText"
                                fontSize="lg"
                                fontWeight="medium"
                                color="#e1e1e1"
                            >
                                Descargar CV
                            </Text>
                            <IconContainer
                                initial={{ opacity: 0 }}
                                className="animatedCVIcon"
                            >
                                <FaCloudDownloadAlt size="xl" />
                            </IconContainer>
                        </Stack>
                    </Button>
                </Flex>
            </Stack>
        </Stack>
    );
};

export default LeftInfo;
