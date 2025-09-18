import styles from "../../components/HowItWorks/HowItWorks.module.scss";
export function HowItWorks(props) {
  return (
    <section className={styles["how-section"]}>
      <div className={styles["how-steps"]}>
        <div className={styles["step"]}>
          <img
            className={styles["step-icon"]}
            src={props.stepIcon}
            alt="Escolha um curso"
          />
          <h3 className={styles["step-title"]}>{props.stepTitle}</h3>
          <p className={styles["step-text"]}>{props.stepText}</p>
        </div>
      </div>
    </section>
  );
}
