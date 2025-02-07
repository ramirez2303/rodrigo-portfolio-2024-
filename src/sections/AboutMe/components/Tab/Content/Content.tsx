import { tabType } from "@/utils/types";
import { For, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import {
    AnimatedTabContainer,
    AnimatedContainer,
    ContentContainer,
} from "./style";
import { animate, useMotionValue } from "motion/react";
import AnimatedImages from "./components/AnimatedImages";
import AboutMeInfo from "./components/AboutMeInfo";
import { useTranslation } from "react-i18next";

type ContentProps = {
    values: tabType;
};

const Content = ({ values }: ContentProps) => {
    const { t } = useTranslation();
    const isAboutMe = values.value === "aboutMe";
    const isLibraries = values.value === "libraries";
    const animatedImages = [
        ...(values?.content ?? []),
        ...(values?.content ?? []),
    ];
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
            <Text
                fontSize="lg"
                fontWeight="medium"
                textAlign="left"
                opacity={0.9}
                minH="120px"
            >
                {t(values.description)}
            </Text>
            {!isAboutMe && (
                <AnimatedTabContainer>
                    <AnimatedContainer style={{ x: xTranslation }}>
                        <For each={animatedImages}>
                            {(item, ix) => (
                                <AnimatedImages
                                    key={item.name + ix}
                                    name={item.name}
                                    icon={item.icon}
                                    link={item.link}
                                    isLibraries={isLibraries}
                                />
                            )}
                        </For>
                    </AnimatedContainer>
                </AnimatedTabContainer>
            )}
            {isAboutMe && <AboutMeInfo />}
        </ContentContainer>
    );
};

export default Content;
