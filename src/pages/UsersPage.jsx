import { useState } from "react";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";
import UsersList from "./../Components/UsersList/UsersList";
import styles from "./pages.module.scss";

const UsersPage = () => {
  const limits = [4, 8, 12, 16, 20];
  const [limitUsers, setLimitUsers] = useState(limits.at(0));
  const [page, setPage] = useState(1);
  const showOption = (limit) => <option key={limit}>{limit}</option>;
  const changeLimitUsers = (event) => {
    setLimitUsers(Number(event.target.value));
    setPage(1);
  };
  const setPrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const setNextPage = () => {
    if (page < 100) {
      setPage((prev) => prev + 1);
    }
  };
  const skip = (page - 1) * limitUsers;
  return (
    <div className={styles.wrapper}>
      <h1>Autors</h1>
      <div>
        <select
          name="limitUsers"
          value={limitUsers}
          onChange={changeLimitUsers}
        >
          {limits.map(showOption)}
        </select>
      </div>
      <UsersList limit={limitUsers} skip={skip} />
      <div>
        <span onClick={setPrevPage}>
          <svg viewBox="0 0 24 24" width={40} height={40}>
            <path d={mdiChevronLeft} />
          </svg>
        </span>
        <span>{page}</span>
        <span onClick={setNextPage}>
          <svg viewBox="0 0 24 24" width={40} height={40}>
            <path d={mdiChevronRight} />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default UsersPage;
