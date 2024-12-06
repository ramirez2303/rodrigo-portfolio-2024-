import { Flex, Stack } from "@chakra-ui/react";
import styled from "styled-components";

export const KnowledgeWrapper = styled(Flex)`
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const KnowledgeContainer = styled(Stack)`
    width: 800px;
    min-height: 500px;
    height: auto;
    background: rgba(119, 141, 169, 0.1);
    border-radius: 0px 6px 6px 6px;
    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3); */
    box-sizing: border-box;
    padding: 40px;
`;
