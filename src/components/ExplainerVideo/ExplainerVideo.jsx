import styles from "./ExplainerVideo.module.scss";
import videoAtividade from "../../assets/videos/video-atividade-extensionistas.mp4";

const ExplainerVideo = () => {
  return (
    <section className={styles.explainerVideo}>
      <div className={styles.videoContent}>
        <h2 className={styles.videoTitle}>Conheça nossa plataforma</h2>
        <p className={styles.videoDescription}>
          Assista ao vídeo e entenda como esta iniciativa busca reduzir
          desigualdades por meio da inclusão digital. Criamos um espaço
          acessível, informativo e transformador para estudantes de escolas
          públicas em áreas vulneráveis.
        </p>
        <div className={styles.videoWrapper}>
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
