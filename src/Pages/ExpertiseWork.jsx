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
      title: "Front End Projects",
      desc:
        "Used to make simple projects while learning Web Development.",
      date: "August 13, 2024",
      status: "Completed",
    },
    {
      title: "ToDoList, DigitalClock, WhetherApp",
      desc:
        "First simple projects.",
      date: "September, 2024",
      status: "Completed",
    },
    {
      title: "Halloween Website",
      desc:
        "First Hackathon Project in Devpost.",
      date: "Nov 1, 2024",
      status: "Completed",
    },
    {
      title: "Pulsepod",
      desc:
        "First International Hackathon Winning Project in Devpost.",
      date: "Nov 24, 2024",
      status: "Completed",
    },
    {
      title: "First Portfolio",
      desc:
        "Developed as my First Original Project after learning Web Development.",
      date: "March 12, 2025",
      status: "Completed",
    },

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
      title: "RemCheatCommands",
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
      role: "Data Science Teacher",
      company: "Apollo Education",
      time: "2024 & 2026",

      desc:
        "Sharing my knowledge and programming style for new developers.",
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
      title: "Frontend Projects",

      why:
        "Practicing Web Dev.",

      how:
        "Using HTML, CSS and JS.",

      github: "https://github.com/SHARANREM/FrontEndProjects",
      youtube: "",

      tags: ["WebDev", "Beginner", "Fun"],
    },
    {
      title: "To Do List",

      why:
        "Practicing Web Dev from Yt.",

      how:
        "Using HTML, CSS and JS.",

      github: "https://github.com/SHARANREM/To-do-List",
      youtube: "https://to-do-list-wine-seven-82.vercel.app/",

      tags: ["WebDev", "Beginner", "Fun"],
    },
    {
      title: "Digital Clock",

      why:
        "To know time in hard way😈.",

      how:
        "Using HTML, CSS and JS.",

      github: "https://github.com/SHARANREM/DigitalClock",
      youtube: "",

      tags: ["WebDev", "Beginner", "Fun"],
    },
    {
      title: "Weather Web",

      why:
        "Can't leave to room to check for weather💤.",

      how:
        "Using HTML, CSS and JS.",

      github: "https://github.com/SHARANREM/FrontEndProjects",
      youtube: "https://weather-app-dusky-pi-60.vercel.app/",

      tags: ["API", "Beginner", "Fun"],
    },
    {
      title: "Halloween Website",

      why:
        "Made for hackathon on halloween👻.",

      how:
        "Using HTML, CSS and JS.",

      github: "https://github.com/SHARANREM/Halloween_Website",
      youtube: "https://halloween-website-sepia.vercel.app/",

      tags: ["WebDev", "Halloween", "Fun"],
    },
    {
      title: "PulsePod",

      why:
        "Hackathon Project. Health Tips website where you can share ur heath and other tips.",

      how:
        "Using HTML, CSS and JS.",

      github: "https://github.com/SHARANREM/PulsePod",
      youtube: "https://pulsepod.vercel.app/",

      tags: ["Hackathon", "Winner", "Tips"],
    },
    {
      title: "First Portfolio Website",

      why:
        "To showcase my extradinory talents in development.",

      how:
        "Using HTML, CSS and JS.",

      github: "https://github.com/SHARANREM/Digital-Portfolio",
      youtube: "https://sharanportfolio-phi.vercel.app/",

      tags: ["Portfolio", "Favourite", "CoolMe"],
    },
    {
      title: "Clone Server",

      why:
        "To create fake servers with python for free. I wad broke to pay for cloud",

      how:
        "Used python but got Banned from the cloud 🤣🤣🤣.",

      github: "https://github.com/SHARANREM/Prop1",
      youtube: "",

      tags: ["GotBanned", "FakeServer", "Fun"],
    },
    {
      title: "Education Booking Website",

      why:
        "To learn prompt web development.",

      how:
        "Developed entire website with AI Studio.",

      github: "https://github.com/SHARANREM/Student-Teacher-Booking-Appointment",
      youtube: "https://student-teacher-booking-appointment-umber.vercel.app/",

      tags: ["AI", "Prompting", "NEW Tools"],
    },
    {
      title: "Weather Web #2",

      why:
        "Learnt Sass so wanted to redesing old Weather website.",

      how:
        "Used HTML, SASS and JS also mastered API callings and Async.",

      github: "https://github.com/SHARANREM/WeatherWeb",
      youtube: "https://weather-web-seven-omega.vercel.app/",

      tags: ["SASS", "API", "ASYNC"],
    },
    {
      title: "FlashPal",

      why:
        "Students' Productivity App.",

      how:
        "Made using React Native My first mobile App for everyone.",

      github: "https://github.com/SHARANREM/FlashPal",
      youtube: "https://youtu.be/mbbvPucNYxY",

      tags: ["MobileApp", "AppDev", "Student Tool"],
    },
    {
      title: "Blind Help Tool",

      why:
        "Hackathon app for helping Visually Challenged people to use PC.",

      how:
        "Made using Python for entire build.",

      github: "https://github.com/SHARANREM/TechastraThrones_Hack",
      youtube: "",

      tags: ["Hackathon", "Helping Tool"],
    },
    {
      title: "Rem Gesture Control",

      why:
        "Wanted a faster and creative way to control PCs using gestures.",

      how:
        "Tracks mouse movement and recognizes patterns for commands.",

      github: "https://github.com/SHARANREM/RemGestureControl-Codes-V2",
      youtube: "",

      tags: ["AI", "Automation", "Gestures"],
    },

  ];

  /* =========================
      FUTURE PROJECTS
  ========================== */

  const futureProjects = [
    {
      title: "Rem Folder Management",

      desc:
        "AI based tool for Managing Folders and Fast Searching.",

      needs:
        "Python Devs, AI Engineers, Python UI devs",

      mail:
        "mailto:youremail@gmail.com?subject=Interested in RemStudio",
    },

    {
      title: "Rem Cheat Commands",

      desc:
        "Experience PC with GTA Cheat controls.",

      needs:
        "Python Devs, Testers",

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
                  my brain said "what if?" and might reach 100 projects
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