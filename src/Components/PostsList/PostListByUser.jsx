import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllUserPostAsync } from "../../store/postsSlice";
import Spinner from "../Spinner/Spinner";
import PostCard from "./PostCard";

const PostListByUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    postsByUser = [],
    error,
    isPending,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    if (id) dispatch(getAllUserPostAsync(id));
  }, [dispatch, id]);

  const showPost = (post) => <PostCard key={post.id} post={post} withPic />;

  if (isPending) return <Spinner />;
  if (error) return <p>{error}</p>;

  return postsByUser.length === 0 ? (
    <p>Posts list is empty</p>
  ) : (
    <section>{postsByUser.map(showPost)}</section>
  );
};

export default PostListByUser;
