"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ImageContainer.module.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ImageContainer() {
  const frase1Ref = useRef<HTMLDivElement>(null);
  const frase2Ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );
    }
    if (frase1Ref.current) {
      const width1 = frase1Ref.current.offsetWidth;
      gsap.to(frase1Ref.current, {
        x: -width1 / 2,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }
    if (frase2Ref.current) {
      const width2 = frase2Ref.current.offsetWidth;
      gsap.to(frase2Ref.current, {
        x: width2 / 2,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div ref={imageRef} className={styles.imageFadeWrapper}>
          <Image
            src="/intro.png"
            alt="Imagem de introdução"
            className={styles.image}
            quality={100}
            width={1495}
            height={8004}
          />
          <section className={styles.outlinedSectionRodape}>
            <div className={styles.marqueeWrapper} ref={frase1Ref}>
              <span className={styles.outlinedText}>SKILLS • CONHECIMENTO</span>
              <span className={styles.outlinedText}>SKILLS • CONHECIMENTO</span>
            </div>
            <div className={styles.marqueeWrapper} ref={frase2Ref}>
              <span className={styles.outlinedText}>MUITO ALÉM DOS TUTORIAIS</span>
              <span className={styles.outlinedText}>MUITO ALÉM DOS TUTORIAIS</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ImageContainer;
