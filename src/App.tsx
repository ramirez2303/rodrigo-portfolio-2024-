import Layout from "./components/Layout";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { useLayoutInView } from "./hooks/useLayoutInView";

function App() {
    const { ref, inView } = useLayoutInView();

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
