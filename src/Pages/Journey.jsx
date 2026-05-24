import Drop from "../Components/Drop";
import journeyWhite from "../assets/JourneyWhite.png";
import journeyBlack from "../assets/JourneyBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
import styles from "../GlobalUI/Journey.module.scss";

export default function Journey() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1700);
  }, []);

  /* =========================
      EDUCATION
  ========================== */

  const education = [
    {
      college:
        "University of Madras (DRBCCC Hindu College)",

      degree:
        "B.Sc. Computer Science with Data Science",

      cgpa: "8.5 CGPA",

      status: "Ongoing",

      year: "2023 - Present",
    },

    {
      college: "IIT Madras",

      degree:
        "BS Degree in Data Science and Applications",

      cgpa: "Pursuing",

      status: "Ongoing",

      year: "2024 - Present",
    },
  ];

  /* =========================
      LEARNING JOURNEY
  ========================== */

  const timeline = [
    {
      title: "Started Programming",
      desc:
        "Began exploring programming and creative development.",

      year: "2021",

      link: "",
    },

    {
      title: "Frontend Development",
      desc:
        "Started learning HTML, CSS, JavaScript and React.",

      year: "2022",

      link: "https://react.dev",
    },

    {
      title: "AI & Automation",
      desc:
        "Built offline AI tools and automation projects.",

      year: "2024",

      link: "",
    },

    {
      title: "Portfolio Rebuild",
      desc:
        "Started rebuilding my entire portfolio from scratch with animations and creative UI.",

      year: "2026",

      link: "",
    },
  ];

  /* =========================
      CERTIFICATES
  ========================== */

  const certificates = [
    "/certificates/c1.jpg",
    "/certificates/c2.jpg",
    "/certificates/c3.jpg",
    "/certificates/c4.jpg",
    "/certificates/c5.jpg",
    "/certificates/c6.jpg",
  ];

  return (
    <>
      {loading && (
        <Drop
          path={1}
          content={
            theme === "light"
              ? journeyWhite
              : journeyBlack
          }
          theme={theme}
        />
      )}

      {!loading && <Nav />}

      {!loading && (
        <>
          <div
            className={`${styles.Container} ${styles[theme]}`}
          >

            {/* HERO */}
            <section className={styles.hero}>
              <h1>Journey</h1>

              <p>
                My Journey of becoming
                a professional developer.
              </p>
            </section>

            {/* EDUCATION */}
            <section className={styles.educationSection}>

              <div className={styles.sectionTitle}>
                <h2>Education</h2>
              </div>

              <div className={styles.educationGrid}>

                {education.map((item, index) => (
                  <div
                    className={styles.educationCard}
                    key={index}
                  >

                    <div className={styles.eduTop}>
                      <span>{item.year}</span>

                      <div
                        className={`${styles.status} ${
                          item.status === "Completed"
                            ? styles.completed
                            : styles.ongoing
                        }`}
                      >
                        {item.status}
                      </div>
                    </div>

                    <h3>{item.college}</h3>

                    <p>{item.degree}</p>

                    <h4>{item.cgpa}</h4>

                  </div>
                ))}

              </div>
            </section>

            {/* TIMELINE */}
            <section className={styles.timelineSection}>

              <div className={styles.sectionTitle}>
                <h2>Learning Journey</h2>
              </div>

              <div className={styles.timeline}>

                {timeline.map((item, index) => (
                  <div
                    className={styles.timelineItem}
                    key={index}
                  >

                    <div className={styles.timelineDot}></div>

                    <div className={styles.timelineCard}>

                      <span>{item.year}</span>

                      <h3>{item.title}</h3>

                      <p>{item.desc}</p>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Explore →
                        </a>
                      )}

                    </div>

                  </div>
                ))}

              </div>
            </section>

            {/* CERTIFICATES */}
            <section className={styles.certificateSection}>

              <div className={styles.sectionTitle}>
                <h2>Certificates</h2>
              </div>

              <div className={styles.certificateGrid}>

                {certificates.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.certificateCard} ${
                      index % 3 === 0
                        ? styles.large
                        : index % 2 === 0
                        ? styles.medium
                        : styles.small
                    }`}
                  >

                    <img
                      src={image}
                      alt="Certificate"
                    />

                  </div>
                ))}

              </div>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                ↑ Back To Top
              </button>

            </footer>

          </div>
        </>
      )}
    </>
  );
}