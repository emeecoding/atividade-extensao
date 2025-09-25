import styles from "../../components/Impact/Impact.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

export function Impact(props) {
  const impactCard = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: impactCard.current,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      impactCard.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div className={styles.impactSection}>
      <div
        ref={(el) => {
          impactCard.current = el;
          ref(el); // conecta GSAP e IntersectionObserver
        }}
        className={`${styles["impact-card"]} impact-card`}
      >
        <div className={styles["impact-icon"]}>
          <img
            className={styles["impact-image"]}
            src={props.imageImpact}
            alt=""
          />
        </div>
        <h1 className={styles.number}>
          {inView ? (
            <CountUp end={props.number} duration={4} prefix="+" separator="." />
          ) : (
            "+0"
          )}
        </h1>
        <h2 className={styles["impact-emphasis"]}>{props.emphasis}</h2>
        <p className={styles["title-impact"]}>{props.caption}</p>
      </div>
    </div>
  );
}
