import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../components/About/About.module.scss";
import emersonPhoto from "../../assets/images/emerson.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer} ref={containerRef}>
        {/* Lado esquerdo: Foto e dados */}
        <div className={styles.profile}>
          <img
            src={emersonPhoto}
            alt="Emerson Santos"
            className={styles.photo}
          />
          <h2 className={styles.name}>Emerson Santos</h2>
          <p className={styles.location}>Moreno - Pernambuco</p>
        </div>

        {/* Linha divisória */}
        <div className={styles.divider}></div>

        {/* Lado direito: Texto */}
        <div className={styles.description}>
          <h3 className={styles.title}>Idealizador do Projeto</h3>
          <p>
            Este projeto foi idealizado por <span>Emerson Santos</span> como
            parte de uma atividade extensionista do curso de Engenharia de
            Software, com foco no Objetivo de Desenvolvimento Sustentável 10:
            Redução das Desigualdades. A proposta busca promover inclusão
            digital e ampliar o acesso a tecnologias educacionais em escolas
            públicas de comunidades vulneráveis, oferecendo conteúdos gratuitos,
            acessíveis e adaptados à realidade dos estudantes. Por meio de uma
            plataforma leve, responsiva e pensada para funcionar em dispositivos
            simples, o projeto conecta jovens ao conhecimento, estimula a
            autonomia no aprendizado e fortalece o protagonismo estudantil. Além
            disso, a iniciativa valoriza a escuta ativa dos alunos, incorporando
            feedbacks reais e simulados para validar a experiência de uso e
            garantir que cada funcionalidade tenha propósito social. Com base em
            metodologias de design centrado no usuário, desenvolvimento ágil e
            indicadores de impacto, o projeto se posiciona como uma ponte entre
            tecnologia e transformação social. A longo prazo, o objetivo é
            expandir o alcance da plataforma, integrar novas escolas,
            diversificar os cursos oferecidos e estabelecer parcerias com
            instituições públicas e privadas que compartilhem o compromisso com
            a equidade educacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
