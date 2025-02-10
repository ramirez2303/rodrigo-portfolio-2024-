import { Stack } from "@chakra-ui/react";
import { CardItemContainer } from "./style";
import { projectType } from "@/utils/types";
import ProjectImage from "./components/ProjectImage";
import ProjectContent from "./components/ProjectContent";

type CardItemProps = {
    project: projectType;
    className: string;
    dataGrid: string;
    isSelected: boolean;
    onClick: (card: HTMLDivElement) => void;
};

const CardItem = ({
    project,
    className,
    dataGrid,
    isSelected,
    onClick,
}: CardItemProps) => {
    return (
        <CardItemContainer
            className={className}
            data-grid={dataGrid}
            isSelected={isSelected}
            onClick={(e) => !isSelected && onClick(e.target as HTMLDivElement)}
        >
            <Stack
                w="100%"
                h="100%"
                justifyContent="flex-start"
                alignItems="center"
                pointerEvents={isSelected ? "auto" : "none"}
                margin="auto"
            >
                <ProjectImage
                    image={project.image}
                    links={project.links}
                    isSelected={isSelected}
                />
                <ProjectContent {...project} isSelected={isSelected} />
            </Stack>
        </CardItemContainer>
    );
};

export default CardItem;
