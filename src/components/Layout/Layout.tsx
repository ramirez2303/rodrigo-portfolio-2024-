import Navbar from "../Navbar";
import { ArrowContainer, LayoutContainer, LayoutWrapper } from "./style";
import { ReactNode } from "react";
import { AnimatePresence } from "motion/react";
import { BiSolidUpArrow } from "react-icons/bi";
import { Toaster } from "../ui/toaster";

type LayoutProps = {
    children: ReactNode;
    visible: boolean;
};

const Layout = ({ children, visible }: LayoutProps) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <AnimatePresence>
            <LayoutWrapper>
                <Navbar isVisible={visible} />
                <LayoutContainer>{children}</LayoutContainer>
                <ArrowContainer onClick={scrollToTop} visible={visible}>
                    <BiSolidUpArrow id="arrowIcon" size="24px" />
                </ArrowContainer>
            </LayoutWrapper>
            <Toaster />
        </AnimatePresence>
    );
};

export default Layout;
