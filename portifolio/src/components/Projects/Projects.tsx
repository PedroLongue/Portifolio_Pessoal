import React from "react";
import "./sass/Projects.scss";
import { Carousel } from "../Carousel/Carousel";

const Projects = () => {
  return (
    <>
      <div className="projects-page" id="projects-page-id">
        <h1 className="projects-page__title">Projetos</h1>
        <Carousel />
      </div>
    </>
  );
};

export { Projects };
