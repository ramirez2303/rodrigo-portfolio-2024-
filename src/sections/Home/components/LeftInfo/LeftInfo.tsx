import {
    Button,
    Flex,
    Heading,
    Icon,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useAnimate } from "motion/react";
import { IconContainer } from "./style";
import curriculum from "/src/assets/cv/rodrigoRamirezCV.pdf";

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
        <Stack gap="0px" maxW="360px">
            <Stack gap="15px">
                <Heading as="h1" fontSize="3xl" fontWeight="bold">
                    Rodrigo Exequiel Ramirez
                </Heading>
                <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt="-7px">
                    Desarrollador Frontend SSR
                </Heading>
            </Stack>
            <Stack gap="15px" mt="15px">
                <Flex
                    gap="20px"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Link
                        href="https://www.linkedin.com/in/rodrigo-ramirez-b643b9215/"
                        target="_blank"
                        width="100%"
                    >
                        <Button
                            width="100%"
                            size="md"
                            borderColor="#e1e1e1"
                            _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                            variant="outline"
                            borderRadius="md"
                        >
                            <Icon fontSize="22px" color="#e1e1e1">
                                <FaLinkedin />
                            </Icon>
                            <Text
                                fontSize="md"
                                fontWeight="medium"
                                color="#e1e1e1"
                            >
                                Linkedin
                            </Text>
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/ramirez2303"
                        target="_blank"
                        width="100%"
                    >
                        <Button
                            width="100%"
                            size="md"
                            borderColor="#e1e1e1"
                            _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                            variant="outline"
                            borderRadius="md"
                        >
                            <Icon fontSize="22px" color="#e1e1e1">
                                <VscGithubInverted />
                            </Icon>
                            <Text
                                fontSize="md"
                                fontWeight="medium"
                                color="#e1e1e1"
                            >
                                Github
                            </Text>
                        </Button>
                    </Link>
                </Flex>

                <Flex w="100%" ref={scope}>
                    <Link
                        w="100%"
                        href={curriculum}
                        download="Rodrigo Ramirez CV"
                        target="_blank"
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
                            <Stack
                                justify="center"
                                alignItems="center"
                                gap="1px"
                            >
                                <Text
                                    className="animatedCVText"
                                    fontSize="md"
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
                    </Link>
                </Flex>
            </Stack>
        </Stack>
    );
};

export default LeftInfo;
