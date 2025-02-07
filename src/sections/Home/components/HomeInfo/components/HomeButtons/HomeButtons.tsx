import { Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const HomeButtons = () => {
    return (
        <Flex gap="20px" justifyContent="flex-start" alignItems="center">
            <Link
                href="https://www.linkedin.com/in/rodrigo-ramirez-b643b9215/"
                target="_blank"
                width="100%"
                textDecor="none"
            >
                <Button
                    width="100%"
                    size="md"
                    borderColor="#e1e1e1"
                    _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                    variant="outline"
                    borderRadius="md"
                >
                    <Icon as={FaLinkedin} fontSize="22px" color="#e1e1e1" />
                    <Text fontSize="md" fontWeight="medium" color="#e1e1e1">
                        Linkedin
                    </Text>
                </Button>
            </Link>
            <Link
                href="https://github.com/ramirez2303"
                target="_blank"
                width="100%"
                textDecor="none"
            >
                <Button
                    width="100%"
                    size="md"
                    borderColor="#e1e1e1"
                    _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                    variant="outline"
                    borderRadius="md"
                >
                    <Icon
                        as={VscGithubInverted}
                        fontSize="22px"
                        color="#e1e1e1"
                    />
                    <Text fontSize="md" fontWeight="medium" color="#e1e1e1">
                        Github
                    </Text>
                </Button>
            </Link>
        </Flex>
    );
};

export default HomeButtons;
