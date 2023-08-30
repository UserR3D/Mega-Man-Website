import React from "react";
import Square from "../Geometry/Square";
import { ReactComponent as Xbox } from "../../assets/icons8-xbox.svg";
import { ReactComponent as Switch } from "../../assets/nintendo-switch.svg";
import { ReactComponent as Playstation } from "../../assets/icons8-ps4.svg";
import { ReactComponent as Steam } from "../../assets/icons8-steam.svg";
import styles from "./Collection.module.scss";

const Collection = ({ width, height, children }) => {
  const [hover, setHover] = React.useState(false);
  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }
  return (
    <Square
      width={width}
      height={height}
      className={styles.collection}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {hover && (
        <ul data-anime="slide">
          <li>
            <a href="https://www.xbox.com/pt-BR/games/store/mega-man-11/BQPG2509CVJP">
              <Xbox />
            </a>
          </li>
          <li>
            <Switch />
          </li>
          <li>
            <Playstation />
          </li>
          <li>
            <Steam />
          </li>
        </ul>
      )}
    </Square>
  );
};

export default Collection;
