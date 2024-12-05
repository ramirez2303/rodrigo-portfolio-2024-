import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const LayoutWrapper = styled(Box)`
    width: 100vw;
    height: 200vh;
    background-color: #0d1b2a;
    overflow-x: hidden;
`;

export const LayoutContainer = styled(Flex)`
    justify-content: center;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
    position: relative;
`;
