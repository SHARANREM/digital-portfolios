  import Drop from "../Components/Drop";
  import aboutMeWhite from "../assets/AboutMeWhite.png";
  import aboutMeBlack from "../assets/AboutMeBlack.png";
  import useTheme from "../hooks/useTheme";
  import { useState, useEffect } from "react";
  import Nav from "../Components/UI/Nav";
  import styles from "../GlobalUI/About.module.scss";
  import me from "../assets/MeSketch.png";
  import "remixicon/fonts/remixicon.css";
import ReactionGame from "./ReactionGame";
  export default function AboutMe() {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
      setTimeout(() => setLoading(false), 1700);
    }, []);

    const communities = [
  {
    title: "PODEVS Community",
    desc: "Developer Community Member",
    link: "https://google.com",
  },
  {
    title: "Origin AI Labs",
    desc: "AI & Labs Developer",
    link: "https://google.com",
  },
  {
    title: "Open Source Explorer",
    desc: "Contributing & Exploring",
    link: "https://google.com",
  },
  {
    title: "Creative UI Builder",
    desc: "Frontend Experiments",
    link: "https://google.com",
  },
];

const achievements = [
  {
    title: "Built AI Projects",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    link: "https://google.com",
  },
  {
    title: "Gesture Control System",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    link: "https://google.com",
  },
  {
    title: "Portfolio Re-Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "https://google.com",
  },
  {
    title: "Offline AI Experiments",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    link: "https://google.com",
  },
];

    return (
      <>
        {loading && (
          <Drop
            path={1}
            content={theme === "light" ? aboutMeWhite : aboutMeBlack}
            theme={theme}
          />
        )}

        {!loading && <Nav />}

        {!loading && (
          <>
            <div className={`${styles.Container} ${styles[theme]}`}>

              {/* HERO */}
              <section className={styles.top}>
                <img src={me} alt="My Image" />

                <div className={styles.tLeft}>
                  <h1>About Me</h1>

                  <p>
                    Hi, I’m Sharan — a developer who loves building
                    creative tech projects, websites, applications,
                    and software with AI-powered tools and systems
                    that make computers feel smarter and more human.
                  </p>

                  {/* SOCIALS */}
                  <div className={styles.socials}>
                    <a href="#">
                      <i className="ri-linkedin-box-fill"></i>
                    </a>

                    <a href="#">
                      <i className="ri-github-fill"></i>
                    </a>

                    <a href="#">
                      <i className="ri-mail-fill"></i>
                    </a>
                  </div>
                </div>
              </section>

              {/* COMMUNITIES / CARDS */}
<section className={styles.s1}>
  <div className={styles.sectionTitle}>
    <h2>Communities & Roles</h2>
  </div>

  <div className={styles.cardScroll}>
    {communities.map((item, index) => (
      <div className={styles.roleCard} key={index}>
        <div className={styles.roleContent}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={styles.roleBtn}
        >
          Visit
        </a>
      </div>
    ))}
  </div>
</section>

             {/* ACHIEVEMENTS */}
<section className={styles.s2}>
  <div className={styles.sectionTitle}>
    <h2>Achievements</h2>
  </div>

  <div className={styles.achievementGrid}>
    {achievements.map((item, index) => (
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        key={index}
        className={`${styles.achievementCard} ${
          index % 3 === 0
            ? styles.large
            : index % 2 === 0
            ? styles.medium
            : styles.small
        }`}
      >
        <img src={item.image} alt={item.title} />

        <div className={styles.overlay}>
          <h3>{item.title}</h3>

          <button>Open ↗</button>
        </div>
      </a>
    ))}
  </div>
</section>

              {/* RESUME + CV */}
              <section className={styles.s3}>
                <div className={styles.sectionTitle}>
                  <h2>Downloads</h2>
                </div>

                <div className={styles.downloadBtns}>
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>

                  <a href="/cv.pdf" download>
                    Download CV
                  </a>
                </div>
              </section>

              {/* REACTION GAME */}
<section className={styles.s4}>
  <div className={styles.sectionTitle}>
    <h2>Reaction Test ⚡</h2>
  </div>

  <ReactionGame />
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