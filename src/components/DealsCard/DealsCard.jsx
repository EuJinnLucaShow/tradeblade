import PropTypes from "prop-types";

import logo from "../../assets/logo.png";
import ArrowUp from "../../icons/ArrowUp";
import styles from "./DealsCard.module.css";

export default function DealsCard({ deal }) {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" width={111} className={styles.image} />
      <div className={styles.cryptocurrencies}>
        <div className={styles.wrap_spot}>
          <span className={styles.spot_name}>{deal.crypto}</span>
          <span className={styles.spot}>SPOT · 1 min ago</span>
        </div>
        <div className={styles.wrap_profit}>
          <span className={styles.profit_name}>Profit</span>
          <div className={styles.profit_value}>
            <div className={styles.profit}>{deal.value}</div>
            <ArrowUp />
          </div>
        </div>
        <div className={styles.wrap_target_date}>
          <span className={styles.target_number}>Target 4</span>
          <span className={styles.target_date}>Entry Date 06.10.2022</span>
        </div>
      </div>
    </div>
  );
}

DealsCard.propTypes = {
  deal: PropTypes.object,
};
