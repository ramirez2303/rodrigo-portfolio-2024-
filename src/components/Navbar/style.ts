import styled from "styled-components";

export const NavbarContainer = styled.nav<{ $isVisible: boolean }>`
    width: ${({ $isVisible: isVisible }) => (isVisible ? "800px" : "300px")};
    gap: ${({ $isVisible: isVisible }) => (isVisible ? "0" : "10px")};
    height: 60px;
    margin: 0 auto;
    position: fixed;
    z-index: 10;
    top: 20px;

    padding: 10px 20px;
    box-sizing: border-box;

    transition: 300ms;

    display: flex;
    justify-content: space-around;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    background: rgba(141, 65, 65, 0.2);
    border-radius: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.5px);
    border: 1px solid rgba(18, 25, 96, 0.15);

    @media (max-width: 768px) {
        top: auto;
        bottom: 20px;
    }
`;
