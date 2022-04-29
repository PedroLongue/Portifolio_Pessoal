import React from "react";
import "./sass/Footer.scss";
import GitHubIcon from "../../assets/images/mailIcon.png";
import LinkedinIcon from "../../assets/images/LinkedInIcon.png";
import GitHUbIcon from "../../assets/images/gitHubIcon.png";

const Footer = () => {
  return (
    <>
      <ul className="footer-page">
        <li className="footer-page__links">
          <a
            className="footer-page__link"
            href="mailto:pedrolongue13@gmail.com?"
          >
            <img
              className="footer-page__image"
              src={GitHubIcon}
              alt="icone email"
            />
          </a>
        </li>
        <li className="footer-page__links">
          <a
            className="footer-page__link"
            href="https://www.linkedin.com/in/pedro-longue-3b3b22203/"
            target="_blank"
          >
            <img
              className="footer-page__image"
              src={LinkedinIcon}
              alt="icone linkedin"
            />
          </a>
        </li>
        <li className="footer-page__links">
          <a
            className="footer-page__link"
            href="https://github.com/PedroLongue"
            target="_blank"
          >
            <img
              className="footer-page__image"
              src={GitHUbIcon}
              alt="icone GitHub"
            />
          </a>
        </li>
      </ul>
    </>
  );
};

export { Footer };
