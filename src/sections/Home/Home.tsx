import { Flex } from "@chakra-ui/react";
import LeftInfo from "./components/LeftInfo";
import RightInfo from "./components/RightInfo";
import { AnimatedContainer, HomeContainer } from "./style.ts";
import { Box as HomeBg } from "@chakra-ui/react";
import homeBg from "../../assets/home-bg.webp";

const Home = () => {
    return (
        <HomeContainer>
            <HomeBg
                bgImage={`url(${homeBg})`}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                w="100vw"
                h="100vh"
                position="absolute"
                opacity="0.3"
                zIndex={0}
            />
            <AnimatedContainer
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
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
