import { tabType } from "@/utils/types";
import chakraUIIcon from "/src/assets/chakra-ui.png";
import materialUIIcon from "/src/assets/material-ui.png";
import framerMotionIcon from "/src/assets/framer-motion.png";
import styledComponentsIcon from "/src/assets/styled-components.png";
import reactQueryIcon from "/src/assets/react-query.png";
import storybookIcon from "/src/assets/storybook.png";
import jiraIcon from "/src/assets/jira.png";

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

export const tabs: tabType[] = [
    {
        value: "aboutMe",
        label: "aboutMe",
        content: undefined,
        description: "aboutMeDescription",
    },
    {
        value: "technologies",
        label: "technologies",
        content: technologiesContent,
        description: "technologiesDescription",
    },
    {
        value: "libraries",
        label: "libraries",
        content: librariesContent,
        description: "librariesDescription",
    },
    {
        value: "tools",
        label: "tools",
        content: toolsContent,
        description: "toolsDescription",
    },
];
