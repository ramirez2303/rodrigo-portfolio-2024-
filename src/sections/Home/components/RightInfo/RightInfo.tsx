import { Image, Stack } from "@chakra-ui/react";
import rodrigoIMG from "../../../../assets/rodrigoIMG.png";

const RightInfo = () => {
    return (
        <Stack position="relative" justifyContent="center" alignItems="center">
            <Image
                src={rodrigoIMG}
                w="300px"
                h="300px"
                borderRadius="full"
                zIndex="1"
            />
        </Stack>
    );
};

export default RightInfo;
