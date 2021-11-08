import React from "react";
import "./PortfolioSection.css";
import PortfolioImg from "../../Img/Boom.jpeg";
import PortfolioButtonIcon from "../../Img/Arrow.svg";
import PortfolioButtonBack from "../../Img/arrowblack.svg";
import PortfolioButtonForward from "../../Img/arrowforward.svg";
export const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <div className="arrowblack">
        <img src={PortfolioButtonBack} alt="" className="arrowblack__img" />
      </div>
      <div className="portfolio__box">  <div className="portfolio__title"> PORTFOLIO </div>
      <div className="portfolio__container">
        <img src={PortfolioImg} alt="" className="portfolio__img" />
        <div className="portfolio__info">
          <div className="portfolio__name">Landing Ice-cream</div>
          <div className="portfolio__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            orci eu elit consequat posuere ut sed elit. Nulla et tristique
            felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis
            eros. Duis venenatis vulputate lacus, non tristique eros placerat
            vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis.
            Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor
            sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus
            purus, sit amet viverra arcu gravida vel.
          </div>
          <div className="portfolio__button">
            <span className="portfolio__button-text">more</span>
            <img
              src={PortfolioButtonIcon}
              alt=""
              className="portfolio__button-icon"
            />
          </div>
        </div>
      </div>
      {""}</div>
      <div className="arrowforward">
      <img src={PortfolioButtonForward} alt="arrowforward__img" />
      </div>

   
    </section>
  );
};
