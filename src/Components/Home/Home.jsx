import Information from "./Information";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.bg}>
      <Information />
    </div>
  );
};

export default Home;
