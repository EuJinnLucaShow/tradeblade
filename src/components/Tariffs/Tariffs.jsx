import TariffCard from "../TariffCard/TariffCard";
import { standartList } from "../../data/tradingStandart";
import { vipList } from "../../data/tradingVip";

import styles from "./Tariffs.module.css";

export default function Tariffs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Тарифы</h2>
        <div className={styles.filter}>
          <button className={styles.spot}>СПОТ</button>
          <button className={styles.futures}>фьючерс</button>
        </div>
      </div>
      <div className={styles.wrap_card}>
        <TariffCard
          title={"STANDART"}
          bgColor={""}
          price={"$234"}
          items={standartList}
        />
        <TariffCard
          title={"VIP"}
          bgColor={"#6A54FF"}
          price={"$585"}
          items={vipList}
        />
      </div>
    </div>
  );
}
