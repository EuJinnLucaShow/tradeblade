import styles from "./NumberStatistic.module.css";
import { statistics } from "../../data/numberStatistic";

export default function NumberStatistic() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list_stat}>
        {statistics.map((item) => (
          <li key={item.id} className={styles.item_stat}>
            <span className={styles.name_stat}>{item.name}</span>
            <span className={styles.value_stat}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
