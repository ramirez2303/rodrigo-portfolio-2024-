import { Flex, Stack } from "@chakra-ui/react";
import LeftInfo from "./components/LeftInfo";
import RightInfo from "./components/RightInfo";
import { HomeContainer } from "./style";
// import BottomInfo from "./components/BottomInfo";

const Home = () => {
    return (
        <HomeContainer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
        >
            <Stack
                maxWidth="800px"
                width="100%"
                justifyContent="flex-start"
                alignItems="center"
                gap="200px"
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
            </Stack>
        </HomeContainer>
    );
};

export default Home;
