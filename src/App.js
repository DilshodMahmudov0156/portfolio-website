import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./parts/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import NavBar from "./components/nav-bar";


function App() {

    return(
        <div className="app">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/skills" element={<Skills />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;