import { useState } from "react";
import styles from "./Ui.module.scss";

import logoWhite from "../../assets/LogoWhite.png";
import logoBlack from "../../assets/LogoBlack.png";
import comingWhite from "../../assets/ComingUpWhite.png";
import comingBlack from "../../assets/ComingUpBlack.png";

import { useNavigate } from "react-router-dom";
import Drop from "../Drop";
import useTheme from "../../hooks/useTheme";
import { useLocation } from "react-router-dom";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    
    const navigate = useNavigate();
    const location = useLocation();
    const [exit, setExit]  = useState(false);

    const logo = theme === "light" ? logoBlack : logoWhite;

    const movePage = (loc) =>{
        if (location.pathname === loc) return;
        setExit(true)
        setTimeout(()=>{navigate(loc)},2000);
    }

    return (
        <>
        {exit &&
            <Drop path={2} content={theme==="light"?comingWhite:comingBlack} theme={theme}/>
        }
        {!exit&&
            <header className={`${styles.nav} ${styles[theme]}`}>
                <img src={logo} alt="Sharan" onClick={()=>{movePage("/")}} className={styles.logo} />

                {/* Hamburger */}
                <div
                    className={`${styles.ham} ${open ? styles.hamOpen : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <ul>
                        <li onClick={()=>{movePage("/aboutme")}}>About Me.</li>
                        <li onClick={()=>{movePage("/journey")}}>Journey.</li>
                        <li onClick={()=>{movePage("/expertisework")}}>Expertise & Work.</li>
                    </ul>
                    <button className={styles.ctas} onClick={toggleTheme}>{theme.charAt(0).toUpperCase()}</button>
                    <button className={styles.cta}>@Sharan</button>
                </nav>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${open ? styles.menuOpen : ""}`}>
                    <ul>
                        <li style={{ animationDelay: ".6s" }} onClick={() => { movePage("/aboutme"); setOpen(false); }}>
                            About Me
                        </li>
                        <li style={{ animationDelay: ".8s" }} onClick={() => { movePage("/journey"); setOpen(false); }}>
                            Journey
                        </li>
                        <li style={{ animationDelay: "1s" }} onClick={() => { movePage("/expertisework"); setOpen(false); }}>
                            Expertise & Work
                        </li>

                        <button
                            className={styles.menuBtn}
                            style={{ animationDelay: "1.2s" }}
                        >
                            Wanna Talk
                        </button>
                    </ul>
                </div>
            </header>
        }
        </>
    );
}
