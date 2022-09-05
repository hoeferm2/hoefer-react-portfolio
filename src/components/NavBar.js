import React from "react";
import { Link } from "react-router-dom"
import "../styles/NavBar.css"
import NavTabs from "./NavTabs";




export default function NavBar() {
    return (
        <div className="navbar">
        <NavTabs/>
        </div>
    )

}