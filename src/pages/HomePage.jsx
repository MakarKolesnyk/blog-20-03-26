import UsersList from "../Components/UsersList/UsersList";
import styles from "./pages.module.scss";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Home Page</h1>
      <h2>List of authors</h2>
      <UsersList/>
    </div>
  );
};

export default HomePage;
