import { useMediaQuery } from "@react-hook/media-query";

import Logo from "../../icons/Logo";
import HamburgerMenu from "../../modules/HamburgerMenu/HamburgerMenu";

import styles from "./Header.module.css";
import NavList from "../../modules/NavList/NavList";

export default function Header() {
  const isMinWidth768 = useMediaQuery("(max-width: 768px)");

  return (
    <header className={styles.header}>
      <Logo width={"107.111"} height={"52"} />
      {!isMinWidth768 && <NavList />}
      {!isMinWidth768 && (
        <div className={styles.btn_group}>
          <button className={styles.log_btn}>Login</button>
          <button className={styles.reg_btn}>Register</button>
        </div>
      )}
      {isMinWidth768 && <HamburgerMenu />}
    </header>
  );
}
