import React, { useRef, useState, useEffect } from "react";
import "./sass/Contacts.scss";

import ContactsIcon from "../../assets/images/contactsIcon.png";
import LinkIcon from "../../assets/images/linkIcon.png";

const Contacts = () => {
  const [sucessMessage, setSucessMessage] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "StaticForms - Contact Form",
    message: "",
    replyTo: "@",
    accessKey: "8447ee65-62f3-4ff7-a1e1-244c19287306",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  //static forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us.",
        });
        // alert("Mensagem enviada!!");
        setSucessMessage(true);
        // console.log(sucessMessage);
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <>
      <div className="contacts-page" id="contacts-page-id">
        <h1 className="contacts-page__title">Contate-me</h1>
        <div className="contacts-page__wrapper-content">
          <div className="contacts-page__wrapper-content-infos">
            <div className="contacts-page__subtitle-wrapper">
              <h3 className="contacts-page__subtitle">Gostou do meu perfil?</h3>
              <span className="contacts-page__subtitle contacts-page__second-subtitle">
                Deixe-me uma mensagem!
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              action="https://api.staticforms.xyz/submit"
              method="POST"
              className="contacts-page__form"
            >
              <input
                onChange={handleChange}
                className="contacts-page__input"
                type="text"
                placeholder="seu nome"
                name="name"
                required
              />
              <input
                onChange={handleChange}
                className="contacts-page__input"
                type="email"
                placeholder="Seu e-mail"
                name="email"
                required
              />
              <input
                onChange={handleChange}
                className="contacts-page__input contacts-page__input-message"
                type="text"
                placeholder="Deixe uma mensagem"
                name="message"
                required
              />
              <input
                className="contacts-page__send-button"
                type="submit"
                value="Enviar"
              />
            </form>
            <span className={sucessMessage ? "messageActive" : "MessageOff"}>
              Mensagem enviada!
            </span>
          </div>
          <div className="contacts-page__image-wrapper">
            <img
              className="contacts-page__contacts-image"
              src={ContactsIcon}
              alt="Icone dos contatos"
            />
            <a
              href="https://drive.google.com/drive/u/0/folders/1cRa9nk1pPpfmvn8nmeuZ_i2RhKsJsCus"
              target="_blank"
              className="contacts-page__send-button contacts-page__resume-button"
            >
              <span>Meu currículo:</span>
              <img
                className="contacts-page__link-icon"
                src={LinkIcon}
                alt="iconde do link"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Contacts };
