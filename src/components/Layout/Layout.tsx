import Navbar from "../Navbar";
import { LayoutContainer, LayoutWrapper } from "./style";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutWrapper>
            <LayoutContainer>
                <Navbar />
                {children}
            </LayoutContainer>
        </LayoutWrapper>
    );
};

export default Layout;
