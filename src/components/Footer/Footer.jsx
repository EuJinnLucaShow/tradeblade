import Logo from "../../icons/Logo";
import FooterNavList from "../../modules/FooterNavList/FooterNavList";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.nav_wrapper}>
        <div className={styles.title_nav}>Быстрая навигация</div>
        <FooterNavList />
      </div>
      <div className={styles.logo_wrapper}>
        <Logo width={"165"} height={"80.103"} />
        <span className={styles.copyright}>
          © 2022 TradeBlade. All rights reserved
        </span>
      </div>
    </footer>
  );
}
