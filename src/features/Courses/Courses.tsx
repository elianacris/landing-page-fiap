"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import styles from "./Courses.module.scss";

enum CategoryTitle {
  technology = "Tecnologia",
  innovation = "Inovação",
  business = "Negócios",
}

const categories = {
  technology: [
    { name: "Big Data Ecosystem", typeOfClass: "REMOTO • LIVE" },
    { name: "Creating Dashboards for BI", typeOfClass: "REMOTO • LIVE" },
    {
      name: "Big Data Science - Machine Learning & Data Mining",
      typeOfClass: "REMOTO • LIVE • MULTIMÍDIA",
    },
    { name: "Storytelling", typeOfClass: "REMOTO • LIVE" },
  ],
  innovation: [
    { name: "UX", typeOfClass: "DIGITAL" },
    { name: "UX Writing", typeOfClass: "LIVE" },
    { name: "Storytelling para Negócios", typeOfClass: "LIVE" },
    { name: "Chatbots", typeOfClass: "LIVE" },
  ],
  business: [
    { name: "Agile Culture", typeOfClass: "DIGITAL" },
    { name: "DPO Data Protection Officer", typeOfClass: "LIVE" },
    { name: "IT Business Partner", typeOfClass: "LIVE" },
    { name: "Perícia Forense Computacional", typeOfClass: "LIVE" },
  ],
} as const;

type CategoryKey = keyof typeof categories;

export default function Courses() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("technology");
  const [hoverCategory, setHoverCategory] = useState<CategoryKey | null>(null);
  const [animatedCategory, setAnimatedCategory] =
    useState<CategoryKey>("technology");
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const categoryNames = Object.keys(categories) as CategoryKey[];
  const courses = categories[animatedCategory];
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const [openMobile, setOpenMobile] = useState<Record<CategoryKey, boolean>>({
    technology: false,
    innovation: false,
    business: false,
  });

  function animateListOut(onComplete: () => void) {
    const allRefs = [titleRef.current, ...itemRefs.current].filter(Boolean);
    if (!allRefs.length) return onComplete();
    // Fixar altura do container
    if (listRef.current) {
      setContainerHeight(listRef.current.offsetHeight);
    }
    setIsAnimating(true);
    gsap.to(allRefs, {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setIsAnimating(false);
        onComplete();
      },
    });
  }
  function animateListIn() {
    const allRefs = [titleRef.current, ...itemRefs.current].filter(Boolean);
    gsap.fromTo(
      allRefs,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          setIsAnimating(true);
        },
        onComplete: () => {
          setIsAnimating(false);
          setContainerHeight(null);
        },
      }
    );
  }

  function isDesktop() {
    if (typeof window === "undefined") return true;
    return window.innerWidth > 768;
  }

  function handleTabHover(cat: CategoryKey) {
    if (cat === animatedCategory) return;
    if (isDesktop()) {
      animateListOut(() => {
        setAnimatedCategory(cat);
        setTimeout(() => animateListIn(), 10);
      });
    } else {
      setAnimatedCategory(cat);
    }
    setHoverCategory(cat);
  }
  function handleTabsLeave() {
    setHoverCategory(null);
    if (isDesktop()) {
      animateListOut(() => {
        setAnimatedCategory(activeCategory);
        setTimeout(() => animateListIn(), 10);
      });
    } else {
      setAnimatedCategory(activeCategory);
    }
  }
  function handleTabClick(cat: CategoryKey) {
    setActiveCategory(cat);
    setHoverCategory(null);
  }
  function handleAccordionToggle(cat: CategoryKey) {
    setOpenMobile((prev) => ({ ...prev, [cat]: !prev[cat] }));
  }

  return (
    <section className={styles.coursesSection}>
      <div className={styles.coursesContainer + " " + styles.desktopOnly}>
        <div className={styles.headerTabsRow}>
          <div className={styles.header}>
            <h1>Cursos</h1>
            <p>Cursos de Curta Duração</p>
          </div>
          <div className={styles.tabs} onMouseLeave={handleTabsLeave}>
            {categoryNames.map((category) => {
              const isActive = hoverCategory
                ? hoverCategory === category
                : activeCategory === category;
              return (
                <div key={category} className={styles.tabWrapper}>
                  <div
                    className={`${styles.progressBarTab} ${
                      isActive ? styles.progressBarTabActive : ""
                    }`}
                  />
                  <button
                    className={`${styles.tabButton} ${
                      isActive ? styles.active : ""
                    }`}
                    onMouseEnter={() => handleTabHover(category)}
                    onClick={() => handleTabClick(category)}
                  >
                    {CategoryTitle[category]}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div
          ref={listRef}
          className={`${styles.listContainer} ${
            isAnimating ? styles.animatingList : ""
          }`}
          style={containerHeight ? { height: containerHeight + "px" } : {}}
        >
          <h2 className={styles.categoryTitle} ref={titleRef}>
            {CategoryTitle[animatedCategory]}
          </h2>
          <div className={styles.coursesList}>
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={
                  styles.courseItem +
                  (isAnimating ? " " + styles.animatingItem : "")
                }
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
              >
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseType}>{course.typeOfClass}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mobileOnly}>
        {categoryNames.map((cat) => (
          <div key={cat} className={styles.accordionItem}>
            <div className={styles.accordionHeader}>
              <h2 className={styles.categoryTitle}>{CategoryTitle[cat]}</h2>
              <button
                className={styles.accordionToggle}
                onClick={() => handleAccordionToggle(cat)}
                aria-label={openMobile[cat] ? "Close" : "Open"}
              >
                {openMobile[cat] ? "-" : "+"}
              </button>
            </div>
            {openMobile[cat] && (
              <div className={styles.coursesList}>
                {categories[cat].map((course, idx) => (
                  <div key={idx} className={styles.courseItem}>
                    <span className={styles.courseName}>{course.name}</span>
                    <span className={styles.courseType}>
                      {course.typeOfClass}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
