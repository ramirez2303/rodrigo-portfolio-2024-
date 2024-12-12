import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const CardItemContainer = styled(Flex)<{ isSelected: boolean }>`
    width: 100%;
    height: 100%;
    max-width: 194px;
    min-height: 144px;
    max-height: 144px;
    position: relative;
    background: rgba(119, 141, 169, 0.5);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 22px 70px 4px;
    border-radius: 8px;

    box-sizing: border-box;

    transition: max-width 50ms, min-height 200ms, max-height 200ms,
        left 300ms ease-in-out, background 300ms ease-in-out,
        box-shadow 300ms ease-in-out;

    ${({ isSelected }) =>
        !isSelected
            ? `
        left: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 22px 70px 4px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        &:hover {
            background: rgba(119, 141, 169, 0.8);
            left: 10px;
        }

        &:active {
        background: rgba(119, 141, 169, 1);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 22px 70px 4px;
            left: 20px;
        }`
            : `
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0px;
            // padding: 16px;
            `}
`;

export const CardImage = styled.div<{ image: string; isSelected: boolean }>`
    width: 100%;
    height: 100%;
    min-height: 128px;
    max-height: 400px;
    z-index: 1;
    box-sizing: border-box;
    /* padding: 10px; */
    border-radius: ${({ isSelected }) =>
        isSelected ? "6px 6px 0px 0px" : "6px"};
    transition: 200ms ease-in-out;

    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    ${({ isSelected }) =>
        isSelected &&
        `
        &:hover {
            opacity: 0.6;
        }
        `}
`;

export const ExternalIconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 200ms ease-in-out;
    cursor: pointer;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);

    & > svg {
        transition: 200ms ease-in-out;
    }

    ${CardImage}:hover & {
        opacity: 1;

        svg {
            transform: scale(2);
        }
    }
`;
