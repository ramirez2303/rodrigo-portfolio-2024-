import { motion } from "motion/react";
import styled from "styled-components";
import homeBg from "../../assets/home-background.png";

export const HomeContainer = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: rgba(141, 65, 65, 0.25);
    position: relative;

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
        opacity: 0.3;
    }

    @media (max-width: 768px) {
        box-sizing: border-box;
        padding: 0px 30px;
    }
`;

export const AnimatedContainer = styled(motion.div)`
    max-width: 800px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 200px;
    z-index: 1;
`;
