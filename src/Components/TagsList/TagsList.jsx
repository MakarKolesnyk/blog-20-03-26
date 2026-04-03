import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTagsAsync } from "../../store/postsSlice";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import styles from "./TagsList.module.scss";

const TagsList = () => {
  const dispatch = useDispatch();
  const { tags, error, isPending } = useSelector((state) => state.posts);
  const showTags = (tag) => (
    <li key={tag}>
      <Link key={tag} to={`/posts/tag/${tag}`}>
        {tag}
      </Link>
    </li>
  );
  useEffect(() => {
    dispatch(getAllTagsAsync());
  }, [dispatch]);
  if (error) {
    return <p>Error</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return tags.length === 0 ? (
    <p>List empty</p>
  ) : (
    <ul className={styles.tags}>{tags.map(showTags)}</ul>
  );
};

export default TagsList;
