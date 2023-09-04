import React from "react";
import { GlobalContext } from "../../GlobalContext";
import MegaMan from "../../assets/MegaMan11.png";
import Collection from "./Collection";
import styles from "./NewGame.module.scss";

const NewGame = () => {
  const { robot } = React.useContext(GlobalContext);
  return (
    <div
      style={
        robot === "megaman"
          ? { backgroundColor: "#0099ff" }
          : robot === "protoman" && { backgroundColor: "#8F0104" }
      }
      className={`flex-center ${styles.newGame}`}
    >
      <Collection width={"600px"} height={"600px"}>
        <img src={MegaMan} alt="Mega Man XI" />
      </Collection>
    </div>
  );
};

export default NewGame;
