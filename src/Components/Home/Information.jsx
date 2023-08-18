import React from "react";
import styles from "./Information.module.scss";
import Square from "../Geometry/Square";
import ChatBox from "./ChatBox";
import MegaMan from "/public/Home_MegaMan.png";
import ProtoMan from "/public/Home_ProtoMan.png";
const Information = () => {
  const [active, setActive] = React.useState(false);
  function targetClick({ currentTarget }) {
    setActive(currentTarget.classList.toggle("active"));
  }
  return (
    <div className={`container ${styles.information}`}>
      <Square width={"500px"} height={"500px"} targetClick={targetClick}>
        <img src={MegaMan} alt="Mega Man - Home" />
        <img src={ProtoMan} alt="Proto Man - Home" />
      </Square>
      <ChatBox>
        {!active ? (
          <p>
            Rock é o assistente de Dr. Light sendo criado para ajudar em suas
            tarefas domesticas, porém com as atitudes do temível Dr. Willy, Rock
            voluntariamente se tornou no robô de combate Mega Man.
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
  );
};

export default Information;
