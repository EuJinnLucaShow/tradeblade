import TariffCard from "../TariffCard/TariffCard";
import styles from "./Tariffs.module.css";

export default function Tariffs() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Тарифы</h2>
      <div className={styles.filter}>
        <button className={styles.spot}>СПОТ</button>
        <button className={styles.futures}>фьючерс</button>
      </div>
      <div className={styles.wrap_card}>
        <TariffCard />
        <TariffCard />
      </div>
    </div>
  );
}
