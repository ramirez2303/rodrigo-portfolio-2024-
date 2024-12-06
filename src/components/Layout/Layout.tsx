import { Box as HomeBg } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { LayoutContainer, LayoutWrapper } from "./style";
import homeBg from "../../assets/home-bg.webp";
import { useEffect, useState } from "react";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 800);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <LayoutWrapper>
            <HomeBg
                bgImage={`url(${homeBg})`}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                w="100vw"
                h="100vh"
            />
            <Navbar isVisible={visible} />
            <LayoutContainer>{children}</LayoutContainer>
        </LayoutWrapper>
    );
};

export default Layout;
