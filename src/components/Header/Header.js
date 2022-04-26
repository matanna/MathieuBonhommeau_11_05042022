import { Menu } from "../index.js";
import Style from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <NavLink to="/">
          <img src={logo} alt="Logo de Kasa" />
        </NavLink>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
