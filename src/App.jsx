import { GlobalStorage } from "./GlobalContext";
import Header from "./Header";
import Home from "./Components/Home/Home";
import Footer from "./Footer";

function App() {
  return (
    <GlobalStorage>
      <Header />
      <Home />
      <Footer />
    </GlobalStorage>
  );
}

export default App;
