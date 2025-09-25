import styles from "./ExplainerVideo.module.scss";
import videoAtividade from "../../assets/videos/video-atividade-extensionistas.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const ExplainerVideo = () => {
  const videoContentRef = useRef(null);
  const videoTitle = useRef(null);
  const videoDescription = useRef(null);
  const videoWrapper = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoContentRef.current,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
    });

    tl.fromTo(
      videoTitle.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      videoDescription.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      // "+=0.2"
    );

    tl.fromTo(
      videoWrapper.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      // "+=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.explainerVideo}>
      <div ref={videoContentRef} className={styles.videoContent}>
        <h2 ref={videoTitle} className={styles.videoTitle}>
          Conheça nossa plataforma
        </h2>
        <p ref={videoDescription} className={styles.videoDescription}>
          Assista ao vídeo e entenda como esta iniciativa busca reduzir
          desigualdades por meio da inclusão digital. Criamos um espaço
          acessível, informativo e transformador para estudantes de escolas
          públicas em áreas vulneráveis.
        </p>
        <div ref={videoWrapper} className={styles.videoWrapper}>
          <video className={styles.video} controls width="100%">
            <source src={videoAtividade} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideo;
