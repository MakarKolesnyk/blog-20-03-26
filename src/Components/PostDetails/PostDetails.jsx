import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mdiThumbUpOutline, mdiThumbDownOutline } from "@mdi/js";
import Comments from "./../Comments/Comments";
import {
  getAllCommentsByPostAsync,
  getOnePostAsync,
} from "../../store/postsSlice";
import { getOneUser } from "../../api";
import styles from "./PostDetails.module.scss";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [author, setAuthor] = useState(null);
  const [authorImg, setAuthorimg] = useState(null);
  const { selectedPost, error, isPending, comments } = useSelector(
    (state) => state.posts,
  );
  useEffect(() => {
    dispatch(getOnePostAsync(postId));
    dispatch(getAllCommentsByPostAsync(postId));
  }, [dispatch, postId]);
  useEffect(() => {
    const loadAuthor = async () => {
      try {
        const response = await getOneUser(selectedPost.userId);
        setAuthor(`${response.data.firstName} ${response.data.lastName}`);
        setAuthorimg(`${response.data.image}`);
        console.log(authorImg);
      } catch (error) {
        console.log(error);
        setAuthor("anonim");
        authorImg("/images/anonim.png");
      }
    };
    if (selectedPost) {
      loadAuthor();
    }
  }, [selectedPost, authorImg]);
  console.log(comments);

  if (error) {
    <p>Error!</p>;
  }
  if (isPending) {
    return <p>Loading</p>;
  }
  if (!selectedPost) {
    return <p>not post available</p>;
  }
  return (
    <article className={styles.post}>
      <div className={styles.flex}>
        <div className={styles.flex}>
          <img className={styles.img} src={authorImg} alt="authorImg" />
          <div>
            {author}
            <p>Views: {selectedPost.views}</p>
          </div>
        </div>
        <div>
          <svg viewBox="0 0 24 24" width={24} height={24}>
            <path d={mdiThumbUpOutline} />
          </svg>
          {selectedPost.reactions.likes}
          <svg viewBox="0 0 24 24" width={24} height={24}>
            <path d={mdiThumbDownOutline} />
          </svg>
          {selectedPost.reactions.dislikes}
        </div>
      </div>
      <h1>{selectedPost.title}</h1>
      <picture>
        <img className={styles['post-img']} src="/images/1600x1200.png"/>
      </picture>
      <p>{selectedPost.body}</p>
      <h3>comments:</h3>
      {comments.length === 0 ? (
        <p>empty comments list</p>
      ) : (
        <Comments comments={comments} />
      )}
    </article>
  );
};

export default PostDetails;
