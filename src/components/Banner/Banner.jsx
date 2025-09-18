import styles from "../../components/Banner/Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transformar realidades por meio da educação digital
          </h1>
          <p className={styles.text}>
            Em um mundo cada vez mais conectado, o acesso à informação não pode
            ser privilégio de poucos. Esta plataforma nasce com o propósito de
            democratizar o conhecimento, oferecendo aos estudantes de escolas
            públicas em áreas vulneráveis as ferramentas necessárias para
            explorar seu potencial, conquistar oportunidades e construir um
            futuro mais justo. Aqui, inclusão digital é mais que acesso — é
            transformação.
          </p>
          <a href="#cursos" className={styles.btn}>
            Começar agora
          </a>
        </div>
    </section>
  );
};

export default Banner;
