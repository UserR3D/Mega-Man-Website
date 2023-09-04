import React from "react";
import { GlobalContext } from "../../GlobalContext";
import Collection from "./Collection";
import ChatBox from "../Geometry/ChatBox";
import Legacy1 from "../../assets/Mega_Man_Legacy_Collection1.png";
import Legacy2 from "../../assets/Mega_Man_Legacy_Collection2.webp";
import { ReactComponent as Wave } from "../../assets/wave2.svg";
import MegaSprite from "../../assets/Mega Man Sprite.png";
import Met from "../../assets/met enemy.png";
import styles from "./Collections.module.scss";

const Collections = () => {
  const { robot } = React.useContext(GlobalContext);
  return (
    <section
      style={
        robot === "megaman"
          ? { backgroundColor: "#0176FB" }
          : robot === "protoman" && { backgroundColor: "#c5433a" }
      }
      className={styles.collections}
    >
      <div className={`flex-center ${styles.banner}`}>
        <h2
          style={
            robot === "megaman"
              ? { backgroundColor: "#00cefc" }
              : robot === "protoman" && { backgroundColor: "#c21111" }
          }
        >
          Coletânea de jogos retros do robo azul
        </h2>
        <Wave />
      </div>
      <div
        className={`container grid-2fr grid-center ${styles.collectionMain}`}
      >
        <Collection width={"600px"} height={"600px"}>
          <img src={Legacy1} alt="Collection 1" />
        </Collection>
        <Collection width={"600px"} height={"600px"}>
          <img src={Legacy2} alt="Collection 2" />
        </Collection>
      </div>
      <ChatBox>
        Experiencie a clássica aventura de Rock contra seus maiores inimigos
      </ChatBox>

      <div className={styles.endCollection}>
        <img
          src={MegaSprite}
          alt="Mega Man - Sprite"
          width={"248px"}
          height={"248px"}
        />
        <img
          src={Met}
          alt="Met Enemy - Sprite"
          width={"125px"}
          height={"132px"}
        />
        {robot === "megaman" ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <g fill="#0099ff">
              <path d="M0,192L0,64L240,64L240,192L480,192L480,96L720,96L720,32L960,32L960,96L1200,96L1200,96L1440,96L1440,0L1200,0L1200,0L960,0L960,0L720,0L720,0L480,0L480,0L240,0L240,0L0,0L0,0Z"></path>
            </g>
          </svg>
        ) : (
          robot === "protoman" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <g fill="#8F0104">
                <path d="M0,192L0,64L240,64L240,192L480,192L480,96L720,96L720,32L960,32L960,96L1200,96L1200,96L1440,96L1440,0L1200,0L1200,0L960,0L960,0L720,0L720,0L480,0L480,0L240,0L240,0L0,0L0,0Z"></path>
              </g>
            </svg>
          )
        )}
      </div>
    </section>
  );
};

export default Collections;
