import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
    const { getText } = useLanguage();
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-title-block">
                    <h1>Sergio Lattanzio</h1>
                </div>
                <div className="hero-cta-block">
                    <p>{getText('hero_description')}</p>
                    <Button>{getText('hero_button_cta')}</Button>
                </div>
            </div>
        </section>
    );
}