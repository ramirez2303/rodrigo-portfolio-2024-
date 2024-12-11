import { motion } from "motion/react";
import styled from "styled-components";
import homeBg from "../../assets/home-bg.webp";

export const HomeContainer = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: rgba(141, 65, 65, 0.3);

    &::before {
        content: "";
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        background-image: url(${homeBg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.1;
    }
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
