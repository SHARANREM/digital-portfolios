import Drop from "../Components/Drop";
import BlogWhite from "../assets/BlogWhite.png";
import BlogBlack from "../assets/BlogBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
import styles from "../GlobalUI/Blogs.module.scss";
import "remixicon/fonts/remixicon.css";

export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [expandedBlog, setExpandedBlog] =
    useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1700);
  }, []);

  /* =========================
      BLOGS
  ========================== */

  const blogs = [
    {
      id: 1,

      title: "Building Gesture Controls",

      category: "AI",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

      desc:
        "How I started building gesture-based desktop control systems.",

      content: `
I wanted computers to feel more magical.

Instead of normal shortcuts, I explored gesture systems
where symbols trigger actions.

This slowly evolved into my project called RemGestureControl.
      `,

      code: `
const spell = "L Shape";

if(spell === "L Shape"){
  openBrowser();
}
      `,

      youtube:
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },

    {
      id: 2,

      title: "Why Offline AI Matters",

      category: "AI",

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",

      desc:
        "Thoughts about privacy-first offline AI systems.",

      content: `
Most AI tools depend completely on the cloud.

I wanted tools that can work even without internet
while protecting privacy and reducing dependency.
      `,

      code: `
model.runOffline(true);
privacyMode.enable();
      `,

      youtube: "",
    },

    {
      id: 3,

      title: "Making My Portfolio Weird",

      category: "Frontend",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

      desc:
        "Adding games, animations and experiments to portfolio.",

      content: `
Traditional portfolios felt boring.

I wanted visitors to actually remember the experience.
      `,

      code: `
while(true){
  redesignPortfolio();
}
      `,

      youtube: "",
    },
  ];

  /* =========================
      FILTERS
  ========================== */

  const filters = [
    "All",
    "AI",
    "Frontend",
    "Design",
    "Projects",
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category === activeCategory
        );

  /* =========================
      COPY CODE
  ========================== */

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);

      alert("Code Copied 🚀");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading && (
        <Drop
          path={1}
          content={
            theme === "light"
              ? BlogWhite
              : BlogBlack
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

              <span>Thoughts • Ideas • Chaos</span>

              <h1>Blogs & Experiments</h1>

              <p>
                A place where I document ideas,
                projects, experiments and random
                developer chaos.
              </p>

            </section>

            {/* FILTERS */}
            <section className={styles.filterSection}>

              <div className={styles.filterBtns}>

                {filters.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setActiveCategory(filter)
                    }
                    className={
                      activeCategory === filter
                        ? styles.activeFilter
                        : ""
                    }
                  >
                    {filter}
                  </button>
                ))}

              </div>

            </section>

            {/* BLOG GRID */}
            <section className={styles.blogSection}>

              <div className={styles.blogGrid}>

                {filteredBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className={styles.blogCard}
                  >

                    {/* IMAGE */}
                    <div
                      className={styles.blogImage}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                      />

                      <span>
                        {blog.category}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={styles.blogContent}
                    >

                      <h2>{blog.title}</h2>

                      <p>{blog.desc}</p>

                      <button
                        onClick={() =>
                          setExpandedBlog(
                            expandedBlog === blog.id
                              ? null
                              : blog.id
                          )
                        }
                        className={
                          styles.expandBtn
                        }
                      >
                        {expandedBlog === blog.id
                          ? "Collapse"
                          : "Read More"}
                      </button>

                    </div>

                    {/* EXPANDED */}
                    {expandedBlog === blog.id && (
                      <div
                        className={
                          styles.expandedBlog
                        }
                      >

                        {/* TEXT */}
                        <div
                          className={
                            styles.blogText
                          }
                        >
                          <p>
                            {blog.content}
                          </p>
                        </div>

                        {/* CODE */}
                        {blog.code && (
                          <div
                            className={
                              styles.codeBlock
                            }
                          >

                            <div
                              className={
                                styles.codeTop
                              }
                            >

                              <span>
                                Code Snippet
                              </span>

                              <button
                                onClick={() =>
                                  copyCode(
                                    blog.code
                                  )
                                }
                              >
                                <i className="ri-file-copy-line"></i>

                                Copy
                              </button>

                            </div>

                            <pre>
                              <code>
                                {blog.code}
                              </code>
                            </pre>

                          </div>
                        )}

                        {/* VIDEO */}
                        {blog.youtube && (
                          <div
                            className={
                              styles.videoWrapper
                            }
                          >

                            <iframe
                              src={blog.youtube}
                              title="YouTube video"
                              frameBorder="0"
                              allowFullScreen
                            ></iframe>

                          </div>
                        )}

                      </div>
                    )}

                  </div>
                ))}

              </div>

            </section>

            {/* GO TOP */}
            <button
              className={styles.goTopBtn}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <i className="ri-arrow-up-line"></i>
            </button>

          </div>
        </>
      )}
    </>
  );
}