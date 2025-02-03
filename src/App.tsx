import Layout from "./components/Layout";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import { useInView } from "react-intersection-observer";
import Contact from "./sections/Contact";

function App() {
    const { ref, inView } = useInView({
        threshold: 0.7,
        initialInView: true,
    });

    return (
        <Layout visible={inView}>
            <Home homeRef={ref} />
            <AboutMe />
            <Projects />
            <Experience />
            <Contact />
        </Layout>
    );
}

export default App;
