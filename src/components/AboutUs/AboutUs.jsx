import TryItNowInput from "../../modules/TryItNowInput/TryItNowInput";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.wrapper} id="about_us">
      <div className={styles.rectangle}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>О компании</h2>
          <p className={styles.text}>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
            <br />
            <br />
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
        <TryItNowInput />
      </div>
    </div>
  );
}
