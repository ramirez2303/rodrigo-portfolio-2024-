import Navbar from "../Navbar";
import { LayoutContainer, LayoutWrapper } from "./style";
import { Fragment, ReactNode } from "react";
import { Toaster } from "../ui/toaster";
import ScrollToTop from "../ScrollToTop";
import ChangeLanguage from "../ChangeLanguage";

type LayoutProps = {
    children: ReactNode;
    visible: boolean;
};

const Layout = ({ children, visible }: LayoutProps) => {
    return (
        <Fragment>
            <LayoutWrapper>
                <ChangeLanguage />
                <Navbar isVisible={visible} />
                <LayoutContainer>{children}</LayoutContainer>
                <ScrollToTop visible={visible} />
            </LayoutWrapper>
            <Toaster />
        </Fragment>
    );
};

export default Layout;
