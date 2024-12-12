import Layout from "./components/Layout";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";

function App() {
    return (
        <Layout>
            <Home />
            <AboutMe />
            <Projects />
        </Layout>
    );
}

export default App;
