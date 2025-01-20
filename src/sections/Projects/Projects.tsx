import { For } from "@chakra-ui/react";
import { ProjectsGridContainer, ProjectsWrapper } from "./style";
import CardItem from "./components/CardItem";
import useSelectedCard from "./hook/useSelectedCard";
import advice from "/src/assets/projects/advice.jpeg";
import ecommerce from "/src/assets/projects/e-commerce.jpeg";
import ecommerceReact from "/src/assets/projects/ecommerceFront.jpeg";
import order from "/src/assets/projects/order.png";

const Projects = () => {
    const { indexSelected, setIndexSelected, changeGrid } = useSelectedCard();
    const projects = [
        {
            image: ecommerceReact,
            title: "E-commerce React",
            description:
                "Una pagina de un producto de una fake e-commerce, con un carrusel y un carrito funcional, basada en el reto de la pagina Frontend Mentor",
            tools: ["React", "Javascript", "ChakraUI"],
            links: {
                project: "https://fake-e-commerce-product-page.vercel.app/",
                github: "https://github.com/ramirez2303/fake-e-commerce-product-page",
            },
        },
        {
            image: ecommerce,
            title: "E-commerce HTML",
            description:
                "Esta es una fake e-commerce de zapatillas, es solo diseño no es funcional",
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
            description:
                "Esta es una fake e-commerce de zapatillas, es solo diseño no es funcional",
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
            description:
                "Esta es una pagina con un generador de consejos, conectado a una API proporcionada por Frontend Mentor, basada en el reto de esta misma pagina",
            tools: ["HTML", "CSS"],
            links: {
                project:
                    "https://ramirez2303.github.io/Order-Cummary-Component-Challenge/",
                github: "https://github.com/ramirez2303/Order-Cummary-Component-Challenge",
            },
        },
        {
            image: "",
            title: "",
            description:
                "Esta es una fake e-commerce de zapatillas, es solo diseño no es funcional",
            tools: ["React", "TypeScript", "Styled-components"],
            links: {
                project:
                    "https://ramirez2303.github.io/Order-Cummary-Component-Challenge/",
                github: "https://github.com/ramirez2303/Order-Cummary-Component-Challenge",
            },
        },
    ];
    return (
        <ProjectsWrapper id="projects">
            <ProjectsGridContainer>
                <For each={projects}>
                    {(project, ix) => (
                        <CardItem
                            key={ix}
                            project={project}
                            className={`card card-${ix + 1}`}
                            dataGrid={`img-${ix + 1}`}
                            isSelected={indexSelected === ix + 1}
                            onClick={(card) => {
                                setIndexSelected(ix + 1);
                                changeGrid(card);
                            }}
                        />
                    )}
                </For>
            </ProjectsGridContainer>
        </ProjectsWrapper>
    );
};

export default Projects;
