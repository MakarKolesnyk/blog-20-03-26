import { useState } from "react";
import UsersList from "./../Components/UsersList/UsersList";
import styles from "./pages.module.scss";
import Limit from "../Components/Limit/Limit";
import CONSTANTS from "../constants";
import Pagination from "../Components/Pagination/Pagination";
import { useSelector } from "react-redux";

const UsersPage = () => {
  const limits = CONSTANTS.LIMITS;
  const [limitUsers, setLimitUsers] = useState(limits.at(0));
  const [page, setPage] = useState(1);
  const { total } = useSelector((state) => state.users);
  const changeLimitUsers = (event) => {
    setLimitUsers(Number(event.target.value));
    setPage(1);
  };
  const skip = (page - 1) * limitUsers;
  return (
    <div className={styles.wrapper}>
      <h1>Autors</h1>
      <Limit changeLimit={changeLimitUsers} limit={limitUsers} />
      <UsersList limit={limitUsers} skip={skip} />
      <Pagination page={page} setPage={setPage} limit={limitUsers} total={total}/>
    </div>
  );
};

export default UsersPage;
