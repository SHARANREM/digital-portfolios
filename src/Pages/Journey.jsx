import Drop from "../Components/Drop";
import journeyWhite from "../assets/JourneyWhite.png";
import journeyBlack from "../assets/JourneyBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
export default function Journey() {
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
          content={theme === "light" ? journeyWhite : journeyBlack}
          theme={theme}
        />
      )}

      {!loading && 
        <Nav/>
      }
      <h1>Journey</h1>
    </>
  );
}
