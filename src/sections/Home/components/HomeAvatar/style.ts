import styled from "styled-components";
import reactIcon from "/src/assets/react-icon.png";

export const HomeAvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 400px;
        height: 400px;
        background-image: url(${reactIcon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.8;
        animation: rotate 30s linear infinite;

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`;

export const HomeImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 2;
    position: relative;
    border: 5px solid rgba(141, 65, 65, 0.8);
`;
