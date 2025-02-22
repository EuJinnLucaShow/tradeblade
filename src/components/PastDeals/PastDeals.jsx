import Carousel from "../Carousel/Carousel";
import { deals } from "../../data/dealsData";
import styles from "./PastDeals.module.css";

export default function PastDeals() {
  return (
    <div className={styles.wrapper} id="past_deals">
      <div className={styles.wrapper_title}>
        <h2 className={styles.title}>Прошедшие сделки</h2>
        <div className={styles.wrapper_status}>
          <div className={styles.status}></div>
          <span className={styles.text}>Онлайн</span>
        </div>
      </div>
      <div className={styles.wrap_carousel}>
        <Carousel deals={deals} />
      </div>
    </div>
  );
}
