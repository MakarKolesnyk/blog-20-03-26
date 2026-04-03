import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsAsync } from "../../store/postsSlice";
import ReadNextPost from "./ReadNextPost";
import styles from "./ReadPost.module.scss";

const ReadNext = () => {
  const dispatch = useDispatch();
  const { posts, isPending } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPostsAsync({ limit: 3, skip: 0 }));
  }, [dispatch]);

  if (isPending) return <p>Loading...</p>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Read next</h2>

        <div className={styles.list}>
          {posts.map((post) => (
            <ReadNextPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadNext;