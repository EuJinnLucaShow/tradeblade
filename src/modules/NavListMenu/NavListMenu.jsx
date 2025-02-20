import styles from "./NavListMenu.module.css";

import { navList } from "../../data/navListMenu";

export default function NavListMenu() {
  return (
    <ul className={styles.list}>
      {Object.entries(navList).map(([key, value]) => (
        <li key={key} className={styles.item}>
          {value}
        </li>
      ))}
    </ul>
  );
}
