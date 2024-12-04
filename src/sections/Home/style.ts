import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import homeBg from "../../assets/home-bg.png";

export const HomeContainer = styled(Flex)`
    width: 100vw;
    height: 100vh;
`;

export const HomeBg = styled(Flex)`
    width: 100%;
    height: 100%;
    background-image: url(${homeBg});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
`;
