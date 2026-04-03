import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import Menu from "../Menu/Menu";
import logo from "../../../public/Logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
          <Menu />
          <NavLink to="/" className={styles["logo-text"]}>
            <img src={logo} alt="logo" className={styles.logo} /> MetaBlog
          </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
