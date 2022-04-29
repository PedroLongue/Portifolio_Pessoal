import React, { useEffect, useState } from "react";
import "./sass/BackToTop.scss";
import UpArrowIcon from "../../assets/images/upArrowIcon.png";
import WhatsappIcon from "../../assets/images/WhatsappIcon.png";

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn ? (
        <div className="buttons-wrapper">
          <div className="buttons-wrapper__button-whatsapp">
            <a
              href="https://api.whatsapp.com/send?phone=5522992728100"
              target="_blank"
            >
              <img
                className="buttons-wrapper__wpp-icon"
                src={WhatsappIcon}
                alt="Whatsapp"
              />
            </a>
          </div>
          <div className="buttons-wrapper__button-up" onClick={scrollTop}>
            <img
              className="buttons-wrapper__back-to-top-icon"
              src={UpArrowIcon}
              alt="Voltar ao topo"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export { BackToTop };
