import { Stack } from "@chakra-ui/react";
import HomeTexts from "./components/HomeTexts";
import HomeButtons from "./components/HomeButtons";
import HomeCVButton from "./components/HomeCVButton";

const HomeInfo = () => {
    return (
        <Stack w="100%" gap="0px" maxW={["auto", "360px"]}>
            <HomeTexts />
            <Stack gap="15px" mt="15px">
                <HomeButtons />
                <HomeCVButton />
            </Stack>
        </Stack>
    );
};

export default HomeInfo;
