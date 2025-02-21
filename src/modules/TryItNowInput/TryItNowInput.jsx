import styles from "./TryItNowInput.module.css";

export default function TryItNowInput() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Попробуйте сейчас и получите 5 дней бесплатного пользования
      </h3>
      <form className={styles.form}>
        <input className={styles.input} placeholder="Ваш e–mail"></input>
        <button className={styles.button}>попробовать</button>
      </form>
    </div>
  );
}
