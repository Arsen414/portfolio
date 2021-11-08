import React from "react";
import { isMobile} from 'react-device-detect';
import "./Footer.css";

import logo from "../../Img/Logo.svg";

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
      {isMobile && <img src={logo} alt="" className="footer__logo" />}
        <div className="footer__menu">
          <a className="footer__menu-link">Home</a>
          <a className="footer__menu-link">About me</a>
          <a className="footer__menu-link">Portfolio</a>
          <a className="footer__menu-link">Contact</a>
          <a className="footer__menu-link">Email: notitanic33@gmail.com</a>
          <a className="footer__menu-link">Inst: notitanic33</a>
          <a className="footer__menu-link">Calls: +7 (900) - 121 - 54 -54</a>
        </div>

        <div className="footer__info">
          {!isMobile && <img src={logo} alt="" className="footer__logo" />}
          <div className="footer__info-text">Copyright © 2021, ModernSoft</div>
        </div>
      </div>
    </footer>
  );
};
