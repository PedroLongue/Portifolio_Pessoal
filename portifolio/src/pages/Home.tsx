import React from "react";
import { Header } from "../components/Header/Header";
import { MainBanner } from "../components/MainBanner/MainBanner";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { Projects } from "../components/Projects/Projects";
import { Contacts } from "../components/Contacts/Contacts";
import { Footer } from "../components/Footer/Footer";
import { BackToTop } from "../components/BackToTop/BackToTop";

const Home = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <About />
      <Skills />
      <BackToTop />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export { Home };
