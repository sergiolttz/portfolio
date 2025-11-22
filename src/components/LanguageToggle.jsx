import { useState } from "react";

export default function LanguageToggle({ variant = "desktop", onChange }) {
    const [lang, setLang] = useState("es");

    const handleChange = (value) => {
        setLang(value);
        onChange && onChange(value);
    };

    return (
        <div className={`language-toggle ${variant}`}>
            <button
                className={`lang-btn ${lang === "es" ? "active" : ""}`}
                onClick={() => handleChange("es")}
            >
                ES
            </button>

            <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => handleChange("en")}
            >
                EN
            </button>
        </div>
    );
}
