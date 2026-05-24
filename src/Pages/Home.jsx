import Drop from "../Components/Drop";
import nameWhite from "../assets/NameWhite.png";
import nameBlack from "../assets/NameBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect, useRef } from "react";
import Nav from "../Components/UI/Nav";
import me from "../assets/Me.png";
import "remixicon/fonts/remixicon.css";
import styles from "../GlobalUI/Hero.module.scss";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import comingWhite from "../assets/ComingUpWhite.png";
import comingBlack from "../assets/ComingUpBlack.png";
import Jokes from "../Components/Jokes/Jokes";
export default function Home() {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
        setTimeout(() => setLoading(false), 1700);
    }, []);

    const navigate = useNavigate();
        const location = useLocation();
        const [exit, setExit]  = useState(false);
    
        const logo = theme === "light" ? nameBlack : nameWhite;
    
        const movePage = (loc) =>{
            if (location.pathname === loc) return;
            setExit(true)
            setTimeout(()=>{navigate(loc)},2000);
        }

    const imageRef = useRef(null);

    useEffect(() => {
        if (loading) return;

        const image = imageRef.current;
        if (!image) return;

        const maxMove = 30;

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const offsetX =
                ((clientX - innerWidth / 2) / innerWidth) * maxMove;

            const offsetY =
                ((clientY - innerHeight / 2) / innerHeight) * maxMove;

            image.style.transform =
                `translate(${offsetX}px, ${offsetY}px)`;
        };

        const resetPosition = () => {
            image.style.transform = `translate(0px, 0px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", resetPosition);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", resetPosition);
        };
    }, [loading]);
    return (
        <>
            {exit &&
                        <Drop path={2} content={theme==="light"?comingWhite:comingBlack} theme={theme}/>
            }
            {loading && (
                <Drop
                    path={1}
                    content={theme === "light" ? nameWhite : nameBlack}
                    theme={theme}
                />
            )}

            {!loading && !exit && <Nav />}

            {!loading && !exit && (
                <>
                
                    <Jokes/>
                    <section className={`${styles[theme]}`}>

                    {/* MARQUEE (optional) */}
                    <marquee>
                        Proud Member of PoDevs | Proud Member of Origin AI & Labs | Cool Developer
                    </marquee>

                    {/* Coint */}
                    <p  onClick={()=>{movePage("/blogs")}}  className={`${styles.coint1}`}>Blogs</p>
                    <a href="https://youtu.be/Cjp6RVrOOW0" target="blank" className={`${styles.coint2}`}>Music</a>

                    {/* INTRO TEXT */}
                    <p>
                        👋 Hi guys I'm <b>Sharan</b>, Welcome to my world!
                    </p>

                    {/* MAIN BLOCK */}
                    <div className={`${styles.me}`}>

                        <h1 className={`${styles.group}`}>Student</h1>
                        <h1 className={`${styles.group}`}>& Programmer</h1>

                        {/* FIXED LINK */}
                        <div
                            style={{ width: "75%", display: "block", cursor:"pointer" }}
                        >
                            <p onClick={()=>{movePage("/techskill")}} className={`${styles.hoblink}`}>Tech Skills !</p>
                        </div>
                        
                        {/* RESUME DOWNLOAD */}
                        <button>
                            <a
                                href="/myResume.pdf"
                                download="Sharan_Resume.pdf"
                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}
                            >
                                Resume Here <i className="ri-download-2-line"></i>
                            </a>
                        </button>

                        {/* IMAGE */}
                        <img
                            ref={imageRef}
                            className={styles["me-img"]}
                            src={me}
                            alt="Sharan"
                            id="me-img"
                        />

                    </div>
                </section>
                </>
            )}
        </>
    );
}