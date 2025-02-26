import TariffCard from "../TariffCard/TariffCard";
import { standartList } from "../../data/tradingStandart";
import { vipList } from "../../data/tradingVip";

import styles from "./Tariffs.module.css";
import { useState } from "react";

export default function Tariffs() {
  const [spot, setSpot] = useState(true);
  const [futures, setFutures] = useState(false);

  const handleClick = () => {
    setSpot(!spot);
    setFutures(!futures);
  };

  return (
    <div className={styles.wrapper} id="tariffs">
      <div className={styles.container}>
        <h2 className={styles.title}>Tariffs</h2>
        <div className={styles.filter}>
          <button
            className={spot ? styles.active : styles.inactive}
            onClick={handleClick}
          >
            SPOT
          </button>
          <button
            className={futures ? styles.active : styles.inactive}
            onClick={handleClick}
          >
            Futures
          </button>
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
