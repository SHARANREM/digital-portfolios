import Drop from "../Components/Drop";
import SkillsWhite from "../assets/SkillsWhite.png";
import SkillsBlack from "../assets/SkillsBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
export default function ExpertiseWork() {
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
          content={theme === "light" ? SkillsWhite : SkillsBlack}
          theme={theme}
        />
      )}

      {!loading && 
        <Nav/>
      }
      <h1>My Works</h1>
    </>
  );
}
