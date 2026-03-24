import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { HashLink } from 'react-router-hash-link';

export default function Hero() {
    const { getText } = useLanguage();
    return (
        <section className="hero" id="top">
            <div className="hero-content">
                <div className="hero-title-block">
                    <h1>Sergio Lattanzio</h1>
                </div>
                <div className="hero-cta-block">
                    <p>{getText('hero_description')}</p>
                    <HashLink smooth to="/#projects" className="btn-wrapper">
                        <Button>
                            {getText('hero_button_cta')}
                        </Button>
                    </HashLink>
                </div>
            </div>
        </section>
    );
}