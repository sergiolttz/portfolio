import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlButton = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth <= 768) {
                    if (window.scrollY > lastScrollY && window.scrollY > 100) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                } else {
                    setIsVisible(false);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlButton);
        return () => window.removeEventListener('scroll', controlButton);
    }, [lastScrollY]);

    return (
        <button
            className={`btn-primary btn-back-floating ${isVisible ? "btn-back--visible" : ""}`}
            onClick={() => navigate("/")}
            aria-label="Volver"
        >
            <FiArrowLeft size={24} />
        </button>
    );
}