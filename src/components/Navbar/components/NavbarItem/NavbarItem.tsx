import { Flex, Icon, Link } from "@chakra-ui/react";
import { AnimatedBarItem, NavbarItemContainer, TextItem } from "./style";
import { Tooltip } from "@/components/ui/tooltip";
import { IconType } from "react-icons/lib";
import React from "react";

type NavbarItemProps = {
    text: string;
    link: string;
    IconComponent?: IconType;
    isVisible: boolean;
};

const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
    ({ isVisible, link, IconComponent, text }, ref) => {
        return (
            <Link
                variant="plain"
                href={link}
                style={{ textDecoration: "none", outline: "none" }}
            >
                <Tooltip
                    content={text}
                    openDelay={100}
                    closeDelay={100}
                    disabled={isVisible}
                >
                    <NavbarItemContainer ref={ref} cursor="pointer">
                        <Flex
                            justifyContent="flex-start"
                            alignItems="center"
                            gap="7px"
                        >
                            {IconComponent && (
                                <Icon
                                    as={IconComponent}
                                    fontSize="20px"
                                    color="#f8f0f0"
                                />
                            )}
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
    }
);

export default NavbarItem;
