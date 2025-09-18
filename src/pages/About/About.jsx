import styles from "../../pages/About/About.module.scss";

function About() {
  return (
    <>
      <section className={styles.about}>
        <h2>Sobre o Conecta Futuro</h2>
        <div className={styles.textAbout}>
          <p>
            O projeto Conecta Futuro nasce como uma iniciativa extensionista
            voltada à promoção da inclusão educacional e digital entre jovens de
            escolas públicas em comunidades vulneráveis. Através da oferta de
            cursos gratuitos, mentorias e conteúdos interativos, buscamos
            ampliar horizontes e criar pontes entre o conhecimento acadêmico e
            as oportunidades reais de desenvolvimento pessoal e profissional.
            Esta ação extensionista tem como base o compromisso com a ODS 10 da
            ONU — Redução das Desigualdades, e se alinha ao papel social da
            universidade de atuar como agente transformador. Ao conectar
            estudantes, educadores e profissionais voluntários, o projeto
            promove não apenas o acesso à informação, mas também o
            fortalecimento da autoestima, da autonomia e da cidadania. Mais do
            que ensinar, o Conecta Futuro escuta, acolhe e transforma. Porque
            acreditamos que educar é conectar. Conectar é transformar.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
