import PropTypes from "prop-types";

import styles from "./NavListMenu.module.css";

import { navList } from "../../data/navListMenu";

export default function NavListMenu({ setIsOpen }) {
  return (
    <ul className={styles.list}>
      {Object.entries(navList).map(([key, value]) => (
        <li key={key} className={styles.item}>
          <a
            href={`#${key}`}
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            {value}
          </a>
        </li>
      ))}
    </ul>
  );
}

NavListMenu.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
