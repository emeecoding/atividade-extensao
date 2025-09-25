import styles from "../Home/Home.module.scss";

import CountUp from "react-countup";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/Banner/Banner";
import { Comment } from "../../components/Comments/Comments";
import { Impact } from "../../components/Impact/Impact";
import { About } from "../../components/About/About";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import ExplainerVideo from "../../components/ExplainerVideo/ExplainerVideo";
import { StudentGallery } from "../../components/StudentGallery/StudentGallery";

import student1 from "../../assets/images/student1.jpg";
import student2 from "../../assets/images/student2.jpg";
import student3 from "../../assets/images/student3.jpg";
import student4 from "../../assets/images/student4.jpg";
import student5 from "../../assets/images/student5.jpg";
import student6 from "../../assets/images/student6.jpg";
import studentIcon from "../../assets/images/icon-student.png";
import livro from "../../assets/images/livro.png";
import escola from "../../assets/images/escola.png";
import balaoDeFala from "../../assets/images/balao-de-fala.png";
import localizacaoImage from "../../assets/images/localizacoes.png";
import batePapo from "../../assets/images/bate-papo.png";
import cursoImage from "../../assets/images/curso.png";
import AlvoImage from "../../assets/images/alvo-de-dardos.png";
import smartphoneImage from "../../assets/images/smartphone-and-laptop.png";
import alunosGallery from "../../assets/images/alunos.webp";
import FormularioInteresse from "../../components/FormularioInteresse/FormularioInteresse";
import Footer from "../../components/Footer/Footer";
import GaleriaIlustrada from "../../components/GaleriaIlustrada/GaleriaIlustrada";
import QuemSomos from "../../components/QuemSomos/QuemSomos";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionTitleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      sectionTitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main>
      <a
        href="https://wa.me/5581999999999"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles["icon-bate-papo-fixed"]}
          src={batePapo}
          alt="WhatsApp"
        />
      </a>

      <section className={styles["banner-section"]}>
        <Banner />
      </section>
      <section className={styles["digital-inclusion"]}>
        <ExplainerVideo />
      </section>
      <section className={styles["impact-section-home"]}>
        <h2 ref={sectionTitleRef}>O que Estamos Construindo</h2>
        <div className={styles["container-impact"]}>
          <Impact
            imageImpact={studentIcon}
            number="+300"
            emphasis="Estudantes Impactados"
            caption="Mais de 300 jovens conectados ao conhecimento, rompendo barreiras sociais por meio da educação digital."
          />
          <Impact
            imageImpact={livro}
            number="+20"
            emphasis="Cursos Gratuitos"
            caption="Conteúdos acessíveis e transformadores, promovendo autonomia e aprendizado sem custo."
          />
          <Impact
            imageImpact={escola}
            number="+10"
            emphasis="Escolas Participantes"
            caption="Instituições públicas engajadas na construção de um futuro mais justo e conectado."
          />
          <Impact
            imageImpact={balaoDeFala}
            number="+200"
            emphasis="Feedbacks Recebidos"
            caption="Depoimentos que refletem o impacto real da plataforma na vida dos estudantes."
          />
          <Impact
            imageImpact={localizacaoImage}
            number="+5.000"
            emphasis="Acessos Registrados"
            caption="Milhares de acessos que mostram o alcance e o interesse por uma educação mais inclusiva."
          />
        </div>
      </section>
      <section className={styles["comments-section"]}>
        <h3>O que os alunos estão dizendo</h3>
        <div className={styles["container-comments"]}>
          <Comment
            image={student1}
            name="Ana Luiza"
            location="Recife, PE"
            text="Me sinto incluída. Aqui eu aprendo no meu ritmo, sem pressão, e com conteúdo que realmente importa"
            time="12:30"
          />
          <Comment
            image={student6}
            name="Carlos Henrique"
            location="Boa viagem, PE"
            text="Essa plataforma me mostrou que educação de qualidade pode ser acessível. Já fiz dois cursos e quero mais!"
            time="06:01"
          />
          <Comment
            image={student2}
            name="Gabriel"
            location="Casa Amarela, PE"
            text="Com essa plataforma, descobri que gosto de design gráfico. Já estou pensando em seguir carreira!"
            time="13:47"
          />
          <Comment
            image={student3}
            name="Ana Luiza"
            location="Cabo de Santo Agostinho, PE"
            text="A plataforma é leve, funciona bem no meu celular simples. Isso faz toda a diferença pra quem não tem computador."
            time="17:00"
          />
          <Comment
            image={student4}
            name="Lais"
            location="Igarassu, PE"
            text="Achei que não ia conseguir acompanhar, mas os vídeos são bem explicadinhos. Já tô fazendo meu segundo curso!"
            time="22:30"
          />
          <Comment
            image={student5}
            name="Vitória"
            location="Recife, PE"
            text="A plataforma é leve, funciona até no meu celular antigo. Isso faz toda a diferença pra mim."
            time="08:00"
          />
        </div>
      </section>

      <section className={styles["how-it-works-section"]}>
        <div className={styles["title-wrapper"]}>
          <h4 className={styles["how-title"]}>Como Funciona</h4>
        </div>
        <div className={styles["how-it-works-container"]}>
          <HowItWorks
            stepIcon={cursoImage}
            stepTitle="Escolha um curso gratuito"
            stepText="Explore os conteúdos disponíveis e selecione o que mais combina com você."
          />
          <HowItWorks
            stepIcon={AlvoImage}
            stepTitle="Aprenda no seu ritmo"
            stepText="Sem pressão, com autonomia e flexibilidade para aprender no seu tempo."
          />
          <HowItWorks
            stepIcon={smartphoneImage}
            stepTitle="Acesse pelo celular ou computador"
            stepText="Estude de onde quiser, sem precisar de equipamentos avançados."
          />
        </div>
      </section>
      <QuemSomos />
      <section></section>
      <section className={styles["section-interesse"]}>
        <FormularioInteresse />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default Home;
