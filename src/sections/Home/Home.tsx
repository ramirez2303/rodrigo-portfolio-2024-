import { Flex } from "@chakra-ui/react";
import HomeInfo from "./components/HomeInfo";
import HomeAvatar from "./components/HomeAvatar";
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
                    <HomeInfo />
                    <HomeAvatar />
                </Flex>
            </AnimatedContainer>
        </HomeContainer>
    );
};

export default Home;
