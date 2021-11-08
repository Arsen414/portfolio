import React from "react";
import "./Header.css";
import logo from "../../Img/Logo.svg";

export const Header = () => {
  return (
    <header className="main-header">
      <img src={logo} alt="" className="main-header__logo" />
      <nav className="main-header__menu">
        <a href="" className="main-header__menu-link">
          Home
        </a>
        <a className="main-header__menu-link">About Me</a>
        <a className="main-header__menu-link">Portfolio</a>
        <a className="main-header__menu-link">Contacts</a>
      </nav>
    </header>
  );
};
