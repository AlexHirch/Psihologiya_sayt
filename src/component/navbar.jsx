import React from "react";
import "../styles/navbar.scss";
import { Logo } from "../resource";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-text">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text">
          <p>
            Международный педагогический портал (лицензия на осуществление
            образовательной деятельности №9757-л, свидетельство о регистрации
            СМИ №ЭЛ ФС 77-65391)
          </p>
        </div>
      </div>
      <div className="contacts">
        <b>8 (800) 350 -54-64</b>
        <p>звонок бесплатный</p>
        <a href="org.komitet@solncesvet.ru">org.komitet@solncesvet.ru</a>
      </div>
    </div>
  );
};

export default Navbar;
