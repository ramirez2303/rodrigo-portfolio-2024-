import { motion } from "motion/react";
import styled from "styled-components";

export const AnimatedImage = styled(motion.img)`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 1;
`;
