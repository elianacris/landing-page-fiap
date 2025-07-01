"use client"
import Navbar from "../../components/layouts/Navbar/Navbar";
import Header from "../../components/layouts/Header/Header";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HomePage.module.scss";
import Divider from "../../components/Divider/Divider";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const frase1Ref = useRef<HTMLDivElement>(null);
  const frase2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Frase 1: move continuamente para a direita
    gsap.to(frase1Ref.current, {
      x: 120,
      duration: 4,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 240 - 120),
      },
      scrollTrigger: {
        trigger: frase1Ref.current,
        start: "top 80%",
      },
    });
    // Frase 2: move continuamente para a esquerda
    gsap.to(frase2Ref.current, {
      x: -120,
      duration: 4,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => (parseFloat(x) % 240) - 120),
      },
      scrollTrigger: {
        trigger: frase2Ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <section className={styles.homeSection}>
        <div ref={frase1Ref} className={styles.fraseAnimada}>
          CURSOS E IMERSÕES, UMA NOVA CULTURA DE MERCADO.
        </div>
        <Divider />
        <div ref={frase2Ref} className={styles.fraseAnimada}>
          TECNOLOGIA, INOVAÇÃO E NEGOCIOS. PRESENTE E FUTURO
        </div>
        <Divider />
      </section>
    </div>
  );
}
export default HomePage;
