import React from "react";
import { Link } from "react-router-dom"
import "../styles/NavBar.css"
import NavTabs from "./NavTabs";




export default function NavBar() {
    return (
        <div className="navbar">
        <a href="/about" className="homelink">About</a>
        <ul>
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/contact">Contact Me</a>
            </li>
        </ul>
        </div>
    )

}