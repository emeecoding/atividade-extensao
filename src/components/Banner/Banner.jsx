import styles from "../../components/Banner/Banner.module.scss";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Banner = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonStart = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    tl.fromTo(
      textRef.current,
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
    tl.fromTo(
      buttonStart.current,
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.3)" },
      "-=0.3"
    );
  }, []);

  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          Transformar realidades por meio da educação digital
        </h1>
        <p ref={textRef} className={styles.text}>
          Em um mundo cada vez mais conectado, o acesso à informação não pode
          ser privilégio de poucos. Esta plataforma nasce com o propósito de
          democratizar o conhecimento, oferecendo aos estudantes de escolas
          públicas em áreas vulneráveis as ferramentas necessárias para explorar
          seu potencial, conquistar oportunidades e construir um futuro mais
          justo. Aqui, inclusão digital é mais que acesso — é transformação.
        </p>
        <a href="#courses" className={styles["button-start"]} ref={buttonStart}>
          Começar agora
        </a>
      </div>
    </section>
  );
};

export default Banner;
