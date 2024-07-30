import React from "react";
import "./header.css"
import Hero from "/src/images/hero-imagehc.jpg"
import HeroText from "/src/images/hero-text.svg"

function Header() {
    return (
        <div className="header__container">
            <img className="hero__img" src={Hero} alt="" />
            <div className="header__overlay">
                <img className="hero__text"src={HeroText} alt="" />
            </div>
        </div>
       
    )
}

export default Header;