import styles from "./Square.module.scss";

const Square = ({ width, height, targetClick, children }) => {
  return (
    <div
      className={styles.square}
      onClick={targetClick}
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
};

export default Square;
