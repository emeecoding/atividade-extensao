import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./QuemSomos.module.scss";

export default function QuemSomos() {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className={styles.quemSomos}>
      <h2> Quem Somos</h2>
      <div className={styles.card} ref={cardRef}>
        <img
          src="/images/emerson.jpg" // substitua pelo caminho da sua foto
          alt="Foto de Emerson Santos"
          className={styles.foto}
        />
        <div className={styles.texto}>
          <h3>Emerson Santos</h3>
          <p>
            Este projeto foi idealizado por Emerson Santos como parte de uma
            atividade extensionista do curso de Engenharia de Software, com foco
            no Objetivo de Desenvolvimento Sustentável 10: Redução das
            Desigualdades. A proposta busca promover inclusão digital e ampliar
            o acesso a tecnologias educacionais em escolas públicas de
            comunidades vulneráveis, oferecendo conteúdos gratuitos, acessíveis
            e adaptados à realidade dos estudantes. Por meio de uma plataforma
            leve, responsiva e pensada para funcionar em dispositivos simples, o
            projeto conecta jovens ao conhecimento, estimula a autonomia no
            aprendizado e fortalece o protagonismo estudantil. Além disso, a
            iniciativa valoriza a escuta ativa dos alunos, incorporando
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
}
