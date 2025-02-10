import { projectType } from "@/utils/types";
import { MobileProjectCardContainer } from "./style";
import { Flex, For, Heading, Icon, Span } from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import { Fragment } from "react/jsx-runtime";
import ProjectDialog from "../ProjectDialog";

type MobileProjectsCardsProps = {
    project: projectType;
};

const MobileProjectsCards = ({ project }: MobileProjectsCardsProps) => {
    return (
        <Fragment>
            <MobileProjectCardContainer>
                <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Heading as="h4" fontSize="xl" fontWeight="bold">
                        {project.title}
                    </Heading>
                    <ProjectDialog project={project}>
                        <Icon
                            as={BsPlusLg}
                            w="25px"
                            h="25px"
                            cursor="pointer"
                        />
                    </ProjectDialog>
                </Flex>
                <Flex justifyContent="flex-start" gap="10px">
                    <For each={project.tools}>
                        {(tools) => (
                            <Span fontSize="sm" fontWeight="medium">
                                {tools}
                            </Span>
                        )}
                    </For>
                </Flex>
            </MobileProjectCardContainer>
        </Fragment>
    );
};

export default MobileProjectsCards;
