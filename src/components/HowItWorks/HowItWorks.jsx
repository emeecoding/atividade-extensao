import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../components/HowItWorks/HowItWorks.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks({ stepIcon, stepTitle, stepText }) {
  const stepRef = useRef(null);

  useEffect(() => {
    const el = stepRef.current;

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
          toggleActions: "play reverse play reverse",
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
    <section className={styles["how-section"]}>
      <div className={styles["how-steps"]}>
        <div className={styles["step"]} ref={stepRef}>
          <img
            className={styles["step-icon"]}
            src={stepIcon}
            alt="Escolha um curso"
          />
          <h3 className={styles["step-title"]}>{stepTitle}</h3>
          <p className={styles["step-text"]}>{stepText}</p>
        </div>
      </div>
    </section>
  );
}
