import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PostSearchList from "../Components/PostsList/PostSearchList/PostSearchList";
import Pagination from "../Components/Pagination/Pagination";
import CONSTANTS from "../constants";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [page, setPage] = useState(1);
  const limitPosts = CONSTANTS.LIMITS_POSTS.at(2);
  const skip = (page - 1) * limitPosts;
  const {total} = useSelector((state) => state.posts);
  console.log(q);
  

  useEffect(() => {
    if (q) {
      setTimeout(() => setPage(1), 0);
    }
  }, [q]);

  return (
    <div>
      <h1>Search Result by: {q}</h1>
      <section>
        <PostSearchList q={q} limit={limitPosts} skip={skip} />
        {total > 0 ? <Pagination page={page} setPage={setPage} total={total} limit={limitPosts}/> : <p>Posts Not Found</p>}
      </section>
    </div>
  );
};

export default SearchPage;
