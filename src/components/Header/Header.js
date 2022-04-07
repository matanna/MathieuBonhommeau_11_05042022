import * as React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={Style.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
