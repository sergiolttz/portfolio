import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle({ variant = "desktop" }) {
    const { language, setLanguage } = useLanguage();


    const handleChange = (value) => {
        setLanguage(value);
    };

    return (
        <div className={`language-toggle ${variant}`}>
            <button
                className={`lang-btn ${language === "es" ? "active" : ""}`}
                onClick={() => handleChange("es")}
            >
                ES
            </button>

            <button
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => handleChange("en")}
            >
                EN
            </button>
        </div>
    );
}