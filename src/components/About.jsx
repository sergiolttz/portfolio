import Card from "./Card";
import TechIcons from "./TechIcons";
import { useLanguage } from "../context/LanguageContext";

const baseUrl = import.meta.env.BASE_URL;


export default function About() {
    const { getText } = useLanguage();
    const devTools = [
        { name: "HTML", image: `${baseUrl}/images/html5.png` },
        { name: "CSS", image: `${baseUrl}/images/css.png` },
        { name: "JavaScript", image: `${baseUrl}/images/javascript.png` },
        { name: "React", image: `${baseUrl}/images/react.png` },
        { name: "Python", image: `${baseUrl}/images/python.png` },
        { name: "Django", image: `${baseUrl}/images/django.png` },
        { name: "Wordpress", image: `${baseUrl}/images/wordpress.png` }
    ];

    const designTools = [
        { name: "Photoshop", image: `${baseUrl}/images/photoshop.png` },
        { name: "Figma", image: `${baseUrl}/images/figma.png` }
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
                    <p className="about-text">
                        <br />
                        {getText('about_p3')}
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