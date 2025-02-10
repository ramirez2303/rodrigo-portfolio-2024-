import styled from "styled-components";

export const ChangeLanguageContainer = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 27px;
    right: 30px;
    z-index: 1000;
    border-radius: 6%;
    cursor: pointer;
    transition: 300ms ease-in-out, transform 100ms ease-in-out;
    background-color: rgba(119, 141, 169, 0.5);

    &:hover {
        background-color: rgba(119, 141, 169, 0.6);
    }
    &:active {
        transform: scale(0.95);
        background-color: rgba(119, 141, 169, 0.8);
    }
`;
