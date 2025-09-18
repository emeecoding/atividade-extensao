import styles from "../../components/Impact/Impact.module.scss";
export function Impact(props) {
  return (
    <div className={styles.impactSection}>
      <div className={styles["impact-card"]}>
        <div className={styles["impact-icon"]}>
          <img
            className={styles["impact-image"]}
            src={props.imageImpact}
            alt=""
          />
        </div>
        <h1 className={styles.number}>{props.number}</h1>
        <h2 className={styles["impact-emphasis"]}>{props.emphasis}</h2>
        <p className={styles["title-impact"]}>{props.caption}</p>
      </div>
    </div>
  );
}
