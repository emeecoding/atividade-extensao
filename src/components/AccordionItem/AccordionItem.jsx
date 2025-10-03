import { useState } from "react";
import styles from "../../components/AccordionItem/AccordionItem.module.scss";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const accordion = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      accordion.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: accordion.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  return (
    <div ref={accordion} className={styles.accordion}>
      <button className={styles.accordionButton} onClick={toggleAccordion}>
        {question}{" "}
        <span className={styles["toggle-icon"]}>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
