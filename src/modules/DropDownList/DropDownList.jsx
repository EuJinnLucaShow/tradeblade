import { useState } from "react";

import ArrowDropDown from "../../icons/ArrowDropDown";
import styles from "./DropDownList.module.css";

export default function DropDownList() {
  const [value, setValue] = useState(12);
  const [isOpen, setIsOpen] = useState(false);

  const arr = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleClick = (option) => {
    setValue(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        <span>{value} месяцев</span> <ArrowDropDown />
      </button>
      {isOpen && (
        <ul className={styles.dporList}>
          {arr.map((option) => (
            <li key={option} className={styles.dropItem}>
              <button onClick={() => handleClick(option)}>
                <span>{option} месяцев</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
