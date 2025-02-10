import { For, Heading } from "@chakra-ui/react";
import { ProjectsGridContainer, ProjectsWrapper } from "./style";
import CardItem from "./components/CardItem";
import useSelectedCard from "./hook/useSelectedCard";
import { projects } from "@/utils/data";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileProjectsCards from "./components/MobileProjectsCards";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    const { isMobile } = useIsMobile();
    const { indexSelected, setIndexSelected, changeGrid } = useSelectedCard();

    return (
        <ProjectsWrapper id="projects">
            <Heading as="h2" size="2xl" fontWeight={700} mt="-120px">
                {t("projects")}
            </Heading>
            <ProjectsGridContainer>
                <For each={projects}>
                    {(project, ix) =>
                        isMobile ? (
                            <MobileProjectsCards key={ix} project={project} />
                        ) : (
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
                        )
                    }
                </For>
            </ProjectsGridContainer>
        </ProjectsWrapper>
    );
};

export default Projects;
