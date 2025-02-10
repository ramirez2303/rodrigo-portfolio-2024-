import chakraUIIcon from "/src/assets/chakra-ui.png";
import materialUIIcon from "/src/assets/material-ui.png";
import framerMotionIcon from "/src/assets/framer-motion.png";
import styledComponentsIcon from "/src/assets/styled-components.png";
import reactQueryIcon from "/src/assets/react-query.png";
import storybookIcon from "/src/assets/storybook.png";
import jiraIcon from "/src/assets/jira.png";
import { tabType } from "./types";
import advice from "/src/assets/projects/advice.jpeg";
import ecommerce from "/src/assets/projects/e-commerce.jpeg";
import ecommerceReact from "/src/assets/projects/ecommerceFront.jpeg";
import order from "/src/assets/projects/order.png";
import huddleLandingPage from "/src/assets/projects/huddle-landing-page.png";

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

export const projects = [
    {
        image: ecommerceReact,
        title: "E-commerce React",
        description: "eCommerceReact",
        tools: ["React", "Javascript", "ChakraUI"],
        links: {
            project: "https://fake-e-commerce-product-page.vercel.app/",
            github: "https://github.com/ramirez2303/fake-e-commerce-product-page",
        },
    },
    {
        image: ecommerce,
        title: "E-commerce HTML",
        description: "eCommerceHtml",
        tools: ["HTML", "Javascript", "CSS"],
        links: {
            project:
                "https://ramirez2303.github.io/E-commerce-Design-Practice/",
            github: "https://github.com/ramirez2303/E-commerce-Design-Practice",
        },
    },
    {
        image: advice,
        title: "Advice",
        description: "advice",
        tools: ["React", "Javascript", "ChakraUI"],
        links: {
            project:
                "https://advice-generator-frontendmentor-challenge.vercel.app/",
            github: "https://github.com/ramirez2303/advice-generator-frontendmentor-challenge",
        },
    },
    {
        image: order,
        title: "Order",
        description: "order",
        tools: ["HTML", "CSS"],
        links: {
            project:
                "https://ramirez2303.github.io/Order-Cummary-Component-Challenge/",
            github: "https://github.com/ramirez2303/Order-Cummary-Component-Challenge",
        },
    },
    {
        image: huddleLandingPage,
        title: "Huddle Landing Page",
        description: "landingPage",
        tools: ["HTML", "CSS"],
        links: {
            project:
                "https://ramirez2303.github.io/Huddle-Landing-Page-Challenge-/",
            github: "https://github.com/ramirez2303/Huddle-Landing-Page-Challenge-",
        },
    },
];
