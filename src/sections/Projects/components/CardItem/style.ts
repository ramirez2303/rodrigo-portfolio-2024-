import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const CardItemContainer = styled(Flex)<{ isSelected: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(119, 141, 169, 0.5);
    border-radius: 8px;
    transition: left 300ms ease-in-out, background 300ms ease-in-out,
        box-shadow 300ms ease-in-out;

    ${({ isSelected }) =>
        !isSelected &&
        `
        left: 0;

      
        &:hover {
          background: rgba(119, 141, 169, 0.8);
          left: 10px;
        }

        &:active {
          background: rgba(119, 141, 169, 1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          left: 20px;
        }`}
`;
