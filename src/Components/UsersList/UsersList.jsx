import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "./../Spinner/Spinner";
import { getUsers } from "./../../store/usersSlice";
import UserCard from "./UserCard";
import styles from "./Users.module.scss";

const UsersList = (props) => {
  const { limit = 4, skip = 0 } = props;
  const dispatch = useDispatch();
  const { users, error, isPending } = useSelector((state) => state.users);

  const showUser = (user) => <UserCard key={user.id} user={user} />;
  useEffect(() => {
    dispatch(getUsers({ limit, skip }));
  }, [dispatch, limit, skip]);

  if (error) {
    return <p>Error</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return users.length === 0 ? (
    <p>List empty</p>
  ) : (
    <section className={styles["users-list"]}>{users.map(showUser)}</section>
  );
};

UsersList.propTypes = {
  limit: PropTypes.number,
  skip: PropTypes.number,
};

export default UsersList;
