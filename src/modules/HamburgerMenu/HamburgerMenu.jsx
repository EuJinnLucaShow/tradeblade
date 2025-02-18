import MenuIcon from "../../elements/MenuIcon/MenuIcon";

import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  return (
    <button
      className={styles.button}
      onClick={() => {
        console.log("Click button menu");
      }}
    >
      <MenuIcon />
    </button>
  );
}
