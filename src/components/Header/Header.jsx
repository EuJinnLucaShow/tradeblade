import Logo from "../../elements/Logo/Logo";
import HamburgerMenu from "../../modules/HamburgerMenu/HamburgerMenu";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HamburgerMenu />
    </header>
  );
}
