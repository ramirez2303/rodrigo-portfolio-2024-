import grid from "/src/assets/projects/grid.png";
import ecommerce from "/src/assets/projects/e-commerce.jpeg";
import ecommerceReact from "/src/assets/projects/ecommerceFront.jpeg";
import miRedAgro from "/src/assets/projects/miRedAgro.png";
import podcastApp from "/src/assets/projects/podcast-app.jpeg";

export const projects = [
    {
        image: miRedAgro,
        title: "miRedAgro",
        description: "miRedAgro",
        tools: ["NextJs", "TailwindCSS", "NodeJs", "PostgreSQL", "Prisma", "Railway", "Vercel"],
        links: {
            project: "https://www.miredagro.com/",
            github: undefined,
        },
    },
    {
        image: grid,
        title: "Grid F1 Hub",
        description: "grid",
        tools: ["NextJs", "TailwindCSS", "NodeJs", "PostgreSQL", "Prisma", "Railway", "Vercel"],
        links: {
            project: "https://grid-frontend-mu.vercel.app/",
            github: "https://github.com/ramirez2303/grid-frontend",
            githubBackend: "https://github.com/ramirez2303/grid-backend",
        },
    },
    {
        image: podcastApp,
        title: "Podcast App",
        description: "podcastApp",
        tools: ["React", "TailwindCSS", "Zustand", "TanStack Query"],
        links: {
            project: "https://ramirez2303.github.io/podcast-app/",
            github: "https://github.com/ramirez2303/podcast-app",
        },
    },
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
];
