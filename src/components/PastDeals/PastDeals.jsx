import CardDeals from "../CardDeals/CardDeals";
import styles from "./PastDeals.module.css";

export default function PastDeals() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_title}>
        <h2 className={styles.title}>Прошедшие сделки</h2>
        <div className={styles.wrapper_status}>
          <div className={styles.status}></div>
          <span className={styles.text}>Онлайн</span>
        </div>
      </div>
      <CardDeals />
    </div>
  );
}
