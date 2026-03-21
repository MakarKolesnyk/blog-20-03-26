import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "./../Spinner/Spinner";
import { getUsers } from "./../../store/usersSlice";
import UserCard from "./UserCard";
import styles from "./Users.module.scss";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, error, isPending } = useSelector((state) => state.users);

  const showUser = (user) => <UserCard key={user.id} user={user} />;
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (error) {
    return <p>Error</p>;
  }
  if (isPending) {
    return <Spinner />;
  }
  return users.length === 0 ? (
    <p>List empty</p>
  ) : (
    <section className={styles['users-list']}>{users.map(showUser)}</section>
  );
};

export default UsersList;
