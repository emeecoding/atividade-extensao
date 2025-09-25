import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./GaleriaIlustrada.module.scss";

import aluno1 from "../../assets/images/student1.jpg";
import aluno2 from "../../assets/images/student1.jpg";
import aluno3 from "../../assets/images/student1.jpg";
import aluno4 from "../../assets/images/student1.jpg";

gsap.registerPlugin(ScrollTrigger);

const alunos = [
  { nome: "Luna", imagem: aluno1 },
  { nome: "Ravi", imagem: aluno2 },
  { nome: "Sofia", imagem: aluno3 },
  { nome: "Davi", imagem: aluno4 },
];

export default function GaleriaIlustrada() {
  const pinRef = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: "+=500",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <section className={styles.galeriaIlustrada} ref={pinRef}>
      <h2>👩‍🎓 Alunos em Destaque</h2>
      <div className={styles.galeria}>
        {alunos.map((aluno, index) => (
          <div key={index} className={styles.card}>
            <img src={aluno.imagem} alt={`Foto de ${aluno.nome}`} />
            <p>{aluno.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
