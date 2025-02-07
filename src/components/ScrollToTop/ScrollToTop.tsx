import { ArrowContainer } from "./style";
import { BiSolidUpArrow } from "react-icons/bi";

type ScrollToTopProps = {
    visible: boolean;
};

const ScrollToTop = ({ visible }: ScrollToTopProps) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <ArrowContainer onClick={scrollToTop} visible={visible}>
            <BiSolidUpArrow id="arrowIcon" size="24px" />
        </ArrowContainer>
    );
};

export default ScrollToTop;
