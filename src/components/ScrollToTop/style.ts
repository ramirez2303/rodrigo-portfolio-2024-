import { motion } from "framer-motion";
import styled from "styled-components";

export const ArrowContainer = styled(motion.div)<{ visible: boolean }>`
    display: flex;
    opacity: ${({ visible }) => (!visible ? "1" : "0")};

    position: fixed;
    bottom: 20px;
    right: 30px;

    box-sizing: border-box;
    padding: 12px;

    border: 1px solid rgba(225, 225, 225, 0.5);
    border-radius: 50%;

    transition: background-color 200ms ease-in-out, border 200ms ease-in-out,
        opacity 300ms;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }

    &:hover {
        background-color: rgba(225, 225, 225, 0.2);
        #arrowIcon {
            color: rgba(107, 164, 238, 0.5);
        }
    }
`;
