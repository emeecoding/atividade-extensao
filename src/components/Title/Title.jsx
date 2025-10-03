import styles from "../../components/Title/Title.module.scss";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ children, level = 1, className = "" }) => {
  const Tag = `h${level}`;
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const el = titleRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Tag ref={titleRef} className={`${styles.title} ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;
