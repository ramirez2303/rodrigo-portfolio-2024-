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
// import { useState } from "react";
import curriculum from "/src/assets/cv/rodrigoRamirezCV.pdf";

const LeftInfo = () => {
    // const [isCopied, setIsCopied] = useState(false);
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

    // const handleCopy = () => {
    //     if (isCopied) return;
    //     setIsCopied(true);
    //     navigator.clipboard.writeText("exeramirez23@gmail.com");
    //     setTimeout(() => {
    //         setIsCopied(false);
    //     }, 3000);
    // };

    return (
        <Stack gap="0px">
            <Stack gap="0px">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" mb="15px">
                    Rodrigo Exequiel Ramirez
                </Heading>
                <Heading
                    as="h3"
                    fontSize="2xl"
                    fontWeight="semibold"
                    opacity={0.8}
                    mt="-7px"
                >
                    Desarrollador Frontend
                </Heading>
            </Stack>
            <Stack gap="10px" mt="15px" maxW="260px">
                <Flex
                    gap="20px"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Link
                        href="https://www.linkedin.com/in/rodrigo-ramirez-b643b9215/"
                        target="_blank"
                    >
                        <Button
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
                    <Link href="https://github.com/ramirez2303" target="_blank">
                        <Button
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
                {/* <Flex>
                    <Flex
                        justifyContent="flex-start"
                        alignItems="center"
                        border="1px solid #e1e1e1"
                        borderRadius="md"
                        boxSizing="border-box"
                        padding="6px 10px"
                        mr={4}
                    >
                        <Text
                            fontSize="lg"
                            fontWeight="medium"
                            color="#e1e1e1"
                            _selection={{ bgColor: "rgba(242, 242, 242, 0.3)" }}
                        >
                            exeramirez23@gmail.com
                        </Text>
                    </Flex>

                    <Tooltip
                        content="Copiar"
                        openDelay={0}
                        closeDelay={0}
                        showArrow
                    >
                        <Button
                            size="lg"
                            borderColor="#e1e1e1"
                            _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                            variant="outline"
                            borderRadius="md"
                            onClick={handleCopy}
                        >
                            <Tooltip
                                content="Copiado!"
                                openDelay={0}
                                closeDelay={0}
                                open={isCopied}
                                showArrow
                            >
                                <Icon fontSize="22px" color="#e1e1e1">
                                    {isCopied ? <FaPaperclip /> : <FaCopy />}
                                </Icon>
                            </Tooltip>
                        </Button>
                    </Tooltip>
                </Flex> */}
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
