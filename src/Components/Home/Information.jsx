import React from "react";
import styles from "./Information.module.scss";
import { GlobalContext } from "../../GlobalContext";
import Square from "../Geometry/Square";
import ChatBox from "../Geometry/ChatBox";
import MegaMan from "../../assets/Home_MegaMan.png";
import ProtoMan from "../../assets/Home_ProtoMan.png";
const Information = () => {
  const { robot, setRobot } = React.useContext(GlobalContext);

  function targetClick({ currentTarget }) {
    currentTarget.classList.toggle("active");
    if (robot === "megaman") {
      setRobot("protoman");
    } else {
      setRobot("megaman");
    }
  }

  return (
    <section className={styles.bg}>
      <div className={`container grid-center grid-2fr ${styles.information}`}>
        <Square
          width={"500px"}
          height={"500px"}
          targetClick={targetClick}
          className={styles.square}
        >
          <img src={MegaMan} alt="Mega Man - Home" />
          <img src={ProtoMan} alt="Proto Man - Home" />
        </Square>
        <ChatBox className={styles.chatBox}>
          {robot === "megaman" ? (
            <p>
              Rock é o assistente de Dr. Light sendo criado para ajudar em suas
              tarefas domesticas, porém com as atitudes do temível Dr. Willy,
              Rock voluntariamente se tornou no robô de combate Mega Man.
            </p>
          ) : (
            <p>
              Proto Man conhecido como Blues (ブルース Burūsu) no Japão, é o
              primeiro Robot Master criado por Dr. Light e é considerado irmão
              mais velho de Mega Man e Roll.
            </p>
          )}
        </ChatBox>
      </div>
    </section>
  );
};

export default Information;
