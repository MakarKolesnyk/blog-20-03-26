import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  const { page, setPage, total, limit } = props;
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
  return (
    <div>
      <div className={styles.pagination}>
        {page > 1 && (
          <span onClick={setPrevPage}>
            <svg viewBox="0 0 24 24" width={40} height={40}>
              <path d={mdiChevronLeft} />
            </svg>
          </span>
        )}
        <span className={styles.page}>{page}</span>
        {total - limit * page > 0 && (
          <span onClick={setNextPage}>
            <svg viewBox="0 0 24 24" width={40} height={40}>
              <path d={mdiChevronRight} />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  total: PropTypes.number,
};

export default Pagination;
