"use client";
import { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const melhorRef = useRef(null);
  const tecnologiaRef = useRef(null);
  const sobreRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      melhorRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: melhorRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      tecnologiaRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: tecnologiaRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      sobreRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: {
          trigger: sobreRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <header className={styles.header}>
        <span ref={sobreRef} className={styles["sobre-bg"]}>
          SOBRE
        </span>
        <div className={styles.frase}>
          <span ref={melhorRef} className={styles.melhor}>
            A Melhor Faculdade
          </span>
          <span ref={tecnologiaRef} className={styles.tecnologia}>
            de Tecnologia
          </span>
      </div>
    </header>
  );
}
export default Header;
