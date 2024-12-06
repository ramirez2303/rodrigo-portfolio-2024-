import Content from "./components/Tab/Content";
import Trigger from "./components/Tab/Trigger";
import { KnowledgeContainer, KnowledgeWrapper } from "./style";
import { For, Tabs } from "@chakra-ui/react";

const Knowledge = () => {
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
      {
        name: "Node.js",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        link: "https://nodejs.org/",
      },
    ];

    const librariesContent = [
      {
        name: "Chakra UI",
        icon: "https://chakra-ui.com/og-image.png",
        link: "https://chakra-ui.com/",
      },
      {
        name: "React Router",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/React_Router_Logo.png",
        link: "https://reactrouter.com/",
      },
      {
        name: "React Query",
        icon: "https://react-query.tanstack.com/_next/static/images/twitter-og-7c2b1c8b7b0f4b0c1b8f1e0c6b0b3e4c.png",
        link: "https://react-query.tanstack.com/",
      },
      {
        name: "React Hook Form",
        icon: "https://react-hook-form.com/og.png",
        link: "https://react-hook-form.com/",
      },
      {
        name: "React Icons",
        icon: "https://react-icons.github.io/react-icons/logo.png",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        name: "amCharts",
        icon: "https://www.amcharts.com/wp-content/uploads/2019/03/amcharts-logo.svg",
        link: "https://www.amcharts.com/",
      },
    ];

    const toolsContent = [
      {
        name: "Visual Studio Code",
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
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Atlassian_Jira_%282019%29.svg",
        link: "https://www.atlassian.com/software/jira",
      },
      {
        name: "Postman",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Postman.png",
        link: "https://www.postman.com/",
      },
    ];

    const tabs = [
        {
            value: "technologies",
            label: "Tecnologias",
            content: technologiesContent,
            icon: "",
        },
        {
            value: "libraries",
            label: "Librerias",
            content: librariesContent,
            icon: "",
        },
        {
            value: "tools",
            label: "Herramientas",
            content: toolsContent,
            icon: "",
        },
    ];

    return (
        <KnowledgeWrapper>
            <Tabs.Root defaultValue="technologies" variant="plain">
                <Tabs.List
                    bg="bg.muted"
                    bgColor="rgba(119, 141, 169, 0.2)"
                    borderRadius="6px 6px 0 0"
                    borderBottom="2px solid #0d1b2a"
                    p="2"
                >
                    <For each={tabs}>{(tab) => <Trigger values={tab} />}</For>
                    <Tabs.Indicator rounded="l2" />
                </Tabs.List>
                <KnowledgeContainer>
                    <For each={tabs}>{(tab) => <Content values={tab} />}</For>
                </KnowledgeContainer>
            </Tabs.Root>
        </KnowledgeWrapper>
    );
};

export default Knowledge;
