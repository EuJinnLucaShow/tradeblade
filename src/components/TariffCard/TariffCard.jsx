import PropTypes from "prop-types";

import Checkbox from "../../icons/Checkbox";
import DottedLine from "../../icons/DottedLine";
import DropDownList from "../../modules/DropDownList/DropDownList";

import styles from "./TariffCard.module.css";

export default function TariffCard({items, title, price, bgColor }) {
  return (
    <div className={styles.wrapper} style={{ background: `${bgColor}` }}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <div key={item.id} className={styles.wrap_item}>
            <li className={styles.item}>
              <Checkbox />
              <span className={styles.item_text}>{item.value}</span>
            </li>
            <DottedLine />
          </div>
        ))}
      </ul>
      <div className={styles.wrap_cost}>
        <div className={styles.cost}>
          {price}
          <div className={styles.discount}>-35%</div>
        </div>
        <div className={styles.term}>
          <DropDownList />
        </div>
      </div>
      <button className={styles.button}>
        <span>Попробовать</span>
        <span className={styles.button_span}>5 дней бесплатно</span>
      </button>
    </div>
  );
}

TariffCard.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.string,
  bgColor: PropTypes.string,
};