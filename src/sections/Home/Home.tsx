import { Flex } from "@chakra-ui/react";
import LeftInfo from "./components/LeftInfo";
import RightInfo from "./components/RightInfo";
import { AnimatedContainer, HomeContainer } from "./style";

type HomeProps = {
    homeRef: (node?: Element | null) => void;
};

const Home = ({ homeRef }: HomeProps) => {
    return (
        <HomeContainer id="home" ref={homeRef}>
            <AnimatedContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Flex
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    mt="-50px"
                >
                    <LeftInfo />
                    <RightInfo />
                </Flex>
            </AnimatedContainer>
        </HomeContainer>
    );
};

export default Home;
