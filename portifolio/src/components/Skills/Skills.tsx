import React from "react";
import "./sass/Skills.scss";

import HtmlIcon from "../../assets/images/htmlIcon.png";
import CssIcon from "../../assets/images/cssIcon.png";
import JSIcon from "../../assets/images/jsIcon.png";
import SassIcon from "../../assets/images/sassIcon.png";
import TSIcon from "../../assets/images/tsIcon.png";
import ReactIcon from "../../assets/images/reactIcon.png";

const Skills = () => {
  return (
    <>
      <div className="skills-page" id="skills-page-id">
        <h1 className="skills-page__title">Skills</h1>
        <div className="skills-page__cards-wrapper">
          <div className="skills-page__card">
            <h2 className="skills-page__text">HTML</h2>
            <img
              className="skills-page__image"
              src={HtmlIcon}
              alt="ícone html"
            />
          </div>
          <div className="skills-page__card">
            <h2 className="skills-page__text">CSS</h2>
            <img className="skills-page__image" src={CssIcon} alt="" />
          </div>
          <div className="skills-page__card">
            <h2 className="skills-page__text">JavaScript</h2>
            <img className="skills-page__image" src={JSIcon} alt="" />
          </div>
          <div className="skills-page__card">
            <h2 className="skills-page__text">SASS</h2>
            <img className="skills-page__image" src={SassIcon} alt="" />
          </div>
          <div className="skills-page__card">
            <h2 className="skills-page__text">TypeScript</h2>
            <img className="skills-page__image" src={TSIcon} alt="" />
          </div>
          <div className="skills-page__card">
            <h2 className="skills-page__text">React Js</h2>
            <img className="skills-page__image" src={ReactIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Skills };
