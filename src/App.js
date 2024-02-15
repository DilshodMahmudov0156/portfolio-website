import './App.css';
import { useState, useEffect } from "react";
import Section from "./parts/section";
import Top from "./parts/top";
import Footer from "./parts/footer";


function App() {

    return(
        <div className="app">
            <Top/>
            <Section/>
            <Footer/>


        </div>
    );
}

export default App;
