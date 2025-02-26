import banner from "../../assets/banner.png";
import SignUpInput from "../../modules/SignUpInput/SignUpInput";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <img src={banner} alt="banner" className={styles.banner} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Instantly Copy Trades of Professional Traders
        </h1>
        <p className={styles.text}>
          Start copying trades with a successful team of professional traders in
          automatic mode.
        </p>
        <SignUpInput />
      </div>
    </div>
  );
}
