import { useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import PostsList from "../Components/PostsList/PostsList";
import CONSTANTS from "../constants";

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const limitPosts = CONSTANTS.LIMITS_POSTS.at(2);
  const skip = (page - 1) * limitPosts;
  return (
    <div>
      <h1>Blog</h1>
      <PostsList withPic limit={5} skip={skip} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default BlogPage;
