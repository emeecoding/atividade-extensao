import styles from "../../components/About/About.module.scss";
export function About() {
  return (
    <section className={styles["about-section"]}>
      <h3 className={styles["about-title"]}>Quem Somos</h3>
      <p className={styles["about-text"]}>
        Este projeto foi idealizado por Emerson Santos como parte de uma
        atividade extensionista do curso de Engenharia de Software, com foco no
        Objetivo de Desenvolvimento Sustentável 10: Redução das Desigualdades. A
        proposta busca promover inclusão digital e ampliar o acesso a
        tecnologias educacionais em escolas públicas de comunidades vulneráveis,
        oferecendo conteúdos gratuitos, acessíveis e adaptados à realidade dos
        estudantes. Por meio de uma plataforma leve, responsiva e pensada para
        funcionar em dispositivos simples, o projeto conecta jovens ao
        conhecimento, estimula a autonomia no aprendizado e fortalece o
        protagonismo estudantil. Além disso, a iniciativa valoriza a escuta
        ativa dos alunos, incorporando feedbacks reais e simulados para validar
        a experiência de uso e garantir que cada funcionalidade tenha propósito
        social. Com base em metodologias de design centrado no usuário,
        desenvolvimento ágil e indicadores de impacto, o projeto se posiciona
        como uma ponte entre tecnologia e transformação social. A longo prazo, o
        objetivo é expandir o alcance da plataforma, integrar novas escolas,
        diversificar os cursos oferecidos e estabelecer parcerias com
        instituições públicas e privadas que compartilhem o compromisso com a
        equidade educacional.
      </p>
    </section>
  );
}
