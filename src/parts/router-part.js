import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import NavBar from "../components/nav-bar";

function RouterPart() {
    return (
        <div>
            <NavBar/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" path={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default RouterPart;