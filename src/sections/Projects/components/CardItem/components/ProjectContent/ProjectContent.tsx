import { motion } from "framer-motion";
import { Button, Flex, For, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Tag } from "@/components/ui/tag";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";

type ProjectContentProps = {
    isSelected: boolean;
    title: string;
    description: string;
    tools: string[];
    links: {
        project: string;
        github?: string;
        githubBackend?: string;
    };
};

const ProjectContent = ({
    isSelected,
    title,
    description,
    tools,
    links,
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
                paddingBottom="20px"
            >
                <Heading size="lg">{title}</Heading>
                <Text fontSize="md" fontWeight="medium" textAlign="left">
                    {t(description)}
                </Text>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
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
                <Flex gap="20px" flexWrap="wrap" justifyContent="center">
                    <Link
                        href={links.project}
                        target="_blank"
                        width="100%"
                        textDecor="none"
                    >
                        <Button
                            width="100%"
                            size="md"
                            borderColor="#e1e1e1"
                            _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                            variant="outline"
                            borderRadius="md"
                        >
                            <FiExternalLink fontSize="22px" color="#e1e1e1" />
                            <Text fontSize="md" fontWeight="medium" color="#e1e1e1">
                                {t("toProject")}
                            </Text>
                        </Button>
                    </Link>
                    {links.github && (
                        <Link
                            href={links.github}
                            target="_blank"
                            width="100%"
                            textDecor="none"
                        >
                            <Button
                                width="100%"
                                size="md"
                                borderColor="#e1e1e1"
                                _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                                variant="outline"
                                borderRadius="md"
                            >
                                <VscGithubInverted fontSize="22px" color="#e1e1e1" />
                                <Text fontSize="md" fontWeight="medium" color="#e1e1e1">
                                    {t(links.githubBackend ? "toGithubFrontend" : "toGithub")}
                                </Text>
                            </Button>
                        </Link>
                    )}
                    {links.githubBackend && (
                        <Link
                            href={links.githubBackend}
                            target="_blank"
                            width="100%"
                            textDecor="none"
                        >
                            <Button
                                width="100%"
                                size="md"
                                borderColor="#e1e1e1"
                                _hover={{ bgColor: "rgba(141, 65, 65, 0.3)" }}
                                variant="outline"
                                borderRadius="md"
                            >
                                <VscGithubInverted fontSize="22px" color="#e1e1e1" />
                                <Text fontSize="md" fontWeight="medium" color="#e1e1e1">
                                    {t("toGithubBackend")}
                                </Text>
                            </Button>
                        </Link>
                    )}
                </Flex>
            </Stack>
        </motion.div>
    );
};

export default ProjectContent;
