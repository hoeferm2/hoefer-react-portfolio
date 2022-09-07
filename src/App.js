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
        <div>
        <Routes>
            <Route path="/" element= {<About/>}></Route>
            <Route path="/about" element= {<About/>}></Route>
            <Route path="/blog" element= {<Blog/>}></Route>
            <Route path="/contact" element= {<Contact/>}></Route>
            <Route path="/projects" element= {<Projects/>}></Route>
        </Routes>
        </div>
        <Footer/>
        </Router>
   )
    
}

export default App;


 // switch (window.location.pathname) {
    //     case "/":
    //         component = <About/>
    //         break
    //         case "/about":
    //         component = <About/>
    //         break
    //             case "/blog":
    //             component = <Blog/>
    //             break
    //             case "/projects":
    //             component = <Projects/>
    //             break
    //             case "/contact":
    //             component = <Contact/>
    //             break

    // }
    // return (
