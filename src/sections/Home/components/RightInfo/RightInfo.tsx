import { Image, Stack } from "@chakra-ui/react";
import balcarceBg from "../../../../assets/la-barrosa-1.jpg";
import rodrigoIMG from "../../../../assets/rodrigoIMG.png";

const RightInfo = () => {
    return (
        <Stack
            position="relative"
            justifyContent="center"
            alignItems="center"
            mt="-75px"
        >
            <Image
                src={rodrigoIMG}
                w="300px"
                h="300px"
                borderRadius="full"
                zIndex="1"
            />
            <Image
                src={balcarceBg}
                w="300px"
                h="300px"
                borderRadius="full"
                position="absolute"
                top="100px"
                left="150px"
            />
        </Stack>
    );
};

export default RightInfo;
