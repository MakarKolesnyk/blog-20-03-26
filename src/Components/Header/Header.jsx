import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mdiLoginVariant, mdiLogoutVariant } from "@mdi/js";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import Modal from "../Modal/Modal";
import LoginForm from "../forms/LoginForm";
import { clearError, clearUser } from "../../store/userSlice";
import Spinner from "../Spinner/Spinner";
import styles from "./Header.module.scss";
import logo from "../../../public/Logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const { user, error, isPending } = useSelector((state) => state.user);
  const [isShowModal, setIsShowModal] = useState(false);
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
        <NavLink to='/' className={styles["logo-text"]}><img src={logo} alt="logo" className={styles.logo} /> MetaBlog</NavLink>
        <Menu />
        <input type="text" placeholder="search" />
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
