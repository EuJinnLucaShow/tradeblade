import Logo from "../../icons/Logo";
import HamburgerMenu from "../../modules/HamburgerMenu/HamburgerMenu";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo width={"107.111"} height={"52"} />
      <HamburgerMenu />
    </header>
  );
}
