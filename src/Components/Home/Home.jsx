import Information from "./Information";
import Collections from "../Games/Collections";
import NewGame from "../Games/NewGame";
import Footer from "../../Footer";

const Home = () => {
  return (
    <div>
      <Information />
      <Collections />
      <NewGame />
      <Footer />
    </div>
  );
};

export default Home;
