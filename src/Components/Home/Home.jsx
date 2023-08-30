import Information from "./Information";
import Collections from "../Games/Collections";
import NewGame from "../Games/NewGame";
import Footer from "../../Footer";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.bg}>
      <Information />
      <Collections />
      <NewGame />
      <Footer />
    </div>
  );
};

export default Home;
