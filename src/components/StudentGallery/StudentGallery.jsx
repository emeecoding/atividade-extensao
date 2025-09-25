import styles from "../../components/StudentGallery/StudentGallery.module.scss";
export function StudentGallery(props) {
  return (
    <section className={styles["student-gallery"]}>
      <img
        className={styles["student-photo"]}
        src={props.image}
        alt="Foto do aluno"
      />
      <div className={styles["text-photo"]}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          doloribus id dolorum veniam eius aperiam commodi. Temporibus mollitia
          corporis, accusamus exercitationem alias quaerat, consequuntur et
          voluptates ullam labore sunt veniam.
        </p>
      </div>
    </section>
  );
}
