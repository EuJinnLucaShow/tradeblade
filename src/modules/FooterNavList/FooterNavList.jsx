import styles from "./FooterNavList.module.css";

import { navList } from "../../data/navListMenu";

export default function FooterNavList() {
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
