import React from "react";
const htmlLogo = require("../images/logo_html.png")
const cssLogo = require("../images/logo_css.png")
const jsLogo = require("../images/logo_js.png")
const reactLogo = require("../images/logo_react.png")
const gitLogo = require("../images/logo_git.png")

const Skills = () => {
  return (
    <div className="skills__section" id="skills">
      <h2 className="title__skills">
        Compétences
        <span className="back__title__skills"> Techniques</span>
      </h2>
      <div className="skills__grid">
        <div class="html__skill skill flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front html__flip__border">
              <img src={htmlLogo} alt="logo html" class="html__logo logo__skills" />
            </div>
            <div class="flip-card-back html__flip__border">
              <p class="html__txt txt__skills">HTML</p>
            </div>
          </div>
        </div>
        <div class="css__skill skill flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front css__flip__border">
              <img src={cssLogo} alt="logo css" class="css__logo logo__skills" />
            </div>
            <div class="flip-card-back css__flip__border">
              <p class="css__txt txt__skills">CSS</p>
            </div>
          </div>
        </div>
        <div class="javascript__skill skill flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front javascript__flip__border">
              <img src={jsLogo} alt="logo javascript" class="javascript__logo logo__skills" />
            </div>
            <div class="flip-card-back javascript__flip__border">
              <p class="javascript__txt txt__skills">Javascript</p>
            </div>
          </div>
        </div>
        <div class="react__skill skill flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front react__flip__border">
              <img src={reactLogo} alt="logo react" class="react__logo logo__skills" />
            </div>
            <div class="flip-card-back react__flip__border">
              <p class="react__txt txt__skills">React</p>
            </div>
          </div>
        </div>
        <div class="git__skill skill flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front git__flip__border">
              <img src={gitLogo} alt="logo git" class="git__logo logo__skills" />
            </div>
            <div class="flip-card-back git__flip__border">
              <p class="git__txt txt__skills">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;