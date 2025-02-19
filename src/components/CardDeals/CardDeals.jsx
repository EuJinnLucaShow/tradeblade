import logo from "../../assets/logo.png";
import styles from "./CardDeals.module.css";

export default function CardDeals() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cryptocurrencies}>
        <span>NEAR/USDT</span>
        <span>SPOT · 1 мин. назад</span>
        <img src={logo} alt="logo" width={111} className={styles.image} />
      </div>
    </div>
  );
}
