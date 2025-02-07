import { Flex, For, Heading, Stack } from "@chakra-ui/react";
import { ExperienceWrapper } from "./style";
import { TimelineRoot } from "@/components/ui/timeline";
import ExperenciesCard from "./components/ExperenciesCard";
import { experiencesData } from "./data";

const Experience = () => {
    return (
        <ExperienceWrapper id="experience">
            <Stack maxW="800px" justify="flex-start" alignItems="center" mt={5}>
                <Heading as="h2" size="3xl" fontWeight="bold" mb="10">
                    Experencias
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
