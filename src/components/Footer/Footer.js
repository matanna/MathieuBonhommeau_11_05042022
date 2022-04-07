import * as React from "react";
import logoWhite from "../../assets/logo-white.png";
import Style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <img src={logoWhite} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
