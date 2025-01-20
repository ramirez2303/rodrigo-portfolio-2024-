import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ExperienceWrapper } from "./style";
// import ExperenciesCard from "./components/ExperenciesCard";
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
} from "@/components/ui/timeline";

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
                        maxW="lg"
                        colorPalette="white"
                    >
                        <TimelineItem colorPalette="white" mb={10}>
                            <TimelineConnector
                                bgColor="whiteAlpha.800"
                                outlineColor="whiteAlpha.500"
                            />
                            <TimelineContent
                                bgColor="whiteAlpha.100"
                                // border="1px solid rgba(248, 240, 240, 0.5)"
                                borderRadius="md"
                                padding="16px"
                                boxSizing="border-box"
                                position="relative"
                                boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                            >
                                <TimelineTitle
                                    as="h4"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                >
                                    Libro de Pases
                                </TimelineTitle>
                                <Stack>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Desarrollador Frontend React SSR
                                    </Text>
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        mt="-7px"
                                    >
                                        Agosto 2022 - Diciembre 2024 (más de 2
                                        años)
                                    </Text>
                                    <Text fontSize="md" fontWeight="medium">
                                        Desarrollo de proyectos web con enfoque
                                        en el ámbito futbolístico, orientados a
                                        proporcionar herramientas de gestión y
                                        conexión en el mercado futbolístico.
                                        Colaboración en equipo aplicando
                                        metodologías ágiles (Agile)
                                    </Text>
                                </Stack>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem colorPalette="white">
                            <TimelineConnector
                                bgColor="whiteAlpha.800"
                                outlineColor="whiteAlpha.500"
                            />
                            <TimelineContent
                                bgColor="whiteAlpha.100"
                                // border="1px solid rgba(248, 240, 240, 0.5)"
                                borderRadius="md"
                                padding="16px"
                                boxSizing="border-box"
                                boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                            >
                                <TimelineTitle
                                    as="h4"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                >
                                    Biting
                                </TimelineTitle>
                                <Stack>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Desarrollador Frontend React Junior
                                    </Text>
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        mt="-7px"
                                    >
                                        Mayo 2022 - Julio 2022 (3 meses)
                                    </Text>
                                    <Text fontSize="md" fontWeight="medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Modi, doloremque quo
                                        dolore laboriosam recusandae, repellat
                                        consequatur tenetur quidem atque tempore
                                        ducimus voluptatem, ad ipsa sint eveniet
                                        dolorum ipsam beatae quae.
                                    </Text>
                                </Stack>
                            </TimelineContent>
                        </TimelineItem>
                    </TimelineRoot>
                </Flex>

                {/* <Flex gap={10}>
                    <ExperenciesCard />
                    <ExperenciesCard />
                </Flex> */}
            </Stack>
        </ExperienceWrapper>
    );
};

export default Experience;
