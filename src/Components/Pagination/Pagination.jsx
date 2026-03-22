import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import PropTypes from "prop-types";
import styles from './Pagination.module.scss'


const Pagination = (props) => {
    const {page, setPage} = props
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
        <span onClick={setPrevPage}>
          <svg viewBox="0 0 24 24" width={40} height={40}>
            <path d={mdiChevronLeft} />
          </svg>
        </span>
        <span className={styles.page}>{page}</span>
        <span onClick={setNextPage}>
          <svg viewBox="0 0 24 24" width={40} height={40}>
            <path d={mdiChevronRight} />
          </svg>
        </span>
      </div>
    </div>
  );
};

Pagination.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.func,
};

export default Pagination;
