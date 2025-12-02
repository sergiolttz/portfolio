import React, { useRef, useState } from "react";
import Card from "./Card";
import { useLanguage } from "../context/LanguageContext"; // Importamos el hook

export default function ProjectPageCard({ titleKey, textKey, image, video }) {
    const { getText } = useLanguage();

    const translatedTitle = getText(titleKey);
    const translatedText = getText(textKey);

    const hasVideo = !!video;
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (hasVideo) {
            setIsHovering(true);
            videoRef.current?.play().catch(() => {});
        }
    };

    const handleMouseLeave = () => {
        if (hasVideo) {
            setIsHovering(false);
            videoRef.current?.pause();
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
            }
        }
    };

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
                <h3 className="projectpage-card-title">{translatedTitle}</h3>
                <p className="projectpage-card-text">{translatedText}</p>

                {image && (
                    <div className="projectpage-card-image media-wrapper">
                        <img
                            src={image}
                            alt={`Imagen de ${translatedTitle}`}
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