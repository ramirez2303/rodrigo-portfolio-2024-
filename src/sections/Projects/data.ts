import advice from "/src/assets/projects/advice.jpeg";
import ecommerce from "/src/assets/projects/e-commerce.jpeg";
import ecommerceReact from "/src/assets/projects/ecommerceFront.jpeg";
import order from "/src/assets/projects/order.png";
import huddleLandingPage from "/src/assets/projects/huddle-landing-page.png";

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
