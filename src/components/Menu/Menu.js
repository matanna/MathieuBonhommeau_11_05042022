import * as React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Menu.module.scss";

const Menu = () => {
  console.log(NavLink);
  return (
    <nav className={Style.menu}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${Style.active} ${Style.navlink}` : Style.navlink
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? `${Style.active} ${Style.navlink}` : Style.navlink
            }
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
