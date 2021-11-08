import React from "react";
import "./Intro.css";
import intro__img from "../../Img/Fone.jpeg";

export const Intro = () => {
  return (
    <section className="intro__section">
      <div className="intro">
        <div className="intro__text">Hello</div>
        <h1 className="intro__name">I’m Arsen Arutynian</h1>
        <p className="intro__description">
          I've been doing front-end and back-end development for a
          year now. Do you need a site layout, or maybe a
          turnkey website? Then contact me
        </p>
        <div className="intro__button">Contact me</div>
      </div>
    

    <img src={intro__img} alt="" className="intro__img" />
    </section>
  );
};
