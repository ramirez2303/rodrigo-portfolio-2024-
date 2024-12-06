import { For, Text } from "@chakra-ui/react";
import { ProjectsGridContainer, ProjectsWrapper } from "./style";
import CardItem from "./components/CardItem";
import useSelectedCard from "./hook/useSelectedCard";

const Projects = () => {
    const { indexSelected, setIndexSelected, changeGrid } = useSelectedCard();
    const projects = [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
        "Project 5",
    ];
    return (
        <ProjectsWrapper gap={20}>
            <Text fontSize="3xl" fontWeight="bold">
                Proyectos
            </Text>
            <ProjectsGridContainer>
                <For each={projects}>
                    {(project, ix) => (
                        <CardItem
                            key={ix}
                            className={`card card-${ix + 1}`}
                            dataGrid={`img-${ix + 1}`}
                            isSelected={indexSelected === ix + 1}
                            onClick={(card) => {
                                setIndexSelected(ix + 1);
                                changeGrid(card);
                            }}
                        />
                    )}
                </For>
            </ProjectsGridContainer>
        </ProjectsWrapper>
    );
};

export default Projects;
