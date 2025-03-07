import { useState } from "react";
import Accordion from "../../modules/Accordion/Accordion";
import styles from "./Faq.module.css";

import { faqItems } from "../../data/faqItems";

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleItemClick = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.wrapper} id="faq">
      <div className={styles.content}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.question_wrapper}>
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              title={item.question}
              isOpen={openAccordion === item.id}
              onClick={() => handleItemClick(item.id)}
            >
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
