import styles from "../Home/Home.module.scss";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/Banner/Banner";
import { Comment } from "../../components/Comments/Comments";
import { Impact } from "../../components/Impact/Impact";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";

import ExplainerVideo from "../../components/ExplainerVideo/ExplainerVideo";
import CourseCard from "../../components/CursoCard/CursoCard";
import smartphoneImage from "../../assets/images/smartphone-and-laptop.png";
import FormularioInteresse from "../../components/FormularioInteresse/FormularioInteresse";
import Footer from "../../components/Footer/Footer";
import studentIcon from "../../assets/images/icon-student.png";
import livro from "../../assets/images/livro.png";
import escola from "../../assets/images/escola.png";
import balaoDeFala from "../../assets/images/balao-de-fala.png";
import localizacaoImage from "../../assets/images/localizacoes.png";
import batePapo from "../../assets/images/balao-de-bate-papo.png";
import cursoImage from "../../assets/images/curso.png";
import AlvoImage from "../../assets/images/alvo-de-dardos.png";
import imageinformatica from "../../assets/images/informatica.png";
import imageProgramacao from "../../assets/images/introducao-programacao.png";
import imageDesign from "../../assets/images/design-grafico.png";
import imageHTML from "../../assets/images/html.png";
import imageCSS from "../../assets/images/css.png";
import imageJS from "../../assets/images/javascript.jpg";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import About from "../../components/About/About";
import Title from "../../components/Title/Title";
import CursoCard from "../../components/CursoCard/CursoCard";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionTitleRef = useRef(null);
  const titleComment = useRef(null);
  const titleCourses = useRef(null);
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
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      titleComment.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleComment.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      titleCourses.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleCourses.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
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

      <section id="home" className={styles["banner-section"]}>
        <Banner />
      </section>
      <section className={styles["digital-inclusion"]}>
        <ExplainerVideo />
      </section>
      <section className={styles["impact-section-home"]}>
        <Title level={1}>O que Estamos Construindo</Title>
        <div className={styles["container-impact"]}>
          <Impact
            imageImpact={studentIcon}
            number="+50"
            emphasis="Estudantes Impactados"
            caption="Mais de 300 jovens conectados ao conhecimento, rompendo barreiras sociais por meio da educação digital."
          />
          <Impact
            imageImpact={livro}
            number="+6"
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
            number="+8"
            emphasis="Feedbacks Recebidos"
            caption="Depoimentos que refletem o impacto real da plataforma na vida dos estudantes."
          />
          <Impact
            imageImpact={localizacaoImage}
            number="+350"
            emphasis="Acessos Registrados"
            caption="Milhares de acessos que mostram o alcance e o interesse por uma educação mais inclusiva."
          />
        </div>
      </section>
      <section className={styles["comments-section"]}>
        <Title level={2}>O que os alunos estão dizendo</Title>
        <div className={styles["container-comments"]}>
          <Comment
            name="Ana Luiza"
            location="Recife, PE"
            text="Me sinto incluída. Aqui eu aprendo no meu ritmo, sem pressão, e com conteúdo que realmente importa"
            time="12:30"
          />
          <Comment
            name="Thaylan"
            location="Boa viagem, PE"
            text="Essa plataforma me mostrou que educação de qualidade pode ser acessível. Já fiz dois cursos e quero mais!"
            time="06:01"
          />
          <Comment
            name="Gabriel"
            location="Casa Amarela, PE"
            text="Com essa plataforma, descobri que gosto de design gráfico. Já estou pensando em seguir carreira!"
            time="13:47"
          />
          <Comment
            name="Ana Luiza"
            location="Cabo de Santo Agostinho, PE"
            text="A plataforma é leve, funciona bem no meu celular simples. Isso faz toda a diferença pra quem não tem computador."
            time="17:00"
          />
          <Comment
            name="Otávio"
            location="Igarassu, PE"
            text="Achei que não ia conseguir acompanhar, mas os vídeos são bem explicadinhos. Já tô fazendo meu segundo curso!"
            time="22:30"
          />
          <Comment
            name="Pedro"
            location="Recife, PE"
            text="A plataforma é leve, funciona até no meu celular antigo. Isso faz toda a diferença pra mim."
            time="08:00"
          />
          <Comment
            name="Raíssa"
            location="Araripina, PE"
            text="Nunca imaginei que aprender programação pudesse ser tão acessível. Já estou fazendo meu segundo curso!"
            time="15:05"
          />
        </div>
      </section>
      <section className={styles["how-it-works-section"]}>
        <Title level={3}>Como Funciona</Title>
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
      <section id="courses" className={styles["courses-section"]}>
        <Title level={4}>Cursos Disponíveis</Title>
        <div id="course-1" className={styles["courses-container"]}>
          <CursoCard
            image={imageProgramacao}
            title="Introdução à Programação"
            description="Aprenda os fundamentos da lógica de programação com exercícios práticos e vídeos explicativos."
            link="https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV"
          />
          <CursoCard
            image={imageDesign}
            title="Design Gráfico com Canva"
            description="Descubra como criar artes incríveis usando o Canva, mesmo sem experiência prévia."
            link="https://www.youtube.com/watch?v=zFeTVoix4-U&list=PLlSoD8PAohqREIhBkSXFGE_Uo2qVGMuL_"
          />
          <CursoCard
            image={imageinformatica}
            title="Informática Básica"
            description="Aprenda a usar o computador, navegar na internet e utilizar ferramentas essenciais para o dia a dia."
            link="https://www.youtube.com/watch?v=9fNHAD7ZDL4&list=PL-QAz5R5Rlm7wn20xLTIr84gbS2XkzqEZ"
          />
          <CursoCard
            image={imageHTML}
            title="Curso de HTML"
            description="Aprenda a estruturar páginas web com HTML, criando conteúdos acessíveis e organizados."
            link="https://www.youtube.com/watch?v=Fhy-5CtVkiM"
          />
          <CursoCard
            image={imageCSS}
            title="Curso de CSS"
            description="Descubra como estilizar suas páginas com cores, fontes e layouts modernos usando CSS."
            link="https://www.youtube.com/watch?v=HtVRRHoASes&list=PL2Fdisxwzt_f5C7Mv0kg1EAHhy2VJLf1c"
          />
          <CursoCard
            image={imageJS}
            title="Curso de JavaScript"
            description="Dê vida às suas páginas com interatividade e lógica usando JavaScript."
            link="https://www.youtube.com/watch?v=vEwPnjqWQ-g&list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw"
          />
        </div>
      </section>
      <section className={styles["section-accordion"]}>
        <Title level={5}>Perguntas Frequentes</Title>
        <div className={styles["container-accordion"]}>
          <AccordionItem
            question="O que são os ODS?"
            answer="São os Objetivos de Desenvolvimento Sustentável definidos pela ONU para promover um mundo mais justo, inclusivo e sustentável até 2030."
          />
          <AccordionItem
            question="Qual o objetivo deste projeto?"
            answer="Conectar jovens à educação digital gratuita, promovendo inclusão e autonomia por meio de cursos acessíveis."
          />
          <AccordionItem
            question="Preciso pagar para usar?"
            answer="Não! Todos os cursos e conteúdos são gratuitos e pensados para serem acessíveis a todos."
          />
          <AccordionItem
            question="Quais cursos estão disponíveis?"
            answer="Temos cursos de Programação, Design Gráfico, Informática Básica, HTML, CSS e JavaScript."
          />
          <AccordionItem
            question="Preciso de computador para estudar?"
            answer="Não! A plataforma funciona bem em celulares simples, garantindo acesso mesmo sem computador."
          />
        </div>
      </section>
      <section id="about" className={styles["about-me"]}>
        <About />
      </section>

      <section id="contact" className={styles["section-interesse"]}>
        <FormularioInteresse />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default Home;
