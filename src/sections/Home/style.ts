import { motion } from "motion/react";
import styled from "styled-components";

export const HomeContainer = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background: rgb(13, 27, 42);
    background: linear-gradient(
        144deg,
        rgba(13, 27, 42, 1) 0%,
        rgba(119, 141, 169, 0.2) 100%
    );
`;

export const AnimatedContainer = styled(motion.div)`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 200px;
`;
