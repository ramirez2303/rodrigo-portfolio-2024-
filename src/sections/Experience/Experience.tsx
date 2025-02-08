import { Flex, For, Heading, Stack } from "@chakra-ui/react";
import { ExperienceWrapper } from "./style";
import { TimelineRoot } from "@/components/ui/timeline";
import ExperenciesCard from "./components/ExperenciesCard";
import { experiencesData } from "./data";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const { t } = useTranslation();
    return (
        <ExperienceWrapper id="experience">
            <Stack
                maxW={["auto", "800px"]}
                justify="flex-start"
                alignItems="center"
                mt={5}
            >
                <Heading
                    as="h2"
                    size={["2xl", "3xl"]}
                    fontWeight="bold"
                    mb="10"
                >
                    {t("experienceTitle")}
                </Heading>
                <Flex
                    w="100%"
                    justify="space-between"
                    align="flex-start"
                    gap={12}
                >
                    <TimelineRoot
                        size="lg"
                        variant="outline"
                        colorPalette="white"
                    >
                        <For each={experiencesData}>
                            {(experiencesData) => (
                                <ExperenciesCard
                                    title={experiencesData.title}
                                    position={experiencesData.position}
                                    date={experiencesData.date}
                                    description={experiencesData.description}
                                />
                            )}
                        </For>
                    </TimelineRoot>
                </Flex>
            </Stack>
        </ExperienceWrapper>
    );
};

export default Experience;
