import { Flex } from "@chakra-ui/react";
import { motion } from "motion/react";
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

export const ArrowContainer = styled(motion.div)`
    display: flex;

    position: fixed;
    bottom: 20px;
    right: 20px;

    box-sizing: border-box;
    padding: 12px;

    border: 1px solid rgba(225, 225, 225, 0.5);
    border-radius: 50%;

    transition: 200ms;
    cursor: pointer;

    &:hover {
        background-color: rgba(225, 225, 225, 0.2);
        #arrowIcon {
            color: rgba(107, 164, 238, 0.5);
        }
    }
`;
