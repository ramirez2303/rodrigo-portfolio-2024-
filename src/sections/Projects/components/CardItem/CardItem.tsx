import { Flex, For, Heading, Stack, Text } from "@chakra-ui/react";
import { CardItemContainer } from "./style";
import { projectType } from "@/utils/types";
import { motion } from "motion/react";
import { Tag } from "@/components/ui/tag";
import ProjectImage from "./components/ProjectImage";

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
            onClick={(e) =>
                isSelected
                    ? console.log("holaa")
                    : onClick(e.target as HTMLDivElement)
            }
        >
            <Stack
                w="100%"
                h="100%"
                justifyContent="flex-start"
                alignItems="center"
                pointerEvents={isSelected ? "auto" : "none"}
                margin="auto"
            >
                <ProjectImage image={project.image} isSelected={isSelected} />
                <motion.div
                    initial={{ display: "none", opacity: 0 }}
                    animate={{
                        display: isSelected ? "block" : "none",
                        opacity: isSelected ? 1 : 0,
                    }}
                    transition={{
                        duration: isSelected ? 0.7 : 0.1,
                        delay: isSelected ? 0.2 : 0,
                    }}
                >
                    <Stack
                        maxW="80%"
                        justifyContent="center"
                        alignItems="center"
                        gap="10px"
                        margin="0 auto"
                    >
                        <Heading size="lg">{project.title}</Heading>
                        <Text
                            fontSize="md"
                            fontWeight="medium"
                            textAlign="center"
                        >
                            {project.description}
                        </Text>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap="10px"
                            mt="5px"
                        >
                            <For each={project.tools}>
                                {(item, ix) => (
                                    <Tag
                                        key={ix}
                                        size="lg"
                                        colorPalette="red"
                                        bgColor="transparent"
                                        color="#f2f2f2"
                                        padding="4px 12px"
                                        fontWeight="bold"
                                    >
                                        {item}
                                    </Tag>
                                )}
                            </For>
                        </Flex>
                    </Stack>
                </motion.div>
            </Stack>
        </CardItemContainer>
    );
};

export default CardItem;
