import styles from "./NumberStatistic.module.css";
import { statistics } from "../../data/numberStatistic";
import CountUpAnimation from "../CountUpAnimation/CountUpAnimation";

export default function NumberStatistic() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list_stat}>
        {statistics.map((item) => (
          <li key={item.id} className={styles.item_stat}>
            <span className={styles.name_stat}>{item.name}</span>
            <CountUpAnimation
              targetValue={item.value}
              pro_centum={item.pro_centum || ""}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
