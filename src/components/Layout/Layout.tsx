import Navbar from "../Navbar";
import { LayoutContainer, LayoutWrapper } from "./style";
import { Fragment, ReactNode } from "react";
import { Toaster } from "../ui/toaster";
import ScrollToTop from "../ScrollToTop";
import ChangeLanguage from "../ChangeLanguage";
import { useIsMobile } from "@/hooks/useIsMobile";

type LayoutProps = {
    children: ReactNode;
    visible: boolean;
};

const Layout = ({ children, visible }: LayoutProps) => {
    const { isMobile } = useIsMobile();
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
