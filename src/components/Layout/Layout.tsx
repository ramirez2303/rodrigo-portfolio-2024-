import { Box as HomeBg } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { LayoutContainer, LayoutWrapper } from "./style";
import homeBg from "../../assets/home-bg.webp";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
            <LayoutContainer>
                <Navbar />
                {children}
            </LayoutContainer>
        </LayoutWrapper>
    );
};

export default Layout;
