import Helmet from "./assets/Helmet-Header.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <img
          src={Helmet}
          alt="Capacete - Header"
          width={"157px"}
          height={"150px"}
        />
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Compre Agora</li>
      </ul>
    </div>
  );
};

export default Header;
