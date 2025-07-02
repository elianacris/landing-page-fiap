"use client";
import { useState } from "react";
import styles from "./Courses.module.scss";

const categorias = {
  tecnologia: [
    "Big Data Ecosystem",
    "Creating Dashboards for BI",
    "Big Data Science - Machine Learning & Data Mining",
    "Storytelling",
  ],
  inovacao: ["UX", "UX Writing", "Storytelling para Negócios", "Chatbots"],
  negocios: [
    "Agile Culture",
    "DPO Data Protection Officer",
    "IT Business Partner",
    "Perícia Forense Computacional",
  ],
} as const;

type CategoriaKey = keyof typeof categorias;

export default function Courses() {
  const [categoriaAtiva, setCategoriaAtiva] =
    useState<CategoriaKey>("tecnologia");
  const [cursoHover, setCursoHover] = useState<number | null>(null);

  const cursos = categorias[categoriaAtiva];
  const progresso =
    cursoHover !== null && cursos.length > 1
      ? ((cursoHover + 1) / cursos.length) * 100
      : cursoHover === 0
      ? 100 / cursos.length
      : 0;

  return (
    <section className={styles.cursosSection}>
      <div className={styles.header}>
        <h1>Cursos</h1>
        <p>Cursos de Curta Duração</p>
      </div>

      <div className={styles.tabs}>
        {Object.keys(categorias).map((categoria) => (
          <button
            key={categoria}
            className={`${styles.tabButton} ${
              categoriaAtiva === categoria ? styles.active : ""
            }`}
            onClick={() => setCategoriaAtiva(categoria as CategoriaKey)}
          >
            {categoria.toUpperCase()}
            {categoriaAtiva === categoria && (
              <span className={styles.underline} />
            )}
          </button>
        ))}
      </div>

      <div className={styles.listaCursos}>
        {cursos.map((curso, idx) => (
          <div
            key={idx}
            className={`${styles.cursoItem} ${
              cursoHover === idx ? styles.cursoItemHover : ""
            }`}
            onMouseEnter={() => setCursoHover(idx)}
            onMouseLeave={() => setCursoHover(null)}
          >
            <span className={styles.cursoNome}>{curso}</span>
            <span className={styles.cursoTipo}>REMOTO • LIVE</span>
          </div>
        ))}
      </div>

      <div className={styles.progressBar} style={{ width: `${progresso}%` }} />
    </section>
  );
}
