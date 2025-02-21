import banner from "../../assets/banner.png";
import SignUpInput from "../../modules/SignUpInput/SignUpInput";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <img src={banner} alt="banner" className={styles.banner} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          моментально Копируй сделки профи трейдеров
        </h1>
        <p className={styles.text}>
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </p>
        <SignUpInput />
      </div>
    </div>
  );
}
