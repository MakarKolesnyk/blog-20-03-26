import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  mdiLoginVariant,
  mdiLogoutVariant,
  mdiWhiteBalanceSunny,
  mdiMoonWaningCrescent,
} from "@mdi/js";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";
import Modal from "../Modal/Modal";
import LoginForm from "../forms/LoginForm";
import { clearError, clearUser } from "../../store/userSlice";
import Spinner from "../Spinner/Spinner";
import styles from "./Header.module.scss";
import logo from "../../../public/Logo.png";
import { ThemeContext } from "../../context/ThemeContext";
import CONSTANTS from "../../constants";

const { THEMES } = CONSTANTS;

const Header = () => {
  const dispatch = useDispatch();
  const { user, error, isPending } = useSelector((state) => state.user);
  const [isShowModal, setIsShowModal] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleLogin = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  const closeErrorModal = () => {
    dispatch(clearError());
  };
  const clearUserModal = () => {
    dispatch(clearUser());
  };
  return (
    <header className={styles.header}>
      <div className={styles["header-top"]}>
        {isPending ? (
          <Spinner />
        ) : user ? (
          <p>
            <span>Welcome, {user.firstName}</span>
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              onClick={clearUserModal}
            >
              <path d={mdiLogoutVariant} />
            </svg>
          </p>
        ) : (
          <svg viewBox="0 0 24 24" width={24} height={24} onClick={handleLogin}>
            <path d={mdiLoginVariant} />
          </svg>
        )}
      </div>

      <div className={styles["header-menu"]}>
        <NavLink to="/" className={styles["logo-text"]}>
          <img src={logo} alt="logo" className={styles.logo} /> MetaBlog
        </NavLink>
        <Menu />
        <SearchForm />
        <span>
          {theme === THEMES.LIGHT ? (
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              onClick={toggleTheme}
            >
              <path d={mdiMoonWaningCrescent} />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              onClick={toggleTheme}
            >
              <path d={mdiWhiteBalanceSunny} />
            </svg>
          )}
        </span>
      </div>

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
      {error && <Modal closeModal={closeErrorModal}>{error}</Modal>}
    </header>
  );
};

export default Header;
