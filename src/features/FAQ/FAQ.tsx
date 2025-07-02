"use client";
import styles from "./FAQ.module.scss";
import { useState } from "react";

const faqData = [
  {
    pergunta: "QUANDO POSSO ME MATRICULAR?",
    resposta:
      "Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.",
  },
  {
    pergunta: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
    resposta:
      "Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.",
  },
  {
    pergunta: "QUAIS OS PRÉ-REQUISITOS?",
    resposta:
      "Cada curso tem seus pré-requisitos descritos na página. O ideal é que você tenha familiaridade com o tema proposto.",
  },
  {
    pergunta: "QUAL A DURAÇÃO DOS CURSOS?",
    resposta: "De 6 a 12 horas.",
  },
  {
    pergunta: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
    resposta:
      "Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP. Leve apenas o essencial.",
  },
  {
    pergunta: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
    resposta:
      "Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá o certificado digital.",
  },
];

function FAQ() {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <h1>FAQ</h1>
        <p>Dúvidas Frequentes</p>
      </div>

      <div className={styles.grid}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              ativo === index ? styles.ativo : ""
            }`}
            onMouseEnter={() => setAtivo(index)}
            onMouseLeave={() => setAtivo(null)}
          >
            <div className={styles.progress} />
            <h3>{item.pergunta}</h3>
            {ativo === index && <p>{item.resposta}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
export default FAQ;
