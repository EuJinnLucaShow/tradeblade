import TryItNowInput from "../../modules/TryItNowInput/TryItNowInput";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.wrapper} id="about_us">
      <div className={styles.rectangle}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.text}>
            We are an experienced team for whom trading is a profession.
            TradeBlade is an authorized official broker of the Binance exchange.
            <br />
            <br />
            It offers users numerous advantages, such as higher API
            synchronization speed and the ability to create a Binance account
            through the TradeBlade platform in just one click.
          </p>
        </div>
        <TryItNowInput />
      </div>
    </div>
  );
}
