import { Text } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { ArrowContainer, LayoutContainer, LayoutWrapper } from "./style";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { BiSolidUpArrow } from "react-icons/bi";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        setVisible(window.scrollY < 800);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <AnimatePresence>
            <LayoutWrapper>
                {/* <Text position="fixed" bottom="10px" left="10px" zIndex={1}>
                    #ColapintoToF1In2025
                </Text> */}
                <Navbar isVisible={visible} />
                <LayoutContainer>{children}</LayoutContainer>
                <ArrowContainer onClick={scrollToTop} visible={visible}>
                    <BiSolidUpArrow id="arrowIcon" size="24px" />
                </ArrowContainer>
            </LayoutWrapper>
        </AnimatePresence>
    );
};

export default Layout;
