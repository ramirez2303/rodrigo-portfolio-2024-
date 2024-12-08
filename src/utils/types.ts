export type ContentType = {
    name: string;
    icon: string;
    link: string;
};

export type tabType = {
    value: "technologies" | "libraries" | "tools";
    label: string;
    content: ContentType[];
    description: string;
};
