import './App.css';
import Section from "./parts/section";
import Footer from "./parts/footer";
import NavBar from "./components/navBar";
import Header from "./parts/header";


function App() {

    return(
        <div className="app">
            <NavBar/>
            <Header/>
            <Section/>
            <Footer/>


        </div>
    );
}

export default App;