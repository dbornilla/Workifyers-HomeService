import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import './pages.css'


import Home from "../Home/Home";
import About from "../About/About";
import Main from "../Main/Main";
import Testimonies from "../Testimonies/Testimonies";
import Experience from "../Experience/Experience";

const Pages = () => {
    return(
        <div className="container-page mx-auto">
            <Home />
            <About />
            <Main />
            <Testimonies />
            <Experience />
        </div>
    );
}

export default Pages
