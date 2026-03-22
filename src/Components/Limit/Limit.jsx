import PropTypes from "prop-types";
import styles from "./Limit.module.scss";
import CONSTANTS from "../../constants";

const Limit = (props) => {
  const { limit, changeLimit } = props;
  const showOption = (limit) => <option key={limit}>{limit}</option>;
  const limits = CONSTANTS.LIMITS;
  return (
    <div className={styles.select}>
      <select name="limitUsers" value={limit} onChange={changeLimit}>
        {limits.map(showOption)}
      </select>
    </div>
  );
};

Limit.propTypes = {
  limitUsers: PropTypes.number,
  changeLimitUsers: PropTypes.func,
};

export default Limit;
