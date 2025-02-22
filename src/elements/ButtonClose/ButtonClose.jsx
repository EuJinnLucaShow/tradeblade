import PropTypes from "prop-types";

import styles from "./ButtonClose.module.css";

import Close from "../../icons/Close";

export default function ButtonClose({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Close />
    </button>
  );
}

ButtonClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};
