import React from "react";
import Slider from "react-slick";

import RfidIcon from "../../assets/images/firstSliderIcon.png";
import LandingPageIcon from "../../assets/images/landingPageIcon.png";
import CountDownIcon from "../../assets/images/countDownIcon.png";
import InstitutionalPage from "../../assets/images/institutionalPageIcon.png";
import TouristPage from "../../assets/images/touristPageIcon.png";
import LinkedInIcon from "../../assets/images/LinkedInIcon.png";
import LinkIcon from "../../assets/images/linkIcon.png";

import "./sass/Carousel.scss";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="slick-slider-page">
      <div className="slick-slider-page__infos-wrapper">
        <h3 className="slick-slider-page__subtitle">RFID</h3>
        <img
          className="slick-slider-page__image"
          src={RfidIcon}
          alt="icone RFID"
        />
        <span className="slick-slider-page__text">
          App desktop desenvolvido em React Js e construído em Electron. Tem
          como objetivo geolocalizar dispositivos.
        </span>
        <a
          className="slick-slider-page__button slick-slider-page__link"
          href="https://www.linkedin.com/posts/pedro-longue-3b3b22203_reactjs-engenharia-desenvolvimento-activity-6876643680254525440--M6_?utm_source=linkedin_share&utm_medium=member_desktop_web"
          target="_blank"
        >
          Mais detalhes em:
          <img
            className="slick-slider-page__linkedin-image"
            src={LinkedInIcon}
            alt="icone do linkedin"
          />
        </a>
      </div>
      <div className="slick-slider-page__infos-wrapper">
        <h3 className="slick-slider-page__subtitle">Lading Page</h3>
        <img
          className="slick-slider-page__image-lading-page"
          src={LandingPageIcon}
          alt="icone RFID"
        />
        <span className="slick-slider-page__text">
          Landing Page desenvolvida em HTML, CSS e Js.
        </span>
        <a
          className="slick-slider-page__button slick-slider-page__link"
          href="https://pedrolongue.github.io/landingpage/"
          target="_blank"
        >
          Link do site:
          <img
            className="slick-slider-page__link-image"
            src={LinkIcon}
            alt="icone do link"
          />
        </a>
      </div>
      <div className="slick-slider-page__infos-wrapper">
        <h3 className="slick-slider-page__subtitle">CountDown</h3>
        <img
          className="slick-slider-page__image"
          src={CountDownIcon}
          alt="icone RFID"
        />
        <span className="slick-slider-page__text">
          Contador de contagem regressivo desenvolvido em HTML, CSS e Js.
        </span>
        <a
          className="slick-slider-page__button slick-slider-page__link"
          href="https://www.linkedin.com/posts/pedro-longue-3b3b22203_javascript-software-css-activity-6889927875424722944-I4_N?utm_source=linkedin_share&utm_medium=member_desktop_web"
          target="_blank"
        >
          Mais detalhes em:
          <img
            className="slick-slider-page__linkedin-image"
            src={LinkedInIcon}
            alt="icone do linkedin"
          />
        </a>
      </div>
      <div className="slick-slider-page__infos-wrapper ">
        <h3 className="slick-slider-page__subtitle">Página institucional</h3>
        <img
          className="slick-slider-page__image"
          src={InstitutionalPage}
          alt="icone institucional"
        />
        <span className="slick-slider-page__text">
          Página institucional desenvolvida em React JS.
        </span>
        <div className="slick-slider-page__add-button-wrapper">
          <a
            className="slick-slider-page__button slick-slider-page__link"
            href="https://pedrolongue.github.io/Pagina-institucional/"
            target="_blank"
          >
            Link do site:
            <img
              className="slick-slider-page__link-image"
              src={LinkIcon}
              alt="icone do link"
            />
          </a>
        </div>
      </div>
      <div className="slick-slider-page__infos-wrapper">
        <h3 className="slick-slider-page__subtitle">Pontos Turísticos</h3>
        <img
          className="slick-slider-page__image"
          src={TouristPage}
          alt="icone Turistas"
        />
        <span className="slick-slider-page__text">
          Sistema desenvolvido em HTML, CSS e Js.
        </span>
        <a
          className="slick-slider-page__button slick-slider-page__link"
          href="https://pedrolongue.github.io/Tourist-Attractions/"
          target="_blank"
        >
          Link do site:
          <img
            className="slick-slider-page__link-image"
            src={LinkIcon}
            alt="icone do link"
          />
        </a>
      </div>
    </Slider>
  );
};

export { Carousel };
