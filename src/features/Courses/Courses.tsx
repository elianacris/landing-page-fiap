"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import styles from "./Courses.module.scss";

const categorias = {
  tecnologia: [
    { name: "Big Data Ecosystem", typeOfClass: "REMOTO • LIVE" },
    { name: "Creating Dashboards for BI", typeOfClass: "REMOTO • LIVE" },
    {
      name: "Big Data Science - Machine Learning & Data Mining",
      typeOfClass: "REMOTO • LIVE • MULTIMÍDIA",
    },
    { name: "Storytelling", typeOfClass: "REMOTO • LIVE" },
  ],
  inovacao: [
    { name: "UX", typeOfClass: "DIGITAL" },
    { name: "UX Writing", typeOfClass: "LIVE" },
    { name: "Storytelling para Negócios", typeOfClass: "LIVE" },
    { name: "Chatbots", typeOfClass: "LIVE" },
  ],
  negocios: [
    { name: "Agile Culture", typeOfClass: "DIGITAL" },
    { name: "DPO Data Protection Officer", typeOfClass: "LIVE" },
    { name: "IT Business Partner", typeOfClass: "LIVE" },
    { name: "Perícia Forense Computacional", typeOfClass: "LIVE" },
  ],
} as const;

type CategoriaKey = keyof typeof categorias;

export default function Courses() {
  const [categoriaAtiva, setCategoriaAtiva] =
    useState<CategoriaKey>("tecnologia");
  const [categoriaHover, setCategoriaHover] = useState<CategoriaKey | null>(
    null
  );
  const [categoriaAnimada, setCategoriaAnimada] =
    useState<CategoriaKey>("tecnologia");
  const listaRef = useRef<HTMLDivElement>(null);
  const nomesCategorias = Object.keys(categorias) as CategoriaKey[];

  const cursos = categorias[categoriaAnimada];
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tituloRef = useRef<HTMLHeadingElement | null>(null);

  function animateListOut(onComplete: () => void) {
    const allRefs = [tituloRef.current, ...itemRefs.current].filter(Boolean);
    if (!allRefs.length) return onComplete();
    gsap.to(allRefs, {
      opacity: 0,
      y: 40,
      stagger: 0.07,
      duration: 0.35,
      onComplete,
    });
  }
  function animateListIn() {
    const allRefs = [tituloRef.current, ...itemRefs.current].filter(Boolean);
    gsap.fromTo(
      allRefs,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, stagger: 0.07, duration: 0.35 }
    );
  }

  function handleTabHover(cat: CategoriaKey) {
    if (cat === categoriaAnimada) return;
    animateListOut(() => {
      setCategoriaAnimada(cat);
      setTimeout(() => animateListIn(), 10);
    });
    setCategoriaHover(cat);
  }
  function handleTabsLeave() {
    setCategoriaHover(null);
    animateListOut(() => {
      setCategoriaAnimada(categoriaAtiva);
      setTimeout(() => animateListIn(), 10);
    });
  }
  function handleTabClick(cat: CategoriaKey) {
    setCategoriaAtiva(cat);
    setCategoriaHover(null);
  }

  return (
    <section className={styles.coursesSection}>
      <div className={styles.coursesContainer}>
        <div className={styles.header}>
          <h1>Cursos</h1>
          <p>Cursos de Curta Duração</p>
        </div>

        <div className={styles.tabs} onMouseLeave={handleTabsLeave}>
          {nomesCategorias.map((categoria) => {
            const isActive = categoriaHover
              ? categoriaHover === categoria
              : categoriaAtiva === categoria;
            return (
              <div key={categoria} className={styles.tabWrapper}>
                <div
                  className={`${styles.progressBarTab} ${
                    isActive ? styles.progressBarTabActive : ""
                  }`}
                />
                <button
                  className={`${styles.tabButton} ${
                    isActive ? styles.active : ""
                  }`}
                  onMouseEnter={() => handleTabHover(categoria)}
                  onClick={() => handleTabClick(categoria)}
                >
                  {categoria.toUpperCase()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div ref={listaRef} className={styles.containerList}>
        <h2 className={styles.categoriaTitulo} ref={tituloRef}>
          {categoriaAnimada.toUpperCase()}
        </h2>
        <div className={styles.listaCursos}>
          {cursos.map((curso, idx) => (
            <div
              key={idx}
              className={styles.cursoItem}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
            >
              <span className={styles.cursoNome}>{curso.name}</span>
              <span className={styles.cursoTipo}>{curso.typeOfClass}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
