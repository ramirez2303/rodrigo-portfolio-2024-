import { Fragment } from "react/jsx-runtime";
import Content from "./components/Tab/Content";
import Trigger from "./components/Tab/Trigger";
import { KnowledgeContainer, KnowledgeWrapper, SectionBg } from "./style";
import { For, Tabs } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState } from "react";
import { tabs } from "./data";

const AboutMe = () => {
    const [restartAnimation, setRestartAnimation] = useState(true);
    const toggleAnimation = () => {
        setRestartAnimation(false);
        setTimeout(() => {
            setRestartAnimation(true);
        }, 250);
    };

    const contentVariant = {
        active: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
        inactive: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0,
            },
        },
    };

    return (
        <Fragment>
            <SectionBg />
            <KnowledgeWrapper id="aboutMe">
                <Tabs.Root
                    defaultValue="aboutMe"
                    variant="line"
                    onValueChange={() => toggleAnimation()}
                    marginTop="100px"
                >
                    <Tabs.List
                        display={["grid", "flex"]}
                        gridTemplateColumns="repeat(2, 1fr)"
                        rowGap={4}
                        columnGap={4}
                        justifyContent="center"
                        alignItems="center"
                        border="none"
                    >
                        <For each={tabs}>
                            {(tab) => <Trigger key={tab.value} values={tab} />}
                        </For>
                    </Tabs.List>
                    <KnowledgeContainer>
                        <motion.div
                            variants={contentVariant}
                            initial="inactive"
                            animate={restartAnimation ? "active" : "inactive"}
                        >
                            <For each={tabs}>
                                {(tab) => (
                                    <Content key={tab.value} values={tab} />
                                )}
                            </For>
                        </motion.div>
                    </KnowledgeContainer>
                </Tabs.Root>
            </KnowledgeWrapper>
        </Fragment>
    );
};

export default AboutMe;
