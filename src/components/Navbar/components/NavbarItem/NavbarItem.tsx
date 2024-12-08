import { Flex, Icon, Link } from "@chakra-ui/react";
import { AnimatedBarItem, NavbarItemContainer, TextItem } from "./style";
import { Tooltip } from "@/components/ui/tooltip";

type NavbarItemProps = {
    text: string;
    link: string;
    icon?: JSX.Element;
    isVisible: boolean;
};

const NavbarItem = ({ text, link, icon, isVisible }: NavbarItemProps) => {
    return (
        <Link
            variant="plain"
            href={link}
            style={{ textDecoration: "none", outline: "none" }}
        >
            <Tooltip content={text} openDelay={100} closeDelay={100}>
                <NavbarItemContainer cursor="pointer">
                    <Flex
                        justifyContent="flex-start"
                        alignItems="center"
                        gap="7px"
                    >
                        <Icon fontSize="20px" color="#f8f0f0">
                            {icon}
                        </Icon>
                        <TextItem
                            fontSize="md"
                            fontWeight="semibold"
                            display={isVisible ? "flex" : "none"}
                            transition="0.3s"
                            color="#f8f0f0"
                        >
                            {text}
                        </TextItem>
                    </Flex>
                    <AnimatedBarItem />
                </NavbarItemContainer>
            </Tooltip>
        </Link>
    );
};

export default NavbarItem;
