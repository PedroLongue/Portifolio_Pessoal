import React from "react";
import "./sass/About.scss";
import AboutIcon from "../../assets/images/AboutIcon.png";

const About = () => {
  return (
    <>
      <div className="about-page" id="about-page-id">
        <h1 className="about-page__title">Sobre mim</h1>
        <div className="about-page__infos-wrapper">
          <img className="about-page__image" src={AboutIcon} alt="" />
          <div className="about-page__about-me">
            <h2 className="about-page__subtitle">Olá, me chamo Pedro!</h2>
            <p className="about-page__text">
              Tenho 20 anos, sou estudante de Engenharia de Computação na
              Universidade do Estado do Rio de Janeiro (UERJ). E nesses períodos
              de faculdade venho me dedicando a área de desenvolvimento Web.
              Busco adquirir cada vez mais experiência como desenvolvedor
              Front-End e me desenvolver como pessoa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { About };
