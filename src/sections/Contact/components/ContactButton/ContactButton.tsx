import { Flex, Icon as ChakraIcon, Link } from "@chakra-ui/react";

type ContactButtonProps = {
    icons: { icon: React.ElementType; link: string }[];
};

const ContactButton = ({ icons }: ContactButtonProps) => {
    const [Icon1, Icon2] = icons.map((iconObj) => iconObj.icon);
    const [link1, link2] = icons.map((iconObj) => iconObj.link);
    return (
        <Flex
            maxW="230px"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            padding="0px 2px 0px 10px"
            boxSizing="border-box"
            borderRadius="3px"
        >
            <Link href={link1} target="_blank">
                <ChakraIcon
                    as={Icon1}
                    width="45px"
                    height="45px"
                    color="#e1e1e1"
                    cursor="pointer"
                    transition="200ms"
                    _hover={{
                        color: "rgba(107, 164, 238, 0.7)",
                        transform: "scale(1.1)",
                    }}
                />
            </Link>
            <Link href={link2} target="_blank">
                <ChakraIcon
                    as={Icon2}
                    width="45px"
                    height="45px"
                    color="#e1e1e1"
                    cursor="pointer"
                    transition="200ms"
                    _hover={{
                        color: "rgba(107, 164, 238, 0.7)",
                        transform: "scale(1.1)",
                    }}
                />
            </Link>
        </Flex>
    );
};

export default ContactButton;
