import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import styles from "./FeaturedPost.module.scss";

const FeaturedPost = (props) => {
  const { imgPosition } = props;
  const { posts } = useSelector((store) => store.posts);
  const featuredPost =
    posts.length > 0
      ? [...posts].sort((post1, post2) => post2.views - post1.views)[0]
      : null;

  if (!featuredPost) {
    return <Spinner />;
  }
  return (
    <>
      {imgPosition === "under" && (
        <div className={styles["full-screen"]}>
          <img src={"/images/1600x1200.png"} />
        </div>
      )}
      <article className={styles["featured-blog"]}>
        <div>
          {imgPosition === "over" && <img src={"/images/600x400.png"} />}
          <h2>{featuredPost.title}</h2>
          <p>{featuredPost.body.slice(0, 150)}...</p>
          <button>
            <Link to={`/posts/${featuredPost.id}`}>Read More</Link>
          </button>
        </div>
        {imgPosition === "right" && <img src={"/images/600x400.png"} />}
      </article>
    </>
  );
};

FeaturedPost.propTypes = {
  imgPosition: PropTypes.string,
};

export default FeaturedPost;
