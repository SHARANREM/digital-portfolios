import Drop from "../Components/Drop";
import aboutMeWhite from "../assets/AboutMeWhite.png";
import aboutMeBlack from "../assets/AboutMeBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
export default function AboutMe() {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();
    useEffect(() => {
        setTimeout(() => setLoading(false), 1700);
    }, []);

  return (
    <>
      {loading && (
        <Drop
          path={1}
          content={theme === "light" ? aboutMeWhite : aboutMeBlack}
          theme={theme}
        />
      )}

      {!loading && 
        <Nav/>
      }
      <h1>About</h1>
    </>
  );
}
