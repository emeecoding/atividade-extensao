import styles from "../Comments/Comments.module.scss";

export function Comment(props) {
  return (
    <div className={styles.commentCard}>
      <img
        src={props.image}
        alt={`Foto de ${props.name}`}
        className={styles.profileImage}
      />
      <div>
        <h3 className={styles["student-name"]}>{props.name}</h3>
        <span className={styles["student-location"]}>{props.location}</span>
      </div>
      <p className={styles["comment-text"]}>{props.text}</p>
      <span className={styles.time}>{props.time}</span>
    </div>
  );
}
