import { For } from "@chakra-ui/react";
import { ProjectsGridContainer, ProjectsWrapper } from "./style";
import CardItem from "./components/CardItem";
import useSelectedCard from "./hook/useSelectedCard";
import { projects } from "@/utils/data";

const Projects = () => {
    const { indexSelected, setIndexSelected, changeGrid } = useSelectedCard();

    return (
        <ProjectsWrapper id="projects">
            <ProjectsGridContainer>
                <For each={projects}>
                    {(project, ix) => (
                        <CardItem
                            key={ix}
                            project={project}
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
