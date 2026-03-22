import { Link } from "react-router-dom";
import PostsList from "../Components/PostsList/PostsList";
import UsersList from "../Components/UsersList/UsersList";
import styles from "./pages.module.scss";
import CONSTANTS from "./../constants";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <section>
        <h2>All posts</h2>
        <Link to="/posts">view all</Link>
        <PostsList limit={CONSTANTS.LIMITS_POSTS.at(1)} />
      </section>
      <section>
        <h2>List of authors</h2>
        <UsersList />
      </section>
    </div>
  );
};

export default HomePage;
