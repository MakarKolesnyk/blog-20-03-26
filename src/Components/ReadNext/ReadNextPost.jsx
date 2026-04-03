import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./ReadPost.module.scss";

const ReadNextPost = ({ post }) => {
  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <div className={styles.image}>
        <img src="/images/600x400.png" alt={post.title} />
      </div>

      <div className={styles.content}>
        <h3>{post.title}</h3>
        <p>{post.body.slice(0, 70)}...</p>
      </div>
    </article>
  );
};

ReadNextPost.propTypes = {
  post: PropTypes.object,
};

export default ReadNextPost;