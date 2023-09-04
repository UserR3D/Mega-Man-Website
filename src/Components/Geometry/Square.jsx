import styles from "./Square.module.scss";

const Square = ({
  width,
  height,
  className,
  targetClick,
  onMouseOver,
  onMouseOut,
  children,
}) => {
  return (
    <div
      className={`${className} ${styles.square}`}
      onClick={targetClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
};

export default Square;
