import React from "react";
import { useState } from "react";
const Linkedin = require ("../images/Linkedin_logo.png")
const Github = require ("../images/Github_logo.png")
const CV = require ("../images/cv.png")
const PageCV = require ("../images/CV_Emilien_Gerbouin.pdf")

const Header = () => {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
    <div className={`${showLinks ? "show-leftbar" : ""}`}>
        <div className="header">
            <div className="firstPart__header">
                <h1 className="logo__header slideInDown-1">E.G</h1>
                <h2 className="title__header slideInDown-2">Emilien</h2>
                <h3 className="subtitle__header slideInDown-3">Développeur Front-end</h3>
            </div>
            <ul className="second__part__header">
                <li className="navlink slideInDown-4">
                    <a href="#homeSection">Accueil</a >        
                </li>
                <li className="navlink slideInDown-5">
                    <a href="#introduction">Présentation</a >        
                </li>
                <li className="navlink slideInDown-6">
                    <a href="#skills">Compétences</a >        
                </li>
                <li className="navlink slideInDown-7">
                    <a href="#work">Projets</a>        
                </li>
                <li className="navlink slideInDown-8">
                    <a href="#contact">Contact</a>        
                </li>
            </ul>
            <ul className="wrapper">
                <a href="https://www.linkedin.com/in/emilien-gerbouin/" target="_blank" rel="noreferrer" className="link__wrapper">
                    <li className="icon linkedin">
                        <span className="tooltip">Linkedin</span>
                        <img src={Linkedin} alt="linkedin" className="linkedin__logo"/>
                    </li>
                </a>
                <a href="https://github.com/Emiliengrbn" target="_blank" rel="noreferrer" className="link__wrapper">
                    <li className="icon github">
                        <span className="tooltip">Github</span>
                        <img src={Github} alt="github" className="github__logo"/>
                    </li>
                </a>
                <a href={PageCV} target="_blank" rel="noreferrer" className="link__wrapper">
                    <li className="icon cv">
                        <span className="tooltip">CV</span>
                        <img src={CV} alt="cv"  className="cv__logo"/>
                    </li>
                </a>
            </ul>
        </div>
        <button type="button" className="leftbar__burger" onClick={handleShowLinks}>
            <span className="burger-bar" />
        </button>
    </div>
  );
};

export default Header;
