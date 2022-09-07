import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";


function App() {
    let component
  
    switch (window.location.pathname) {
        case "/":
            component = <About/>
            break
            case "/about":
            component = <About/>
            break
                case "/blog":
                component = <Blog/>
                break
                case "/projects":
                component = <Projects/>
                break
                case "/contact":
                component = <Contact/>
                break

    }
    return (

    <>
        <Header/>
        <NavBar/>
        <div>
        {component}
        </div> 
        <Footer/>
        </>
    )
        

}

export default App;
