import { Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const NavbarItemContainer = styled(Flex)`
    flex-direction: column;
    transition: 100ms ease-in-out, transform 200ms ease-in-out;
    position: relative;

    padding: 12px;
    box-sizing: border-box;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        opacity: 0.5;
    }
`;

export const TextItem = styled(Text)`
    user-select: none;
`;

export const AnimatedBarItem = styled.div`
    width: 0;
    height: 2px;
    background-color: #8d4141;
    transition: width 300ms ease-in-out;
    position: relative;
    opacity: 0.7;
    top: 4px;
    left: -5px;

    ${NavbarItemContainer}:hover & {
        width: calc(100% + 10px);
    }
`;
