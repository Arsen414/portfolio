import React from "react";
import "./AboutSection.css";
import AboutImg from "../../Img/Vibe.jpeg";
import AboutImgSecond from "../../Img/Comp.jpeg";

export const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__images">
        <img src={AboutImg} alt="" className="about__img" />
        <img src={AboutImgSecond} alt="" className="about__img" />
      </div>
      <div className="about__container">
        {" "}
        <div className="about__text">ABOUT ME</div>
        <div className="about__info">
          Hello again everyone! So, you already know that my name is Arsen. A
          little about myself: student, 25 y.o., athlete-stomatology Doc, I love
          creativity since childhood, I live in Lviv, Ukraine. Why programming?
          Everything is elementary - I like it, the profession of the future,
          thanks to which I can provide myself and fulfill my dream - travel, at
          the moment I specialize in web design, front-end and back-end
          development, turnkey websites. Why should you choose me? I approach
          each order with great responsibility and love, as I want to make a
          name for myself, exclude plagiarism and negligence, fully study the
          project, the client and its target audience, work for quality, trying
          to make an order as quickly and uniquely as possible, taking into
          account all the edits and wishes. By trusting me, you will get the
          maximum return for your project, save your nerves and time. If you are
          interested in me , you want to know something more or use my services,
          then I will provide all my contacts below.
        </div>
      </div>
    </section>
  );
};
