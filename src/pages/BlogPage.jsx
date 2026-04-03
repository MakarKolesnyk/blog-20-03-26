import { useState } from "react";
import { useSelector } from "react-redux";
import FeaturedPost from "./../Components/FeaturedPost/FeaturedPost";
import Pagination from "../Components/Pagination/Pagination";
import PostsList from "../Components/PostsList/PostsList";
import CONSTANTS from "../constants";

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const limitPosts = CONSTANTS.LIMITS_POSTS.at(2);
  const skip = (page - 1) * limitPosts;
  const { total } = useSelector((state) => state.posts);
  return (
    <>
      <section>
        <FeaturedPost imgPosition="right" />
      </section>
      <div>
        <h1>Blog</h1>
        <PostsList withPic limit={5} skip={skip} />
        {total > limitPosts && (
          <Pagination
            page={page}
            setPage={setPage}
            limit={limitPosts}
            total={total}
          />
        )}
      </div>
    </>
  );
};

export default BlogPage;
