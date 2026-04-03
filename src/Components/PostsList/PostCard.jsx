import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getOneUser } from "../../api";
import styles from "./PostList.module.scss";

const PostCard = (props) => {
  const { post, withPic } = props;
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate();
  const navigateToPostPage = () => {
    navigate(`/posts/${post.id}`);
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  const showPostLink = (tag) => (
    <Link
      className={styles["tag-link"]}
      key={tag}
      to={`/posts/tag/${tag}`}
      onClick={stopPropagation}
    >
      {tag}
    </Link>
  );
  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getOneUser(post.userId);
        setAuthor(`${response.data.firstName} ${response.data.lastName}`);
      } catch (error) {
        console.log(error);
        setAuthor("anonim");
      }
    };
    loadUser();
  }, [post.userId]);
  return (
    <article onClick={navigateToPostPage} className={styles["post-card"]}>
      {withPic && (
        <picture>
          <source media="(min-width: 960px)" srcSet="/images/600x400.png" />
          <img src="/images/300x200.png" alt={post.title} />
        </picture>
      )}
      <div>
        {withPic ? (
          <p>{post.tags.map(showPostLink)}</p>
        ) : (
          <p>
            By{" "}
            <Link to={`/users/${post.userId}`} onClick={stopPropagation}>
              {author}
            </Link>
          </p>
        )}
        <h2 className={styles["post-card-title"]}>{post.title}</h2>
        {withPic && <p>{post.body.slice(0, 80)}...</p>}
      </div>
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
    tags: PropTypes.array,
  }),
  withPic: PropTypes.bool,
};

export default PostCard;
