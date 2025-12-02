// ProjectPageCard.jsx
import React, { useRef, useState } from "react";
import Card from "./Card";

export default function ProjectPageCard({ title, text, image, video }) {

    const hasVideo = !!video;
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (hasVideo) {
            // --- LOG DE DIAGNÓSTICO ---
            console.log(`[${title}]: HOVER IN - Intentando reproducir video: ${video}`);
            setIsHovering(true);
            // --- FIN LOG ---

            videoRef.current?.play().catch(error => {
                console.warn(`[${title}]: Error al intentar reproducir video/webp:`, error);
            });
        }
    };

    const handleMouseLeave = () => {
        if (hasVideo) {
            // --- LOG DE DIAGNÓSTICO ---
            console.log(`[${title}]: HOVER OUT - Pausando y reseteando video`);
            setIsHovering(false);
            // --- FIN LOG ---

            videoRef.current?.pause();
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
            }
        }
    };

    // Clases condicionales (sin cambios)
    const cardClasses = `projectpage-card ${hasVideo ? 'has-video' : ''}`;
    const imageClasses = `media-element ${hasVideo && isHovering ? 'hidden' : 'visible'}`;
    const videoClasses = `media-element video-overlay ${isHovering ? 'visible' : 'hidden'}`;

    return (
        <Card
            className={cardClasses}
            rotation={2}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="projectpage-card-content">
                <h3 className="projectpage-card-title">{title}</h3>
                <p className="projectpage-card-text">{text}</p>

                {image && (
                    <div className="projectpage-card-image media-wrapper">
                        <img
                            src={image}
                            alt={`Imagen de ${title}`}
                            className={imageClasses}
                        />

                        {hasVideo && (
                            <video
                                ref={videoRef}
                                src={video}
                                className={videoClasses}
                                loop
                                muted
                                playsInline
                                preload="none"
                            />
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
}