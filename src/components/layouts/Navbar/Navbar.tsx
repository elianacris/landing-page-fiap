"use client"
import { useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";

function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar} ref={navbarRef}>
      <div className={styles.container}>
        <Image
          src="/logo-fiap.svg"
          alt="Logo FIAP"
          className={styles.logoImg}
          width={48}
          height={16}
        />
      </div>
      <div className={styles.progressBar} ref={progressRef} />
    </nav>
  );
}
export default Navbar;
