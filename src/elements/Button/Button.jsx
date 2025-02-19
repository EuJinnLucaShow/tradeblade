import PropTypes from "prop-types";

import styles from "./Button.module.css";

export default function Button({ name, bgColor, color, border }) {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        border: border || "none",
      }}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
