import React from "react";
import icon from './Globe_icon.png'


export default function Nav() {
    return (
        <nav className="nav">
            <img src={icon} alt="world map"></img>
            <h3> My Travel Journal</h3>
        </nav>
    )
}