import MegaMan from "../../assets/MegaMan11.png";
import Collection from "./Collection";
import styles from "./NewGame.module.scss";

const NewGame = () => {
  return (
    <div className={`flex-center ${styles.newGame}`}>
      <Collection width={"600px"} height={"600px"}>
        <img src={MegaMan} alt="Mega Man XI" />
      </Collection>
    </div>
  );
};

export default NewGame;
