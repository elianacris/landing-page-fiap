"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./TextBox.module.scss";

gsap.registerPlugin(ScrollTrigger);

function TextBox() {
  const frase1Ref = useRef<HTMLDivElement>(null);
  const frase2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el1 = frase1Ref.current;
    const el2 = frase2Ref.current;

    if (el1) {
      const width1 = el1.offsetWidth;
      gsap.to(el1, {
        x: -width1 / 2,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }
    if (el2) {
      const width2 = el2.offsetWidth;
      gsap.to(el2, {
        x: width2 / 2, 
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  return (
    <section className={styles.homeSection}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack} ref={frase1Ref}>
          <span>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. </span>
          <span>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. </span>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack} ref={frase2Ref}>
          <span>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. </span>
          <span>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. </span>
        </div>
      </div>
    </section>
  );
}
export default TextBox;
