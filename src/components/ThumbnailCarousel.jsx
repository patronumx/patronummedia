import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThumbnailCarousel = () => {
    const [index, setIndex] = useState(0);
    const thumbnails = [
        { src: "/assets/Thumbnails/2025-01-04_09-03-06.jpg", title: "Bumblebee Custom", subtitle: "Tekken 8 Gameplay" },
        { src: "/assets/Thumbnails/Arslan 1.jpg", title: "Arslan vs CBM", subtitle: "World Tour Highlights" },
        { src: "/assets/Thumbnails/2025-01-04_09-02-35.jpg", title: "Popeye Custom", subtitle: "Creative Productions" },
        { src: "/assets/Thumbnails/Atif 1.jpg", title: "Atif Falcons", subtitle: "2024 Year Review" },
        { src: "/assets/Thumbnails/Atif 2.jpg", title: "Heera Malik Analysis", subtitle: "Pro Strategy Breakdown" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % thumbnails.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [thumbnails.length]);

    return (
        <div className="hero-slider-wrapper">
            <div className="hero-slider-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-slide"
                    >
                        <div className="slide-image-container">
                            <img 
                                src={thumbnails[index].src} 
                                alt={thumbnails[index].title} 
                                className="slide-image"
                            />
                            <div className="slide-overlay"></div>
                        </div>
                        
                        <motion.div 
                            className="slide-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <span className="slide-subtitle">{thumbnails[index].subtitle}</span>
                            <h3 className="slide-title">{thumbnails[index].title}</h3>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="slider-indicators">
                    {thumbnails.map((_, i) => (
                        <div 
                            key={i} 
                            className={`indicator-dot ${i === index ? 'active' : ''}`}
                            onClick={() => setIndex(i)}
                        >
                            <div className="indicator-progress"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hero-slider-wrapper {
                    width: 100%;
                    max-width: 650px;
                    margin: 0 auto;
                    position: relative;
                }
                .hero-slider-container {
                    position: relative;
                    width: 100%;
                    height: 380px;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: #000;
                }
                .hero-slide {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                }
                .slide-image-container {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                .slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .slide-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(13, 8, 20, 0.9) 0%, rgba(13, 8, 20, 0.2) 60%, transparent 100%);
                }
                .slide-content {
                    position: absolute;
                    bottom: 30px;
                    left: 30px;
                    z-index: 2;
                }
                .slide-subtitle {
                    display: block;
                    font-size: 0.8rem;
                    color: var(--accent-cyan);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-shadow: 0 0 10px rgba(217, 70, 239, 0.5);
                }
                .slide-title {
                    font-size: 2rem;
                    color: white;
                    margin: 0;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }
                .slider-indicators {
                    position: absolute;
                    bottom: 20px;
                    right: 30px;
                    display: flex;
                    gap: 10px;
                    z-index: 10;
                }
                .indicator-dot {
                    width: 40px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                }
                .indicator-dot.active .indicator-progress {
                    width: 100%;
                    background: var(--accent-cyan);
                    height: 100%;
                    animation: progress-fill 5s linear;
                }
                @keyframes progress-fill {
                    from { width: 0%; }
                    to { width: 100%; }
                }

                @media (max-width: 768px) {
                    .hero-slider-container {
                        height: 280px;
                    }
                    .slide-title {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ThumbnailCarousel;
