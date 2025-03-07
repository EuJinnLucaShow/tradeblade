import PropTypes from "prop-types";
import { useRef } from "react";
import AccordionArrowDown from "../../icons/AccordionArrowDown";
import AccordionArrowUp from "../../icons/AccordionArrowUp";
import styles from "./Accordion.module.css";

export default function Accordion({ children, title, isOpen, onClick }) {
  const contentRef = useRef();

  return (
    <div className={styles.wrapper}>
      <button
        onClick={onClick}
        className={`${styles.button} ${isOpen ? styles.open : styles.close}`}
      >
        <span
          className={`${styles.question} ${
            isOpen ? styles.open : styles.close
          }`}
        >
          {title}
        </span>
        {isOpen ? <AccordionArrowUp /> : <AccordionArrowDown />}
      </button>

      <div
        ref={contentRef}
        className={styles.answer}
        style={{
          height:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "0px",
          transition: "height 0.3s ease-out",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};
