import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
   return(
   <Router>
        <Header/>
        <NavBar/>
        <Routes>
            <Route path="/" element= {<About/>}></Route>
            <Route exact path="/hoefer-react-portfolio/about" element= {<About/>}></Route>
            <Route exact path="/hoefer-react-portfolio/blog" element= {<Blog/>}></Route>
            <Route path="/hoefer-react-portfolio/contact" element= {<Contact/>}></Route>
            <Route path="/hoefer-react-portfolio/projects" element= {<Projects/>}></Route>
        </Routes>
        <Footer/>
        </Router>
   )
    
}
export default App;
