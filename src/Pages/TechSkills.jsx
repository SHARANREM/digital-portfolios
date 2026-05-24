import Drop from "../Components/Drop";
import TechWhite from "../assets/TechWhite.png";
import TechBlack from "../assets/TechBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
import styles from "../GlobalUI/TechSkills.module.scss";
import "remixicon/fonts/remixicon.css";

export default function TechSkills() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1700);
  }, []);



  /* =========================
      TECH SKILLS
  ========================== */

  const techSkills = [
    {
      title: "React",
      icon: "ri-reactjs-line",
      desc: "Learnt for building smooth modern UI and interactive websites.",
      level: "Advanced",
      link: "https://youtu.be/CgkZ7MvWUAA",
    },

    {
      title: "JavaScript",
      icon: "ri-javascript-line",
      desc: "Main language for web development and creative coding.",
      level: "Advanced",
      link: "https://youtu.be/lfmg-EJ8gm4",
    },

    {
      title: "Python",
      icon: "ri-code-box-line",
      desc: "Used for AI tools, automation and experiments.",
      level: "Advanced",
      link: "https://youtu.be/ix9cRaBkVe0",
    },

    {
      title: "HTML/CSS",
      icon: "ri-html5-line",
      desc: "Skeleton of Web Dev So I learnt it as soon as I could. Also Make sure folder structuring is Imp for Web.",
      level: "Advanced",
      link: "https://youtu.be/HGTJBPNC-Gw",
    },

    {
      title: "SCSS",
      icon: "ri-palette-line",
      desc: "For writing cleaner and scalable styles.",
      level: "Advanced",
      link: "https://youtu.be/_a5j7KoflTs",
    },

    {
      title: "Git & GitHub",
      icon: "ri-github-line",
      desc: "Version control and project management.",
      level: "Intermediate",
      link: "https://youtu.be/mAFoROnOfHs",
    },

    {
      title: "Java",
      icon: "ri-java-line",
      desc: "Learnt in Clg and Tried it with Flutter and Made an App PrinterRem Check it in the Projects!.",
      level: "Intermediate",
      link: "https://youtu.be/xTtL8E4LzTQ",
    },

    {
      title: "React Native",
      icon: "ri-reactjs-line",
      desc: "Learnt the Core Foundation and Made an app FlashPal for internship at Marzelet Info Technology.",
      level: "Intermediate",
      link: "https://youtu.be/xTtL8E4LzTQ",
    },

    {
      title: "Firebase",
      icon: "ri-firebase-line",
      desc: "Wanted a small free DB for Hackathons, So I learnt the Fundamentals.",
      level: "Fundamentals",
      link: "https://youtu.be/z-pyxOx3i1s",
    },

    {
      title: "Figma & Canva",
      icon: "ri-figma-line",
      desc: "Learnt due to circumstances and withing 3hrs Since I promised for a web design😓. Canva in Clg for invitation.",
      level: "Basic-Intermediate",
      link: "https://youtu.be/ezldKx-jPag",
    },

    {
      title: "Davinci & Capcut",
      icon: "ri-edit-line",
      desc: "Learning for making YT videos for PODEVS Community.",
      level: "Basic",
      link: "https://youtu.be/MCDVcQIA3UM",
    },

    {
      title: "Prompting",
      icon: "ri-robot-2-line",
      desc: "Why did I learn it you ask? You know Why.",
      level: "Advanced",
      link: "https://chatgpt.com",
    },


  ];

  /* =========================
      SOFT SKILLS
  ========================== */

  const softSkills = [
    "Creative Thinking",
    "Problem Solving",
    "UI/UX Thinking",
    "Team Collaboration",
    "Fast Learning",
    "Project Planning",
    "Communication",
    "Leadership",
    "Adaptability",
    "Critical Thinking",
    "Debug Patience 😭",
  ];

  /* =========================
      LEARNING GOALS
  ========================== */

  const learningGoals = [
    {
      title: "Machine Learning",
      icon: "ri-brain-line",
    },

    {
      title: "Computer Vision",
      icon: "ri-eye-line",
    },

    {
      title: "Offline AI Systems",
      icon: "ri-cpu-line",
    },

    {
      title: "System Design",
      icon: "ri-layout-masonry-line",
    },

    {
      title: "Advanced Animations",
      icon: "ri-magic-line",
    },

    {
      title: "Cloud Computing",
      icon: "ri-cloud-line",
    },

    {
      title: "Model Trainings",
      icon: "ri-equalizer-line",
    },

    {
      title: "App Development",
      icon: "ri-google-play-line",
    },

  ];

  /* =========================
      FAV GITHUB TOOLS
  ========================== */

  const githubTools = [
    {
      title: "React Bits",
      category: "UI",
      desc: "Beautiful modern React components and animations.",
      link: "https://github.com/DavidHDev/react-bits",
    },

    {
      title: "ShadCN UI",
      category: "Frontend",
      desc: "Modern accessible UI components.",
      link: "https://github.com/shadcn-ui/ui",
    },

    {
      title: "Whisper",
      category: "AI",
      desc: "Offline speech-to-text AI by OpenAI.",
      link: "https://github.com/openai/whisper",
    },

    {
      title: "Framer Motion",
      category: "Animation",
      desc: "Powerful React animation library.",
      link: "https://github.com/topics/framer-motion",
    },

    {
      title: "Three.js",
      category: "3D",
      desc: "Create crazy 3D web experiences.",
      link: "https://github.com/mrdoob/three.js/",
    },

    {
      title: "ComfyUI",
      category: "Frontend",
      desc: "Provides Node Graphics for AI creation engines.",
      link: "https://github.com/Comfy-Org/ComfyUI",
    },

    {
      title: "Homepage",
      category: "Prod. Tool",
      desc: "A modern, fully static, fast, secure fully proxied, highly customizable application dashboard with integrations for over 100 services and translations into multiple languages. Easily configured via YAML files or through docker label discovery.",
      link: "https://github.com/Comfy-Org/ComfyUI",
    },
  ];
    const filters = [
    "All",
    "AI",
    "Frontend",
    "Animation",
    "Prod. Tool",
    "3D",
    "UI",
  ];

  const filteredTools =
    activeFilter === "All"
      ? githubTools
      : githubTools.filter(
          (tool) => tool.category === activeFilter
        );
  return (
    <>
      {loading && (
        <Drop
          path={1}
          content={theme === "light" ? TechWhite : TechBlack}
          theme={theme}
        />
      )}

      {!loading && <Nav />}

      {!loading && (
        <>
          <div className={`${styles.Container} ${styles[theme]}`}>

            {/* HERO */}
            <section className={styles.hero}>
              <h1>Tech Skills</h1>

              <p>
                Technologies, tools and skills I use
                to turn random ideas into real projects.
              </p>
            </section>

            {/* TECH SKILLS */}
            <section className={styles.skillsSection}>

              <div className={styles.sectionTitle}>
                <h2>Tech Stack</h2>
              </div>

              <div className={styles.techGrid}>

                {techSkills.map((skill, index) => (
                  <div
                    className={styles.techCard}
                    key={index}
                  >
                    <div className={styles.techTop}>
                      <i className={skill.icon}></i>

                      <span>{skill.level}</span>
                    </div>

                    <h3>{skill.title}</h3>

                    <p>{skill.desc}</p>

                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore →
                    </a>
                  </div>
                ))}

              </div>
            </section>

            {/* SOFT SKILLS */}
            <section className={styles.softSection}>

              <div className={styles.sectionTitle}>
                <h2>Soft Skills</h2>
              </div>

              <div className={styles.softWrapper}>

                <div className={styles.softTrack}>

                  {[...softSkills, ...softSkills].map(
                    (item, index) => (
                      <div
                        className={styles.softCard}
                        key={index}
                      >
                        {item}
                      </div>
                    )
                  )}

                </div>

              </div>
              
              <div className={styles.softWrapper2}>

                <div className={styles.softTrack2}>

                  {[...softSkills, ...softSkills].map(
                    (item, index) => (
                      <div
                        className={styles.softCard}
                        key={index}
                      >
                        {item}
                      </div>
                    )
                  )}

                </div>

              </div>

            </section>

            {/* LEARNING GOALS */}
            <section className={styles.learningSection}>

              <div className={styles.sectionTitle}>
                <h2>Learning Goals</h2>
              </div>

              <div className={styles.goalGrid}>

                {learningGoals.map((goal, index) => (
                  <div
                    className={styles.goalCard}
                    key={index}
                  >
                    <i className={goal.icon}></i>

                    <h3>{goal.title}</h3>
                  </div>
                ))}

              </div>
            </section>

            {/* GITHUB TOOLS */}
            <section className={styles.githubSection}>

              <div className={styles.sectionTitle}>
                <h2>Favorite GitHub Tools</h2>
              </div>

              <div className={styles.filterBtns}>
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(filter)}
                    className={
                      activeFilter === filter
                        ? styles.activeFilter
                        : ""
                    }
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className={styles.githubGrid}>

                {filteredTools.map((tool, index) => (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.githubCard}
                    key={index}
                  >
                    <span>{tool.category}</span>

                    <h3>{tool.title}</h3>

                    <div className={styles.githubHover}>
                      <p>{tool.desc}</p>
                    </div>
                  </a>
                ))}

              </div>
            </section>
            
            {/* GO TO TOP */}
            <button
              className={styles.goTopBtn}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <span>Back To Top</span>

              <i className="ri-arrow-up-line"></i>
            </button>
          </div>
        </>
      )}
    </>
  );
}