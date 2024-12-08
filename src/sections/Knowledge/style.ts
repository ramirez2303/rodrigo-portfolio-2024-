import { Flex, Stack } from "@chakra-ui/react";
import styled from "styled-components";

export const SectionBg = styled.div`
    width: 200vw;
    height: 200vh;
    position: absolute;
    top: 100vh;
    background: radial-gradient(
        circle,
        rgba(107, 164, 238, 0.2) 0%,
        rgba(141, 65, 65, 0.2) 70%
    );
`;

export const KnowledgeWrapper = styled(Flex)`
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const KnowledgeContainer = styled(Stack)`
    width: 1000px;
    min-height: 500px;
    height: auto;
    box-sizing: border-box;
    padding: 40px;
    margin-top: 20px;
`;
