import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className = "navigation">
        <div className = "nav">
            <h1>Welcome!</h1>
            <div>
                <button onClick = {toggleDarkMode}>Toggle Dark Mode</button>
            </div>
        </div>
        </div>
    )
}

export default Navigation;