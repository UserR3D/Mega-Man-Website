import Information from "./Information";
import Collections from "../Games/Collections";
import Footer from "../../Footer";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.bg}>
      <Information />
      <Collections />
      <Footer />
    </div>
  );
};

export default Home;
