import { Box, Stack } from "@chakra-ui/react";
import styled from "styled-components";

export const ProjectsWrapper = styled(Stack)`
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        -144deg,
        rgba(13, 27, 42, 1) 0%,
        rgba(119, 141, 169, 0.2) 100%
    );

    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ProjectsGridContainer = styled(Box)`
    width: 800px;
    max-width: 800px;
    height: 100%;
    max-height: 600px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 8px;
    grid-template-areas:
        "img-2 img-1 img-1 img-1"
        "img-3 img-1 img-1 img-1"
        "img-4 img-1 img-1 img-1"
        "img-5 img-1 img-1 img-1";

    .card[data-grid="img-1"] {
        grid-area: img-1;
        z-index: 1;
        cursor: default;
        margin-left: 50px;
        &:hover {
            transition: transform 300ms ease-in-out,
                box-shadow 300ms ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.11) 0px 22px 70px 4px;
            transform: scale(0.99);
        }
        &:active {
            box-shadow: rgba(0, 0, 0, 0.4) 0px 22px 70px 4px;
            transition: transform 300ms ease-in-out,
                box-shadow 300ms ease-in-out;
            transform: scale(0.96);
        }
    }

    .card[data-grid="img-2"] {
        grid-area: img-2;
        &:hover {
            margin-bottom: 10px;
        }
    }

    .card[data-grid="img-3"] {
        grid-area: img-3;
        &:hover {
            margin-bottom: 10px;
        }
    }

    .card[data-grid="img-4"] {
        grid-area: img-4;
        &:hover {
            margin-bottom: 10px;
        }
    }

    .card[data-grid="img-5"] {
        grid-area: img-5;
        &:hover {
            margin-bottom: 10px;
        }
    }
`;
