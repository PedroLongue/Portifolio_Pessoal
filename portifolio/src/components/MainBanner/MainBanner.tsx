import React from "react";
import "./sass/MainBanner.scss";
import GitHubIcon from "../../assets/images/gitHubIcon.png";
import MainBannerIcon from "../../assets/images/mainBannerIcon.png";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-page">
        <h1 className="main-banner-page__title">Pedro Longue Corrêa</h1>
        <div className="main-banner-page__content">
          <div className="main-banner-page__gitHub-wrapper">
            <h1 className="main-banner-page__title main-banner-page__second-title">
              Desenvolvedor Front-End
            </h1>
            <a
              href="https://github.com/PedroLongue"
              target="_blank"
              className="main-banner-page__button main-banner-page__link"
            >
              Acessar GitHub
              <img
                className="main-banner-page__gitHub-image"
                src={GitHubIcon}
                alt="icone do gitHub"
              />
            </a>
          </div>
          <img
            className="main-banner-page__image"
            src={MainBannerIcon}
            alt="imagem do banner principal"
          />
        </div>
      </div>
    </>
  );
};

export { MainBanner };
