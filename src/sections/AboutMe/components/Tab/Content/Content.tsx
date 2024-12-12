import { tabType } from "@/utils/types";
import { For, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import {
    AnimatedTabContainer,
    AnimatedContainer,
    ContentContainer,
} from "./style";
import { animate, useMotionValue } from "motion/react";
import { Tooltip } from "@/components/ui/tooltip";
import balcarceBg from "../../../../../assets/la-barrosa-1.jpg";

type ContentProps = {
    values: tabType;
};

const Content = ({ values }: ContentProps) => {
    const isAboutMe = values.value === "aboutMe";
    const isLibraries = values.value === "libraries";
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const controls = animate(xTranslation, [-250, 250], {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return () => controls.stop();
    }, [xTranslation]);

    return (
        <ContentContainer value={values.value}>
            <Stack alignItems="center" maxW="800px" minH="120px" maxH="120px">
                <Text fontSize="lg" fontWeight="medium" textAlign="center">
                    {values.description}
                </Text>
            </Stack>
            {values?.content?.length && (
                <AnimatedTabContainer>
                    <AnimatedContainer style={{ x: xTranslation }}>
                        <For
                            each={[
                                ...(values?.content ?? []),
                                ...(values?.content ?? []),
                            ]}
                        >
                            {(item) => (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    target="_blank"
                                >
                                    <Tooltip
                                        content={item.name}
                                        openDelay={100}
                                        portalled
                                        showArrow
                                    >
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
                                                src={item.icon}
                                                alt={item.name}
                                                w="50px"
                                                h="50px"
                                                maxW="50px"
                                                maxH="50px"
                                                objectFit="contain"
                                                borderRadius={
                                                    isLibraries ? "full" : ""
                                                }
                                            />
                                        </Stack>
                                    </Tooltip>
                                </Link>
                            )}
                        </For>
                    </AnimatedContainer>
                </AnimatedTabContainer>
            )}
            {isAboutMe && (
                <>
                    <Image
                        src={balcarceBg}
                        w="200px"
                        h="200px"
                        borderRadius="full"
                        mt="-10px"
                    />
                    <Text
                        fontSize="lg"
                        fontWeight="medium"
                        textAlign="center"
                        maxW="800px"
                        mt="-20px"
                    >
                        Apasionado por el desarrollo frontend y siempre estoy
                        buscando aprender nuevas tecnologías y mejorar mis
                        habilidades. 🤩
                    </Text>
                </>
            )}
        </ContentContainer>
    );
};

export default Content;
