import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const LeftInfo = () => {
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

            <Flex
                gap="20px"
                mt="10px"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Button
                    colorPalette="fg"
                    variant="outline"
                    size="lg"
                    borderRadius="md"
                >
                    <Icon fontSize="22px" color="#f2f2f2">
                        <VscGithubInverted />
                    </Icon>
                    <Text fontSize="lg" fontWeight="medium" color="#f2f2f2">
                        Linkedin
                    </Text>
                </Button>
                <Button
                    colorPalette="fg"
                    variant="outline"
                    size="lg"
                    borderRadius="md"
                >
                    <Icon fontSize="22px" color="#f2f2f2">
                        <FaLinkedin />
                    </Icon>
                    <Text fontSize="lg" fontWeight="medium" color="#f2f2f2">
                        Github
                    </Text>
                </Button>
            </Flex>
        </Stack>
    );
};

export default LeftInfo;
