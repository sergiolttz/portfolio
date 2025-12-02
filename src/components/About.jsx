import Card from "./Card";
import TechIcons from "./TechIcons";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
    const { getText } = useLanguage();
    const devTools = [
        { name: "HTML", image: "src/assets/images/html5.png" },
        { name: "CSS", image: "src/assets/images/css.png" },
        { name: "JavaScript", image: "src/assets/images/javascript.png" },
        { name: "React", image: "src/assets/images/react.png" },
        { name: "Python", image: "src/assets/images/python.png" },
        { name: "Django", image: "src/assets/images/django.png" },
        { name: "Wordpress", image: "src/assets/images/wordpress.png" }
    ];
    const designTools = [
        { name: "Photoshop", image: "src/assets/images/photoshop.png" },
        { name: "Figma", image: "src/assets/images/figma.png" }
    ];


    return (
        <section id="about" className="section about-me-section">
            <h2>{getText('about_title')}</h2>
            <Card className="about-content" rotation={2}>
                <div className="about-text-block">
                    <p className="about-text">
                        {getText('about_p1')}
                    </p>
                    <p className="about-text">
                        <br />
                        {getText('about_p2')}
                    </p>
                    <p className="about-text-tech">
                        <br />
                        {getText('about_tools_dev')}
                    </p>
                    <TechIcons items={devTools} />
                    <p className="about-text-tech">
                        <br />
                        {getText('about_tools_design')}
                    </p>
                    <TechIcons items={designTools} />

                </div>
            </Card>
        </section>
    );
}