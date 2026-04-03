import { useEffect} from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getSearchPostAsync } from "../../../store/postsSlice";
import Spinner from "../../Spinner/Spinner";
import PostCard from "../PostCard";

const PostSearchList = (props) => {
  const { q, limit, skip } = props;
  const dispatch = useDispatch();
  const { posts, isPending, error} = useSelector((state) => state.posts);
  useEffect(() => {
    if (q) {
      dispatch(getSearchPostAsync({ q, limit, skip }));
    }
  }, [dispatch, q, limit, skip]);
  const showPost = (post) => <PostCard key={post.id} post={post} />;
  if (isPending) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return <div>{posts.map(showPost)}</div>;
};

PostSearchList.propTypes = {
    q: PropTypes.string,
    limit: PropTypes.number,
    skip: PropTypes.number,
    
};

export default PostSearchList;
