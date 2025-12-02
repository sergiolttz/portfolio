import Card from "./Card";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext"; 

export default function Contact() {
    const { getText } = useLanguage();

    return (
        <section id="contact" className="section">
            <Card className="contact-section" rotation={2}>
                <div className="contact-card">
                    <h2>{getText('contact_title')}</h2>
                    <p className="subtitle">
                        {getText('contact_subtitle')}
                    </p>
                    <form className="contact-form">
                        <div className="form-group-inline">
                            <input
                                type="text"
                                placeholder={getText('contact_name_placeholder')}
                                required
                            />
                            <input
                                type="email"
                                placeholder={getText('contact_email_placeholder')}
                                required
                            />
                        </div>
                        <textarea
                            placeholder={getText('contact_message_placeholder')}
                            rows="5"
                            required
                        ></textarea>
                        <Button type="submit">{getText('contact_submit_button')}</Button>
                    </form>
                </div>
            </Card>
        </section>
    );
}