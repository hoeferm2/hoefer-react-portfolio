import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About"
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";

function App() {

  
    return (
    <Router>
            <Header/>
            <NavBar/>
            <Routes>
                
            </Routes>
            <Footer/>
    </Router>);
}

export default App;
