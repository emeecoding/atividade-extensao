import styles from "../../components/About/About.module.scss";
export function About() {
  return (
    <section className={styles["about-section"]}>
      <h3 className={styles["about-title"]}>Quem Somos</h3>
      <p className={styles["about-text"]}>
        Este projeto foi idealizado por <strong>Emerson Santos</strong> como
        parte de uma atividade extensionista do curso de Engenharia de Software,
        com foco no Objetivo de Desenvolvimento Sustentável 10: Redução das
        Desigualdades. A proposta busca promover inclusão digital e ampliar o
        acesso a tecnologias educacionais em escolas públicas de comunidades
        vulneráveis.
      </p>
    </section>
  );
}
