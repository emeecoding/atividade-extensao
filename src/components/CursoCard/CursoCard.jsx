import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../components/CursoCard/CursoCard.module.scss";

gsap.registerPlugin(ScrollTrigger);

function CursoCard({ image, title, description, link }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className={styles.card} ref={cardRef}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Acessar Curso
      </a>
    </div>
  );
}

export default CursoCard;
