import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const LayoutWrapper = styled(Box)`
    width: 100vw;
    height: 200vh;
    background-color: #0d1b2a;
    overflow-x: hidden;
`;

export const LayoutContainer = styled(Box)`
    /* max-width: 1200px; */
    margin: 0 auto;
    padding-top: 20px;
    box-sizing: border-box;
    overflow-x: hidden;
    position: relative;
`;
