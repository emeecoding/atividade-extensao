import styles from "../../components/Footer/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <h3>Projeto Extensionista</h3>
        <p>
          Plataforma educacional gratuita voltada para inclusão digital de
          estudantes da rede pública.
        </p>
        <ul className={styles["footer-links"]}>
          <li>
            <a href="#impacto">Impacto</a>
          </li>
          <li>
            <a href="#cursos">Cursos</a>
          </li>
          <li>
            <a href="#interesse">Formulário</a>
          </li>
        </ul>
        <p className={styles["footer-copy"]}>
          © {new Date().getFullYear()} emecoding. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
