import styles from "./ChatBox.module.scss";
const ChatBox = ({ children }) => {
  return <div className={styles.chatBox}>{children}</div>;
};

export default ChatBox;
