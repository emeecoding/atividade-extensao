import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../Comments/Comments.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function Comment({ name, location, text, time }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    if (el) {
      // Define estado inicial
      gsap.set(el, { scale: 0.5, opacity: 0 });

      // Cria animação com ScrollTrigger embutido
      const animation = gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // entra e sai suavemente
        },
      });

      // Cleanup ao desmontar
      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }
  }, []);

  return (
    <section className={styles["section-comment"]}>
      <div className={styles.commentCard} ref={cardRef}>
        <div>
          <h3 className={styles["student-name"]}>{name}</h3>
          <span className={styles["student-location"]}>{location}</span>
        </div>
        <p className={styles["comment-text"]}>{text}</p>
        <span className={styles.time}>{time}</span>
      </div>
    </section>
  );
}
