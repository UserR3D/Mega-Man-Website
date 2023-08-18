import styles from "./ChatBox.module.scss";

const ChatBox = ({ width, height, children }) => {
  return (
    <div className={styles.chatBox} style={{ width: width, height: height }}>
      {children}
    </div>
  );
};

export default ChatBox;
