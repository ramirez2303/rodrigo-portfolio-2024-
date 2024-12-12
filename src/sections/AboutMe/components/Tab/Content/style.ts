import { Flex, Tabs } from "@chakra-ui/react";
import { motion } from "motion/react";
import styled from "styled-components";

export const ContentContainer = styled(Tabs.Content)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const AnimatedTabContainer = styled(Flex)`
    max-width: 500px;
    min-height: 100px;
    max-height: 100px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 40px;
    background-color: rgba(141, 65, 65, 0.4);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 19px 38px,
        rgba(0, 0, 0, 0.08) 0px 15px 12px;
`;

export const AnimatedContainer = styled(motion.div)`
    width: fit-content;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    & > *:not(:last-child) {
        margin-right: 50px;
    }
`;
