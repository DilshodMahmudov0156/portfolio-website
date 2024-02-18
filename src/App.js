import './App.css';
import Section from "./parts/section";
import Footer from "./parts/footer";
import NavBar from "./components/navBar";


function App() {

    return(
        <div className="app">
            <NavBar/>
            <Section/>
            <Footer/>


        </div>
    );
}

export default App;