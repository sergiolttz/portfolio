import { useEffect, useRef } from "react";

export default function Card({ children, className = "", rotation = 2, ...restProps }) {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const content = contentRef.current;

        if (!card || !content) return;

        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice) {
            const handleMouseMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateY = (rotation * (x - centerX)) / centerX;
                const rotateX = (-rotation * (y - centerY)) / centerY;

                content.style.transform = `
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                `;

                card.style.setProperty("--x", `${(x / rect.width) * 100}%`);
                card.style.setProperty("--y", `${(y / rect.height) * 100}%`);
            };

            const handleMouseLeave = () => {
                content.style.transform = "rotateX(0) rotateY(0)";
                content.style.transition = "transform 0.5s ease";
                setTimeout(() => {
                    content.style.transition = "";
                }, 500);
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [rotation]);

    return (
        <div
            ref={cardRef}
            className={`card ${className}`}
            data-rotation-factor={rotation}
            {...restProps}
        >
            <div ref={contentRef} className="card-content">
                {children}
            </div>
        </div>
    );
}
