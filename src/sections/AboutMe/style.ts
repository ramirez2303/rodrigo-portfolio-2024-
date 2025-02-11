import { Stack } from "@chakra-ui/react";
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

export const KnowledgeWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px) {
        width: 100vw;
        box-sizing: border-box;
        padding: 0px 30px;
    }
`;

export const KnowledgeContainer = styled(Stack)`
    width: 800px;
    min-height: 500px;
    height: auto;
    box-sizing: border-box;
    padding: 20px 0px 40px;
    margin-top: 20px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 100vw;
        padding: 0;
        margin-top: 40px;
    }
`;
