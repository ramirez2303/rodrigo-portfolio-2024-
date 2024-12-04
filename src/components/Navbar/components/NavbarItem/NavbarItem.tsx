import { Flex, Icon } from "@chakra-ui/react";
import { AnimatedBarItem, NavbarItemContainer, TextItem } from "./style";

type NavbarItemProps = {
    text: string;
    link: string;
    icon?: JSX.Element;
};

const NavbarItem = ({ text, link, icon }: NavbarItemProps) => {
    return (
        <NavbarItemContainer cursor="pointer">
            <Flex justifyContent="flex-start" alignItems="center" gap="7px">
                <Icon fontSize="18px" color="chocolate">
                    {icon}
                </Icon>
                <TextItem fontSize="md" fontWeight="semibold">
                    {text}
                </TextItem>
            </Flex>
            <AnimatedBarItem />
        </NavbarItemContainer>
    );
};

export default NavbarItem;
