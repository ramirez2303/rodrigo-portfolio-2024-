import { Fragment } from "react/jsx-runtime";
import Content from "./components/Tab/Content";
import Trigger from "./components/Tab/Trigger";
import { KnowledgeContainer, KnowledgeWrapper, SectionBg } from "./style";
import { For, Tabs } from "@chakra-ui/react";
import chakraUIIcon from "/src/assets/chakra-ui.png";
import materialUIIcon from "/src/assets/material-ui.png";
import framerMotionIcon from "/src/assets/framer-motion.png";
import styledComponentsIcon from "/src/assets/styled-components.png";
import reactQueryIcon from "/src/assets/react-query.png";
import storybookIcon from "/src/assets/storybook.png";
import jiraIcon from "/src/assets/jira.png";
import { tabType } from "@/utils/types";
import { motion } from "motion/react";
import { useState } from "react";

const AboutMe = () => {
    const [restartAnimation, setRestartAnimation] = useState(true);
    const toggleAnimation = () => {
        setRestartAnimation(false);
        setTimeout(() => {
            setRestartAnimation(true);
        }, 250);
    };

    const technologiesContent = [
        {
            name: "React",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            link: "https://reactjs.org/",
        },
        {
            name: "HTML",
            icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            name: "JavaScript",
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            name: "CSS",
            icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            name: "TypeScript",
            icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
            link: "https://www.typescriptlang.org/",
        },
    ];

    const librariesContent = [
        {
            name: "Chakra UI",
            icon: chakraUIIcon,
            link: "https://chakra-ui.com/",
        },
        {
            name: "Material UI",
            icon: materialUIIcon,
            link: "https://material-ui.com/",
        },
        {
            name: "Framer Motion",
            icon: framerMotionIcon,
            link: "https://www.framer.com/motion/",
        },
        {
            name: "styled-components",
            icon: styledComponentsIcon,
            link: "https://styled-components.com/",
        },
        {
            name: "React Query",
            icon: reactQueryIcon,
            link: "https://react-query.tanstack.com/",
        },
        {
            name: "Storybook",
            icon: storybookIcon,
            link: "https://storybook.js.org/",
        },
    ];

    const toolsContent = [
        {
            name: "VS Code",
            icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg",
            link: "https://code.visualstudio.com/",
        },
        {
            name: "Git",
            icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
            link: "https://git-scm.com/",
        },
        {
            name: "GitHub",
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
            link: "https://github.com/",
        },
        {
            name: "Figma",
            icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
            link: "https://www.figma.com/",
        },
        {
            name: "Jira",
            icon: jiraIcon,
            link: "https://www.atlassian.com/software/jira",
        },
    ];

    const tabs: tabType[] = [
        {
            value: "aboutMe",
            label: "Sobre Mi",
            content: undefined,
            description:
                "Hola! Soy Rodrigo, de Balcarce, Prov. de Buenos Aires, Argentina. Empece en el mundo de la programación de forma autodidacta, con una notebook prestada :) y poniendole muchas ganas. Lo primero que hice fueron cursos de Udemy que encontre gratis sobre HTML, CSS y Javascript, desde ese momento no pare y no pienso parar.",
        },
        {
            value: "technologies",
            label: "Tecnologias",
            content: technologiesContent,
            description:
                "He usado, tanto para proyectos personales para aprender como dentro de mi experiencia laboral React, TypeScript, Javascript, CSS y HTML. Creando interfaces de usuario atractivas y funcionales con la capacidad de traducir requisitos buscando un codigo limpio y eficiente.",
        },
        {
            value: "libraries",
            label: "Librerias",
            content: librariesContent,
            description:
                "Tengo conocimientos en librerías en el desarrollo frontend. Algunas de las que manejo son Chakra UI, Material UI, Framer Motion, Styled-components, React Router, React Query, React Hook Form y Storybook.",
        },
        {
            value: "tools",
            label: "Herramientas",
            content: toolsContent,
            description:
                "He trabajado con herramientas de desarrollo como Visual Studio Code, Git, GitHub, Figma, Jira, Postman, entre otras. Además, tengo experiencia en el uso de metodologías ágiles como Scrum",
        },
    ];

    const contentVariant = {
        active: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
        inactive: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.25,
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
                >
                    <Tabs.List
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        border="none"
                    >
                        <For each={tabs}>
                            {(tab) => <Trigger values={tab} />}
                        </For>
                    </Tabs.List>
                    <KnowledgeContainer>
                        <motion.div
                            variants={contentVariant}
                            initial="inactive"
                            animate={restartAnimation ? "active" : "inactive"}
                        >
                            <For each={tabs}>
                                {(tab) => <Content values={tab} />}
                            </For>
                        </motion.div>
                    </KnowledgeContainer>
                </Tabs.Root>
            </KnowledgeWrapper>
        </Fragment>
    );
};

export default AboutMe;
