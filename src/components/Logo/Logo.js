import * as React from "react";
import logo from "../../assets/logo.png";
import Style from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={Style.container}>
      <img src={logo} alt="Logo de Kasa" />
    </div>
  );
};

export default Logo;
