import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const NavbarContainer = styled(Flex)`
    width: 800px;
    height: 60px;
    margin: 0 auto;
    position: fixed;
    z-index: 1;
    top: 20px;

    padding: 10px;
    box-sizing: border-box;

    justify-content: space-around;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    /* From https://css.glass */
    background: rgba(119, 141, 169, 0.3);
    border-radius: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    border: 1px solid rgba(18, 25, 96, 0.15);
`;
