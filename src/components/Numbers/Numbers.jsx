import NumberStatistic from "../../modules/NumberStatistic/NumberStatistic";
import styles from "./Numbers.module.css";

export default function Numbers() {
  return (
    <div className={styles.wrapper} id="numbers">
      <div className={styles.rectangle}></div>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Numbers</h2>
          <p className={styles.date_text}>September 2022</p>
        </div>
        <NumberStatistic />
      </div>
    </div>
  );
}
