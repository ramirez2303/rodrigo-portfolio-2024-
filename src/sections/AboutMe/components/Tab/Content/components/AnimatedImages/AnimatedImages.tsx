import { Tooltip } from "@/components/ui/tooltip";
import { Image, Stack } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

type AnimatedImagesProps = {
    name: string;
    icon: string;
    isLibraries: boolean;
};

const AnimatedImages = ({
    name,
    icon,
    isLibraries,
}: AnimatedImagesProps) => {
    return (
        <Fragment>
            <Tooltip content={name} openDelay={100} portalled showArrow>
                <Stack
                    justifyContent="center"
                    align="center"
                    maxW="100px"
                    gap="10px"
                    transition="200ms"
                    _hover={{
                        transform: "scale(1.1)",
                        opacity: 0.6,
                    }}
                >
                    <Image
                        src={icon}
                        alt={name}
                        w="50px"
                        h="50px"
                        maxW="50px"
                        maxH="50px"
                        objectFit="contain"
                        borderRadius={isLibraries ? "full" : ""}
                    />
                </Stack>
            </Tooltip>
        </Fragment>
    );
};

export default AnimatedImages;
