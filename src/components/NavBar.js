import React from "react";
import { Link } from "react-router-dom"
import "../styles/NavBar.css"
import NavTabs from "./NavTabs";




export default function NavBar() {
    return (
        <div className="navbar">
        <a href="/hoefer-react-portfolio/about" className="homelink">About</a>
        <ul>
            <li>
                <a href="/hoefer-react-portfolio/blog">Blog</a>
            </li>
            <li>
                <a href="/hoefer-react-portfolio/projects">Projects</a>
            </li>
            <li>
                <a href="/hoefer-react-portfolio/contact">Contact Me</a>
            </li>
        </ul>
        </div>
    )

}