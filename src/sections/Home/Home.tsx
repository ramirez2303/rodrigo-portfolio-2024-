import { Flex } from "@chakra-ui/react";
import LeftInfo from "./components/LeftInfo";
import RightInfo from "./components/RightInfo";
import { AnimatedContainer, HomeContainer } from "./style.ts";

const Home = () => {
    return (
        <HomeContainer id="home">
            <AnimatedContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Flex
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <LeftInfo />
                    <RightInfo />
                </Flex>
                {/* <BottomInfo /> */}
            </AnimatedContainer>
        </HomeContainer>
    );
};

export default Home;
