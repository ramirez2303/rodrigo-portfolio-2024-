import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const ExperenciesCardContainer = styled(Flex)`
    width: 200px;
    height: 200px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(256, 256, 256, 0.3);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
    }
`;
