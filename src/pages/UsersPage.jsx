import UsersList from "./../Components/UsersList/UsersList";
import styles from "./pages.module.scss";

const UsersPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Autors</h1>
      <UsersList />
    </div>
  );
};

export default UsersPage;
