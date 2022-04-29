import React, { useState } from "react";
import "./sass/Header.scss";
import HeaderIcon from "../../assets/images/headerIcon.png";

const Header = () => {
  const [handleBurguer, setHandleBurguer] = useState(false);

  const toggleButton = () => {
    setHandleBurguer(!handleBurguer);
  };

  return (
    <>
      <div className="header-page">
        <img
          className="header-page__image"
          src={HeaderIcon}
          alt="logo do header"
        />
        <ul className="header-page__nav">
          <li className="header-page__links">
            <a className="header-page__link" href="#about-page-id">
              Sobre
            </a>
          </li>
          <li className="header-page__links">
            <a className="header-page__link" href="#skills-page-id">
              Skills
            </a>
          </li>
          <li className="header-page__links">
            <a className="header-page__link" href="#projects-page-id">
              Projetos
            </a>
          </li>
          <li className="header-page__links">
            <a className="header-page__link" href="#contacts-page-id">
              Contato
            </a>
          </li>
        </ul>

        <div className="header-page__burguer-icon-mobile">
          <button
            className={`header-page__burguer-icon-mobile-button ${
              handleBurguer ? "active" : ""
            } `}
            onClick={toggleButton}
          >
            <div
              className={
                handleBurguer
                  ? "header-page__active01"
                  : "header-page__burguer-icon-line"
              }
            ></div>
            <div
              className={
                handleBurguer
                  ? "header-page__active-remove"
                  : "header-page__burguer-icon-line"
              }
            ></div>
            <div
              className={
                handleBurguer
                  ? "header-page__active02"
                  : "header-page__burguer-icon-line"
              }
            ></div>
          </button>
          <nav
            className={
              handleBurguer
                ? "header-page__active-nav-bar"
                : "header-page__nav-bar"
            }
          >
            <ul className={"header-page__nav-mobile"}>
              <li className="header-page__links-mobile">
                <a
                  className="header-page__link-mobile"
                  href="#about-page-id"
                  onClick={() => setHandleBurguer(false)}
                >
                  Sobre
                </a>
              </li>
              <li className="header-page__links-mobile">
                <a
                  className="header-page__link-mobile"
                  href="#skills-page-id"
                  onClick={() => setHandleBurguer(false)}
                >
                  Skills
                </a>
              </li>
              <li className="header-page__links-mobile">
                <a
                  className="header-page__link-mobile"
                  href="#projects-page-id"
                  onClick={() => setHandleBurguer(false)}
                >
                  Projetos
                </a>
              </li>
              <li className="header-page__links-mobile">
                <a
                  className="header-page__link-mobile"
                  href="#contacts-page-id"
                  onClick={() => setHandleBurguer(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export { Header };
