import React from "react";
import Square from "../Geometry/Square";
import { ReactComponent as Xbox } from "../../assets/icons8-xbox.svg";
import { ReactComponent as Switch } from "../../assets/nintendo-switch.svg";
import { ReactComponent as Playstation } from "../../assets/icons8-ps4.svg";
import { ReactComponent as Steam } from "../../assets/icons8-steam.svg";
const Collection = ({ width, height, className, children }) => {
  const [hover, setHover] = React.useState(false);
  function handleMouseOver() {
    setHover(true);
    console.log("true");
  }
  function handleMouseOut() {
    setHover(false);
    console.log("false");
  }
  return (
    <Square
      width={width}
      height={height}
      className={className}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {hover && (
        <ul data-anime>
          <li>
            <Xbox />
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
