export type ContentType = {
    name: string;
    icon: string;
    link: string;
};

export type tabType = {
    value: "aboutMe" | "technologies" | "libraries" | "tools";
    label: string;
    content?: ContentType[];
    description: string;
};

export type projectType = {
    image: string;
    title: string;
    description: string;
    tools: string[];
    links: {
        project: string;
        github: string;
    };
};
