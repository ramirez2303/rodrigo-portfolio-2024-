import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const LayoutWrapper = styled(Flex)`
    width: 100vw;
    background-color: #0d1b2a;
    overflow-x: hidden;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const LayoutContainer = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
    position: relative;
`;
