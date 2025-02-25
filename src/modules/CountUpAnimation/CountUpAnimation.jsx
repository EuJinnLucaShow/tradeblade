import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import styles from "./CountUpAnimation.module.css";

export default function CountUpAnimation({ targetValue, pro_centum }) {
  const [count, setCount] = useState(0);
  const duration = 4000;
  const stepsCount = 60;

  const step = Math.ceil(targetValue / stepsCount);
  const intervalTime = duration / stepsCount;

  useEffect(() => {
    let startValue = 0;

    const counter = setInterval(() => {
      startValue += step;
      setCount(() => (startValue >= targetValue ? targetValue : startValue));

      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, intervalTime);

    return () => {
      clearInterval(counter);
    };
  }, [intervalTime, step, targetValue]);

  return (
    <span className={styles.value_stat}>
      {count}
      {pro_centum}
    </span>
  );
}

CountUpAnimation.propTypes = {
  targetValue: PropTypes.string.isRequired,
  pro_centum: PropTypes.string.isRequired,
};
