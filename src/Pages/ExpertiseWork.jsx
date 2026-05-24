import Drop from "../Components/Drop";
import SkillsWhite from "../assets/WorksWhite.png";
import SkillsBlack from "../assets/WorksBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
import styles from "../GlobalUI/EW.module.scss";
import "remixicon/fonts/remixicon.css";

export default function ExpertiseWork() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const [activeMode, setActiveMode] =
    useState("ideas");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1700);
  }, []);

  /* =========================
      ROADMAP
  ========================== */

  const roadmap = [
    {
      title: "RemGestureControl",
      desc:
        "Gesture based PC control system with spell mode.",
      date: "2025",
      status: "Completed",
    },

    {
      title: "RemFolderControl",
      desc:
        "AI powered smart folder organization system.",
      date: "2026",
      status: "Working",
    },

    {
      title: "RemBrain",
      desc:
        "Personal AI operating system for productivity.",
      date: "Future",
      status: "Plan",
    },

    {
      title: "AI Creator Studio",
      desc:
        "Semantic media management workspace.",
      date: "Future",
      status: "Idea",
    },
  ];

  /* =========================
      IDEAS / PROBLEMS
  ========================== */

  const crazyIdeas = [
    {
      title: "Gesture Magic UI",
      topic: "UI/UX",

      desc:
        "Use gestures as spell casting for desktop controls.",

      link: "",
    },

    {
      title: "Offline AI Companion",
      topic: "AI",

      desc:
        "Private AI assistant that never uses internet.",

      link: "",
    },
  ];

  const problems = [
    {
      title: "File Chaos",

      topic: "Productivity",

      desc:
        "People lose files because operating systems are dumb at organization.",

      link: "",
    },

    {
      title: "Creative Burnout",

      topic: "Mental",

      desc:
        "Developers struggle managing multiple ideas and projects.",

      link: "",
    },
  ];

  /* =========================
      EXPERIENCE
  ========================== */

  const experience = [
    {
      role: "Freelance Developer",
      company: "Self Projects",
      time: "2023 - Present",

      desc:
        "Built creative web apps, AI tools and experimental systems.",
    },

    {
      role: "Open Source Explorer",
      company: "GitHub",
      time: "Ongoing",

      desc:
        "Learning and experimenting with open-source ecosystems.",
    },
  ];

  /* =========================
      PROJECTS
  ========================== */

  const projects = [
    {
      title: "RemGestureControl",

      why:
        "Wanted a faster and creative way to control PCs using gestures.",

      how:
        "Tracks mouse movement and recognizes patterns for commands.",

      github: "#",
      youtube: "#",

      tags: ["AI", "Automation", "Gestures"],
    },

    {
      title: "RemFolderControl",

      why:
        "To solve messy file organization problems using AI.",

      how:
        "Uses semantic understanding and smart categorization.",

      github: "#",
      youtube: "",

      tags: ["AI", "Files", "Productivity"],
    },
  ];

  /* =========================
      FUTURE PROJECTS
  ========================== */

  const futureProjects = [
    {
      title: "RemStudio",

      desc:
        "AI media workspace for creators with semantic search.",

      needs:
        "Frontend Developers, Designers, AI Engineers",

      mail:
        "mailto:youremail@gmail.com?subject=Interested in RemStudio",
    },

    {
      title: "AI Storytelling Platform",

      desc:
        "Generate cinematic audio storytelling experiences.",

      needs:
        "Audio Engineers, Writers, AI Developers",

      mail:
        "mailto:youremail@gmail.com?subject=Interested in AI Storytelling Platform",
    },
  ];

  return (
    <>
      {loading && (
        <Drop
          path={1}
          content={
            theme === "light"
              ? SkillsWhite
              : SkillsBlack
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

              <div className={styles.heroContent}>
                <span>Creative Developer</span>

                <h1>Expertise & Works</h1>

                <p>
                  Building experimental systems,
                  AI tools and interfaces that feel
                  futuristic, useful and fun.
                </p>
              </div>

            </section>

            {/* ======================
                ROADMAP
            ====================== */}

            <section className={styles.roadmapSection}>

              <div className={styles.sectionTitle}>
                <h2>Project Roadmap</h2>

                <p>
                  Past works, current projects
                  and future chaos.
                </p>
              </div>

              <div className={styles.roadmapGrid}>

                {roadmap.map((item, index) => (
                  <div
                    className={styles.roadmapCard}
                    key={index}
                  >

                    <div className={styles.roadmapTop}>

                      <span>{item.date}</span>

                      <div
                        className={`
                          ${styles.tag}
                          ${
                            item.status === "Completed"
                              ? styles.completed
                              : item.status === "Working"
                              ? styles.working
                              : item.status === "Plan"
                              ? styles.plan
                              : styles.idea
                          }
                        `}
                      >
                        {item.status}
                      </div>

                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                  </div>
                ))}

              </div>

            </section>

            {/* ======================
                IDEAS & PROBLEMS
            ====================== */}

            <section className={styles.ideaProblemSection}>

              <div className={styles.sectionTitle}>
                <h2>Crazy Ideas & Problems</h2>
              </div>

              <div className={styles.switchBtns}>

                <button
                  onClick={() =>
                    setActiveMode("ideas")
                  }
                  className={
                    activeMode === "ideas"
                      ? styles.activeBtn
                      : ""
                  }
                >
                  Crazy Ideas
                </button>

                <button
                  onClick={() =>
                    setActiveMode("problems")
                  }
                  className={
                    activeMode === "problems"
                      ? styles.activeBtn
                      : ""
                  }
                >
                  Problems
                </button>

              </div>

              <div className={styles.ideaGrid}>

                {(activeMode === "ideas"
                  ? crazyIdeas
                  : problems
                ).map((item, index) => (
                  <div
                    className={styles.ideaCard}
                    key={index}
                  >

                    <span>{item.topic}</span>

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
                ))}

              </div>

            </section>

            {/* ======================
                EXPERIENCE
            ====================== */}

            <section className={styles.experienceSection}>

              <div className={styles.sectionTitle}>
                <h2>Experience</h2>
              </div>

              <div className={styles.experienceGrid}>

                {experience.map((item, index) => (
                  <div
                    className={styles.expCard}
                    key={index}
                  >

                    <span>{item.time}</span>

                    <h3>{item.role}</h3>

                    <h4>{item.company}</h4>

                    <p>{item.desc}</p>

                  </div>
                ))}

              </div>

            </section>

            {/* ======================
                PROJECTS
            ====================== */}

            <section className={styles.projectsSection}>

              <div className={styles.sectionTitle}>
                <h2>Projects</h2>

                <p>
                  Things I built because
                  my brain said "what if?"
                </p>
              </div>

              <div className={styles.projectGrid}>

                {projects.map((project, index) => (
                  <div
                    className={styles.projectCard}
                    key={index}
                  >

                    <div className={styles.projectHeader}>

                      <h3>{project.title}</h3>

                      <div className={styles.projectTags}>
                        {project.tags.map(
                          (tag, i) => (
                            <span key={i}>
                              {tag}
                            </span>
                          )
                        )}
                      </div>

                    </div>

                    <div className={styles.projectContent}>

                      <div
                        className={styles.projectInfo}
                      >
                        <h4>
                          Why I Built It
                        </h4>

                        <p>{project.why}</p>
                      </div>

                      <div
                        className={styles.projectInfo}
                      >
                        <h4>
                          How It Works
                        </h4>

                        <p>{project.how}</p>
                      </div>

                    </div>

                    <div className={styles.projectBtns}>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-github-line"></i>
                          GitHub
                        </a>
                      )}

                      {project.youtube && (
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-youtube-line"></i>
                          Demo
                        </a>
                      )}

                    </div>

                  </div>
                ))}

              </div>

            </section>

            {/* ======================
                FUTURE PROJECTS
            ====================== */}

            <section className={styles.futureSection}>

              <div className={styles.sectionTitle}>
                <h2>Work With Me</h2>

                <p>
                  Future projects looking
                  for creative minds.
                </p>
              </div>

              <div className={styles.futureGrid}>

                {futureProjects.map(
                  (project, index) => (
                    <div
                      className={styles.futureCard}
                      key={index}
                    >

                      <h3>{project.title}</h3>

                      <p>{project.desc}</p>

                      <span>
                        Looking For :
                      </span>

                      <h4>{project.needs}</h4>

                      <a href={project.mail}>
                        Work With Me →
                      </a>

                    </div>
                  )
                )}

              </div>

            </section>

          </div>
        </>
      )}
    </>
  );
}