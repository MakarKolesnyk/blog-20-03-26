import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "./../Spinner/Spinner";
import { getAllPostsAsync } from "../../store/postsSlice";
import PostCard from "./PostCard";

const PostsList = (props) => {
  const { withPic, limit, skip = 0 } = props;
  const dispatch = useDispatch();
  const { posts, error, isPending } = useSelector((state) => state.posts);
  const showPost = (post) => (
    <PostCard key={post.id} post={post} withPic={withPic} />
  );
  useEffect(() => {
    dispatch(getAllPostsAsync({ limit, skip }));
  }, [dispatch, limit, skip]);
  if (error) {
    return <p>{error}</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return posts.length === 0 ? (
    <p>Posts list is empty</p>
  ) : (
    <section>{posts.map(showPost)}</section>
  );
};

PostsList.propTypes = {
  withPic: PropTypes.bool,
};

export default PostsList;
