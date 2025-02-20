import Checkbox from "../../icons/Checkbox";
import DottedLine from "../../icons/DottedLine";
import DropDownList from "../../modules/DropDownList/DropDownList";

import styles from "./TariffCard.module.css";

const items = [
  {
    id: 1,
    value: "Ручной трейдинг",
  },
  {
    id: 2,
    value: "Автоматическое или полуавтоматическое копирование сделок",
  },
  {
    id: 3,
    value: "Личный кабинет со статистикой",
  },
  {
    id: 4,
    value: "Среднесрочные сделки с уровнями набора портфеля",
  },
];

export default function TariffCard() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>STANDART</h3>
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
          $234<div className={styles.discount}>-35%</div>
        </div>
        <div className={styles.term}>
          <DropDownList />
        </div>
      </div>
    </div>
  );
}
