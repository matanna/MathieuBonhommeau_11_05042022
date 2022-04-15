import { Menu } from "../index.js";
import Style from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <Menu />
    </header>
  );
};

export default Header;
