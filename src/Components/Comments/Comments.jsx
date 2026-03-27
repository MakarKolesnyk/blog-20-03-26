import PropTypes from "prop-types";

const Comments = (props) => {
  const { comments } = props;
  const showComment = (comment) => <li key={comment.id}>{comment.body} (by {comment.user.fullName})</li>;
  return <ul>{comments.map(showComment)}</ul>;
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
