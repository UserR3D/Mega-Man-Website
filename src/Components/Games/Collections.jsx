import Collection from "./Collection";
import ChatBox from "../Geometry/ChatBox";
import Legacy1 from "../../assets/Mega_Man_Legacy_Collection1.png";
import Legacy2 from "../../assets/Mega_Man_Legacy_Collection2.webp";
import { ReactComponent as Wave } from "../../assets/wave2.svg";
import { ReactComponent as Wave2 } from "../../assets/wave1.svg";
import MegaSprite from "../../assets/Mega Man Sprite.png";
import Met from "../../assets/met enemy.png";
import styles from "./Collections.module.scss";

const Collections = () => {
  return (
    <section className={styles.collections}>
      <div className={`flex-center ${styles.banner}`}>
        <h2>Coletânea de jogos retros do robo azul</h2>
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
        <Wave2 />
      </div>
    </section>
  );
};

export default Collections;
