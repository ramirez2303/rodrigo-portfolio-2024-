import Layout from "./components/Layout";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

function App() {
    return (
        <Layout>
            <Home />
            <AboutMe />
            <Projects />
            <Experience />
        </Layout>
    );
}

export default App;
