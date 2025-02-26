import styles from "./SignUpInput.module.css";

export default function SignUpInput() {
  const heandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={styles.form}>
        <input className={styles.input} placeholder="Ваш e–mail"></input>
        <button
          type="submit"
          onClick={(e) => heandleSubmit(e)}
          className={styles.button}
        >
          start
        </button>
      </form>
      <p className={styles.text}>5 days of free usage</p>
    </div>
  );
}
