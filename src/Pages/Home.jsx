import Drop from "../Components/Drop";
import nameWhite from "../assets/NameWhite.png";
import nameBlack from "../assets/NameBlack.png";
import useTheme from "../hooks/useTheme";
import { useState, useEffect } from "react";
import Nav from "../Components/UI/Nav";
export default function Home() {
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
          content={theme === "light" ? nameWhite : nameBlack}
          theme={theme}
        />
      )}

      {!loading && 
        <Nav/>
      }

      {/* {!loading &&
        <div>
          <div></div>
          <div></div>

        </div>
      } */}
    </>
  );
}
