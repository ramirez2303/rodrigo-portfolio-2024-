import { motion } from "motion/react";
import styled from "styled-components";

export const HomeContainer = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: rgba(141, 65, 65, 0.3);
`;

export const AnimatedContainer = styled(motion.div)`
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 200px;
    z-index: 1;
`;
