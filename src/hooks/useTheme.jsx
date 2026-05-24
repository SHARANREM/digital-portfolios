import { useState, useEffect } from "react";

const listeners = new Set();

function notifyAll(theme) {
    listeners.forEach((l) => l(theme));
}

export default function useTheme() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const listener = (newTheme) => setTheme(newTheme);

        listeners.add(listener);
        return () => listeners.delete(listener);
    }, []);

    useEffect(() => {
        document.body.style.background =
            theme === "light" ? "#fff" : "#1c1c1c";

        localStorage.setItem("theme", theme);
        notifyAll(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            notifyAll(newTheme);
            return newTheme;
        });
    };

    return { theme, toggleTheme };
}