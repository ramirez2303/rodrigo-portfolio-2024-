import Layout from "./components/Layout";
import Home from "./sections/Home";
import Knowledge from "./sections/Knowledge";
import Projects from "./sections/Projects";

function App() {
    return (
        <Layout>
            <Home />
            <Knowledge />
            <Projects />
        </Layout>
    );
}

export default App;
