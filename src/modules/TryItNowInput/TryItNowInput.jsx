import styles from "./TryItNowInput.module.css";

export default function TryItNowInput() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Try now and get 5 days of free usage</h3>
      <form className={styles.form}>
        <input className={styles.input} placeholder="Ваш e–mail"></input>
        <button className={styles.button}>Try</button>
      </form>
    </div>
  );
}
