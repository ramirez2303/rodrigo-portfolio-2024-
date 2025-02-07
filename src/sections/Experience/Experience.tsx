import { Flex, Heading, Stack } from "@chakra-ui/react";
import { ExperienceWrapper } from "./style";
import { TimelineRoot } from "@/components/ui/timeline";
import ExperenciesCard from "./components/ExperenciesCard";

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
                        <ExperenciesCard
                            title="Libro de Pases"
                            position="Desarrollador Frontend React SSR"
                            date="Agosto 2022 - Diciembre 2024 (más de 2 años)"
                            description="Desarrollo de proyectos web con enfoque
                                        en el ámbito futbolístico, orientados a
                                        proporcionar herramientas de gestión y
                                        conexión en el mercado futbolístico.
                                        Colaboración en equipo aplicando
                                        metodologías ágiles (Agile)"
                        />
                        <ExperenciesCard
                            title="Biting"
                            position="Desarrollador Frontend React Junior"
                            date="Mayo 2022 - Julio 2022 (3 meses)"
                            description="Desarrollo de proyectos web con enfoque
                                        en el ámbito futbolístico, orientados a
                                        proporcionar herramientas de gestión y
                                        conexión en el mercado futbolístico.
                                        Colaboración en equipo aplicando
                                        metodologías ágiles (Agile)"
                        />
                    </TimelineRoot>
                </Flex>
            </Stack>
        </ExperienceWrapper>
    );
};

export default Experience;
