import styles from "./NavListMenu.module.css";

const items = {
  1: "Цифры",
  2: "Сделки онлайн",
  3: "о компании",
  4: "как начать",
  5: "тарифы",
  6: "отзывы",
  7: "FAQ",
};

export default function NavListMenu() {
  return (
    <ul className={styles.list}>
      {Object.entries(items).map(([key, value]) => (
        <li key={key} className={styles.item}>
          {value}
        </li>
      ))}
    </ul>
  );
}
