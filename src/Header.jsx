import React from "react";
import { GlobalContext } from "./GlobalContext";
import Helmet from "./assets/Helmet-Header.png";
import styles from "./Header.module.scss";

const Header = () => {
  const { robot } = React.useContext(GlobalContext);
  return (
    <header
      style={
        robot === "megaman"
          ? { backgroundColor: "#0176ff" }
          : robot === "protoman" && { backgroundColor: "#A11300" }
      }
      className={styles.header}
    >
      <ul
        style={
          robot === "megaman"
            ? {
                background: "linear-gradient(120deg, #00b2ff 60%, #F5EB18 60%)",
              }
            : robot === "protoman" && {
                background: "linear-gradient(120deg, #FF002A 60%, #F5EB18 60%)",
              }
        }
      >
        <img
          src={Helmet}
          alt="Capacete - Header"
          width={"157px"}
          height={"150px"}
        />
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Compre Agora</li>
      </ul>
    </header>
  );
};

export default Header;
