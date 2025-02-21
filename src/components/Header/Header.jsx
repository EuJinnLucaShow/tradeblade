import { useMediaQuery } from "@react-hook/media-query";

import Logo from "../../icons/Logo";
import HamburgerMenu from "../../modules/HamburgerMenu/HamburgerMenu";

import styles from "./Header.module.css";
import FooterNavList from "../../modules/FooterNavList/FooterNavList";

export default function Header() {
  const isMinWidth768 = useMediaQuery("(max-width: 768px)");

  return (
    <header className={styles.header}>
      <Logo width={"107.111"} height={"52"} />
      {!isMinWidth768 && <FooterNavList />}
      {!isMinWidth768 && (
        <div className={styles.btn_group}>
          <button className={styles.log_btn}>вход</button>
          <button className={styles.reg_btn}>регистрация</button>
        </div>
      )}
      {isMinWidth768 && <HamburgerMenu />}
    </header>
  );
}
