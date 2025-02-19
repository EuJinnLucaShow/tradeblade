import styles from "./NumberStatistic.module.css";

const items = [
  { id: 11, name: `Торговой прибыли`, value: "2756%" },
  { id: 12, name: "фьючерсных и спотовых сделок", value: "67" },
  { id: 13, name: "прибыль подписчиков", value: "375000" },
];

export default function NumberStatistic() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list_stat}>
        {items.map((item) => (
          <li key={item.id} className={styles.item_stat}>
            <span className={styles.name_stat}>{item.name}</span>
            <span className={styles.value_stat}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
