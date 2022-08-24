import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </Router>
);

export default App;
