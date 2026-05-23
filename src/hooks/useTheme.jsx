import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply to body + save to localStorage
  useEffect(() => {
    document.body.style.background = theme === "light" ? "#fff" : "#1c1c1c";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme with reload
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
