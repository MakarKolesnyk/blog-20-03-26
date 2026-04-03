import { Link } from "react-router-dom";
import PostsList from "../Components/PostsList/PostsList";
import UsersList from "../Components/UsersList/UsersList";
import TagsList from "../Components/TagsList/TagsList";
import styles from "./pages.module.scss";
import CONSTANTS from "./../constants";
import FeaturedPost from "../Components/FeaturedPost/FeaturedPost";


const HomePage = () => {
  return (
    <>
      <section className={styles.realetive}>
        <FeaturedPost imgPosition="under" />
      </section>
      <div className={styles.wrapper}>
        <section className={styles["all-posts"]}>
          <div >
            <h2>Featured Post</h2>
            <div className={styles['featured-post']}>
            <FeaturedPost imgPosition="over" />
            </div>
          </div>
          <div>
            <div className={styles.inlineBlock}>
              <h2>All posts</h2>
              <Link to="/posts">view all</Link>
            </div>
            <PostsList limit={CONSTANTS.LIMITS_POSTS.at(1)} />
          </div>
        </section>
        <section>
          <h2>List of authors</h2>
          <UsersList />
        </section>
        <section>
          <h2>Choose a tag</h2>
          <TagsList />
        </section>
      </div>
    </>
  );
};

export default HomePage;
