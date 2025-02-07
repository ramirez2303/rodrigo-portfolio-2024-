import Navbar from "../Navbar";
import { LayoutContainer, LayoutWrapper } from "./style";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { Toaster } from "../ui/toaster";
import ScrollToTop from "../ScrollToTop";
import ChangeLanguage from "../ChangeLanguage";

type LayoutProps = {
    children: ReactNode;
    visible: boolean;
};

const Layout = ({ children, visible }: LayoutProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isVisible = visible && !isMobile;

    return (
        <Fragment>
            <LayoutWrapper>
                <ChangeLanguage />
                <Navbar isVisible={isVisible} />
                <LayoutContainer>{children}</LayoutContainer>
                <ScrollToTop visible={visible} />
            </LayoutWrapper>
            <Toaster />
        </Fragment>
    );
};

export default Layout;
