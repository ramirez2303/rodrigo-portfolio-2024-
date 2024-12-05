import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { VscGithubInverted } from "react-icons/vsc";

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
                    opacity={0.7}
                    mt="-5px"
                >
                    Desarrollador Frontend
                </Text>
                <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    opacity={0.7}
                    mt="-5px"
                >
                    React - Typescript
                </Text>
            </Stack>

            <Stack gap="0px" mt="10px">
                <Text
                    fontSize="lg"
                    fontWeight="regular"
                    opacity={0.7}
                    mt="-5px"
                >
                    Balcarce, Buenos Aires, Argentina
                </Text>
            </Stack>

            <Flex gap="15px" mt="15px" alignItems="center">
                <Flex alignItems="center" gap="7px" cursor="pointer">
                    <Icon
                        fontSize="22px"
                        color="#f2f2f2"
                        _hover={{ color: "rgba(119, 141, 169, 0.3)" }}
                    >
                        <VscGithubInverted />
                    </Icon>
                    <Text fontSize="lg" fontWeight="medium" opacity={0.7}>
                        Linkedin
                    </Text>
                </Flex>
                <Flex alignItems="center" gap="7px" cursor="pointer">
                    <Icon
                        fontSize="22px"
                        color="#f2f2f2"
                        _hover={{ color: "rgba(119, 141, 169, 0.3)" }}
                    >
                        <VscGithubInverted />
                    </Icon>
                    <Text fontSize="lg" fontWeight="medium" opacity={0.7}>
                        Github
                    </Text>
                </Flex>
            </Flex>
        </Stack>
    );
};

export default LeftInfo;
