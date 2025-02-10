import { motion } from "framer-motion";
import { Flex, For, Heading, Stack, Text } from "@chakra-ui/react";
import { Tag } from "@/components/ui/tag";
import { useTranslation } from "react-i18next";

type ProjectContentProps = {
    isSelected: boolean;
    title: string;
    description: string;
    tools: string[];
};

const ProjectContent = ({
    isSelected,
    title,
    description,
    tools,
}: ProjectContentProps) => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ display: "none", opacity: 0 }}
            animate={{
                display: isSelected ? "block" : "none",
                opacity: isSelected ? 1 : 0,
            }}
            transition={{
                duration: isSelected ? 0.7 : 0.1,
                delay: isSelected ? 0.4 : 0,
            }}
        >
            <Stack
                maxW="80%"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                margin="10px auto 0"
            >
                <Heading size="lg">{title}</Heading>
                <Text fontSize="md" fontWeight="medium" textAlign="left">
                    {t(description)}
                </Text>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                    mt="5px"
                >
                    <For each={tools}>
                        {(item, ix) => (
                            <Tag
                                key={ix}
                                size="lg"
                                colorPalette="fg"
                                bgColor="rgba(0, 0, 0, 0.1)"
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
    );
};

export default ProjectContent;
