import PropTypes from "prop-types";

import styles from "./ButtonClose.module.css";

import Close from "../../icons/Close";

export default function ButtonClose({ setIsOpen }) {
  return (
    <button className={styles.button} onClick={() => setIsOpen(false)}>
      <Close />
    </button>
  );
}

ButtonClose.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
