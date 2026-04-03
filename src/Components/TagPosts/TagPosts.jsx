import { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostByTagAsync } from "../../store/postsSlice";
import Spinner from "../Spinner/Spinner";

import PostCard from "../PostsList/PostCard";

const TagPosts = (props) => {
  const { tagName, limit, skip } = props;
  const dispatch = useDispatch();
  const { posts, error, isPending } = useSelector((state) => state.posts);
  const showPost = (post) => (
    <PostCard post={post} withPic={true} key={post.id} />
  );
  useEffect(() => {
    dispatch(getAllPostByTagAsync({ tagName, limit, skip }));
  }, [dispatch, tagName, limit, skip]);
  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return <div>{posts.map(showPost)}</div>;
};

TagPosts.propTypes = {
  tagName: PropTypes.string,
  limit: PropTypes.number,
  skip: PropTypes.number,
};

export default TagPosts;
