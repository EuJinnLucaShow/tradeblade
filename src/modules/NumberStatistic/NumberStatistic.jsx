import styles from "./NumberStatistic.module.css";
import { statistics } from "../../data/numberStatistic";
import CountUpAnimation from "../CountUpAnimation/CountUpAnimation";
import { useEffect, useRef, useState } from "react";

export default function NumberStatistic() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <ul className={styles.list_stat}>
        {statistics.map((item) => (
          <li key={item.id} className={styles.item_stat}>
            <span className={styles.name_stat}>{item.name}</span>
            <CountUpAnimation
              isVisible={isVisible}
              targetValue={item.value}
              pro_centum={item.pro_centum || ""}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
