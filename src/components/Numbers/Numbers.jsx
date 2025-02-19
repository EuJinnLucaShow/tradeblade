import NumberStatistic from "../../modules/NumberStatistic/NumberStatistic";
import styles from "./Numbers.module.css";

export default function Numbers() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rectangle}></div>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Цифры</h2>
          <p className={styles.date_text}>Cентябрь 2022</p>
        </div>
        <NumberStatistic />
      </div>
    </div>
  );
}
