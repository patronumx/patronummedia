import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('Posters');
    const [playingIndex, setPlayingIndex] = useState(null);
    const videoRefs = useRef({});

    const handleVideoTap = (e, index) => {
        const video = videoRefs.current[index];
        if (!video) return;
        if (playingIndex === index) {
            video.pause();
            video.currentTime = 0;
            setPlayingIndex(null);
        } else {
            // Pause any previously playing video
            if (playingIndex !== null && videoRefs.current[playingIndex]) {
                videoRefs.current[playingIndex].pause();
                videoRefs.current[playingIndex].currentTime = 0;
            }
            video.muted = false;
            video.play().catch(() => {});
            setPlayingIndex(index);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
    };

    const posters = [
        "20250104_090803.jpg", "20250104_090832.jpg", "20250104_090850.jpg",
        "20250104_090915.jpg", "20250104_090933.jpg", "Arslan ash tournament.jpg", "jonn.jpg",
        "MMA.jpeg", "WhatsApp Image 2026-05-03 at 4.20.56 PM.jpeg", "casting talent.jpeg",
        "pak vs korea.jpeg", "pak vs saudia.jpeg"
    ];

    const thumbnails = [
        "2025-01-04_09-01-54.jpg", "2025-01-04_09-02-08.jpg", "2025-01-04_09-02-21.jpg",
        "2025-01-04_09-02-35.jpg", "2025-01-04_09-02-55.jpg", "2025-01-04_09-03-06.jpg",
        "2025-01-04_09-03-16.jpg", "2025-01-04_09-03-30.jpg", "2025-01-04_09-03-41.jpg",
        "2025-01-04_09-03-51.jpg", "2025-01-04_09-04-07.jpg", "2025-01-04_09-04-19.jpg",
        "2025-01-04_09-04-30.jpg", "2025-01-04_09-04-43.jpg", "2025-01-04_09-05-01.jpg",
        "2025-01-04_09-05-12.jpg", "2025-01-04_09-05-21.jpg", "2025-01-04_09-05-36.jpg",
        "2025-01-04_09-05-52.jpg", "2025-01-04_09-06-04.jpg", "Arslan 1.jpg",
        "Arslan 2.jpg", "Arslan 3.jpg", "Arslan 4.jpg", "Arslan 5.jpg", "Arslan 55.jpg",
        "Arslan 64.jpg", "Arslan podcast.jpg", "Arslan pubg.jpg", "Arslan rapid fire.jpg",
        "Arslan tierlist.jpg", "Arslan tournament.jpg", "Arslan vs abood.jpg",
        "Arslan vs knee.jpg", "Arslan.jpg", "Atif 0.jpg", "Atif 1.jpg", "Atif 2.jpg", "Atif.jpg",
        "new1.jpeg", "new2.jpeg", "new3.jpeg", "new4.jpeg", "new5.jpeg", "new6.jpeg", "new7.jpeg",
        "new8.jpeg", "new9.jpeg", "new10.jpeg", "new11.jpeg", "new12.jpeg", "new13.jpeg", "new14.jpeg",
        "new15.jpeg", "new16.jpeg", "new17.jpeg", "new18.jpeg", "new19.jpeg", "new20.jpeg", "new21.jpeg",
        "new22.jpeg", "new23.jpeg", "new24.jpeg", "new25.jpeg"
    ];

    const shortVideos = [
        "giraf-shoes-adidas.mp4",
        "keyboard-video.mp4",
        "anker-tech-review.mp4",
        "event-video.mp4",
        "short-interview.mp4"
    ];

    const longVideos = [
        "long.mp4",
        "longg.mp4",
        "videoplayback.mp4"
    ];

    const posterNames = {
        "20250104_090803.jpg": "The Jon - Champion of TGU Poster",
        "20250104_090832.jpg": "Tekken World Tour 2024 - The Jon Finalist",
        "20250104_090850.jpg": "Usama - Second Impact Champion",
        "20250104_090915.jpg": "Capetown Showdown Runner Up Tribute",
        "20250104_090933.jpg": "7th Place at First Knockout Tournament",
        "Arslan ash tournament.jpg": "Pakistan vs Saudi Tekken 8 - Arslan Ash Highlights",
        "jonn.jpg": "The Jon - Champion of TGU",
        "MMA.jpeg": "MMA Championship Production",
        "WhatsApp Image 2026-05-03 at 4.20.56 PM.jpeg": "Live Production Showcase",
        "casting talent.jpeg": "Casting Talent Spotlight",
        "pak vs korea.jpeg": "International Invitational: Pak vs Korea",
        "pak vs saudia.jpeg": "International Invitational: Pak vs Saudi"
    };

    const thumbnailNames = {
        "2025-01-04_09-01-54.jpg": "Jiren Custom Tekken 8 Gameplay",
        "2025-01-04_09-02-08.jpg": "Green Arrow Mog Tekken 8 Custom",
        "2025-01-04_09-02-21.jpg": "Attack 2024 - Puerto Rico Mogging",
        "2025-01-04_09-02-35.jpg": "Popeye Custom Tekken 8 Thumbnail",
        "2025-01-04_09-02-55.jpg": "8-Peat Champion Mogger Highlights",
        "2025-01-04_09-03-06.jpg": "Bumblebee Custom Gameplay Tekken 8",
        "2025-01-04_09-03-16.jpg": "Spider-Man Custom Tekken 8 Action",
        "2025-01-04_09-03-30.jpg": "Quahog Mog - Paragon Online Series",
        "2025-01-04_09-03-41.jpg": "5-Peat TNS Mog - Pro Tekken 8",
        "2025-01-04_09-03-51.jpg": "Dreamcon Mogging - $40,000 Prize Pool",
        "2025-01-04_09-04-07.jpg": "Pushing Up the Paragon Ladder - Iron Man Mode",
        "2025-01-04_09-04-19.jpg": "Android 16 Custom Tekken 8 Gameplay",
        "2025-01-04_09-04-30.jpg": "Nonstop Mogging - Paragon Online Highlights",
        "2025-01-04_09-04-43.jpg": "Post Sweden Gaming Highlights - Tekken 8",
        "2025-01-04_09-05-01.jpg": "Tekken 8 Patch 1.04 Changes Deep Dive",
        "2025-01-04_09-05-12.jpg": "Paragon Online - With Great Power Mogging",
        "2025-01-04_09-05-21.jpg": "Record Breaking 4-Peat Champion Story",
        "2025-01-04_09-05-36.jpg": "Mogging Like a Kingpin - LUYG Series",
        "2025-01-04_09-05-52.jpg": "Built to Destroy - Paragon Online Jack-8",
        "2025-01-04_09-06-04.jpg": "25K Review vs Alisa & Claudio Legends",
        "Arslan 1.jpg": "Arslan Ash vs CBM Day 1 - Tekken 8",
        "Arslan 2.jpg": "Arslan Ash vs Middle East Tekken Challenge",
        "Arslan 3.jpg": "Red Bull Golden Letter - Arslan Ash Highlights",
        "Arslan 4.jpg": "Mexico Vlog - Arslan Ash Visiting World Wonders",
        "Arslan 5.jpg": "Esports World Cup - Atif vs Ulsan Grand Finals",
        "Arslan 55.jpg": "Arslan Ash vs Kuma EXE - Impossible Match",
        "Arslan 64.jpg": "Esports World Cup - Arslan Ash Journey",
        "Arslan podcast.jpg": "Arslan Ash & Knee Podcast - Who Inspired You?",
        "Arslan pubg.jpg": "Arslan Ash Plays PUBG - 6th Anniversary Update",
        "Arslan rapid fire.jpg": "Arslan Ash & Knee Rapid Fire - Korea or Pakistan?",
        "Arslan tierlist.jpg": "Ultimate Tekken 8 Character Tier List by Arslan Ash",
        "Arslan tournament.jpg": "Dreamhack Top 8 - Arslan Ash vs Mulgold",
        "Arslan vs abood.jpg": "Best Law Player in KSA - Arslan vs Abood Challenge",
        "Arslan vs knee.jpg": "The Legend Match - Arslan Ash vs Knee Replay",
        "Arslan.jpg": "New Character Reveal & First Look - Arslan Ash",
        "Atif 0.jpg": "Real?? I Fought LowTierGod Online - Atif Butt",
        "Atif 1.jpg": "Team Falcons Atif - 2024 Year in Review",
        "Atif 2.jpg": "Why I Fear Heera Malik - Atif Butt Analysis",
        "Atif.jpg": "Battle of Wavu Wavu - Atif vs Heera Malik Finals",
        "new1.jpeg": "Premium Production Thumbnail",
        "new2.jpeg": "Premium Production Thumbnail",
        "new3.jpeg": "Premium Production Thumbnail",
        "new4.jpeg": "Premium Production Thumbnail",
        "new5.jpeg": "Premium Production Thumbnail",
        "new6.jpeg": "Premium Production Thumbnail",
        "new7.jpeg": "Premium Production Thumbnail",
        "new8.jpeg": "Premium Production Thumbnail",
        "new9.jpeg": "Premium Production Thumbnail",
        "new10.jpeg": "Premium Production Thumbnail",
        "new11.jpeg": "Premium Production Thumbnail",
        "new12.jpeg": "Premium Production Thumbnail",
        "new13.jpeg": "Premium Production Thumbnail",
        "new14.jpeg": "Premium Production Thumbnail",
        "new15.jpeg": "Premium Production Thumbnail",
        "new16.jpeg": "Premium Production Thumbnail",
        "new17.jpeg": "Premium Production Thumbnail",
        "new18.jpeg": "Premium Production Thumbnail",
        "new19.jpeg": "Premium Production Thumbnail",
        "new20.jpeg": "Premium Production Thumbnail",
        "new21.jpeg": "Premium Production Thumbnail",
        "new22.jpeg": "Premium Production Thumbnail",
        "new23.jpeg": "Premium Production Thumbnail",
        "new24.jpeg": "Premium Production Thumbnail",
        "new25.jpeg": "Premium Production Thumbnail"
    };

    const shortVideoNames = {
        "giraf-shoes-adidas.mp4": "GIRAF Shoes Adidas Commercial",
        "keyboard-video.mp4": "Mechanical Keyboard Showcase",
        "anker-tech-review.mp4": "Anker Tech Review - Ali Sufyan",
        "event-video.mp4": "Production Excellence Showcase",
        "short-interview.mp4": "Short Interview Feature"
    };

    const longVideoNames = {
        "long.mp4": "Cinematic Brand Story",
        "longg.mp4": "Product Showcase Documentary",
        "videoplayback.mp4": "Premium Cinematic Feature"
    };

    const getItemsToDisplay = () => {
        if (activeTab === 'Posters') return posters;
        if (activeTab === 'Thumbnails') return thumbnails;
        if (activeTab === 'Shorts') return shortVideos;
        if (activeTab === 'Longs') return longVideos;
        return [];
    };

    const getFolderPath = () => {
        if (activeTab === 'Posters') return '/assets/Posters';
        if (activeTab === 'Thumbnails') return '/assets/Thumbnails';
        if (activeTab === 'Shorts') return '/assets/short-videos';
        if (activeTab === 'Longs') return '/assets/long-videos';
        return '';
    };

    const itemsToDisplay = getItemsToDisplay();
    const folderPath = getFolderPath();

    return (
        <section className="portfolio container page-shell">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="section-header"
                style={{ marginBottom: '40px' }}
            >
                <span className="section-tag">Intelligence Network</span>
                <h2>Our Digital <span className="gradient-text">Frontier</span></h2>
                <p>Explore high-fidelity productions engineered for maximum audience retention.</p>
            </motion.div>

            {/* Tab Selector */}
            <div className="portfolio-tabs" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '40px' }}>
                <button
                    onClick={() => setActiveTab('Posters')}
                    className={`btn-primary ${activeTab !== 'Posters' ? 'btn-secondary' : ''}`}
                    style={{ transition: 'all 0.3s' }}
                >
                    Posters Showcase
                </button>
                <button
                    onClick={() => setActiveTab('Thumbnails')}
                    className={`btn-primary ${activeTab !== 'Thumbnails' ? 'btn-secondary' : ''}`}
                    style={{ transition: 'all 0.3s' }}
                >
                    High-CTR Thumbnails
                </button>
                <button
                    onClick={() => setActiveTab('Shorts')}
                    className={`btn-primary ${activeTab !== 'Shorts' ? 'btn-secondary' : ''}`}
                    style={{ transition: 'all 0.3s' }}
                >
                    Short Form Videos
                </button>
                <button
                    onClick={() => setActiveTab('Longs')}
                    className={`btn-primary ${activeTab !== 'Longs' ? 'btn-secondary' : ''}`}
                    style={{ transition: 'all 0.3s' }}
                >
                    Long Form Videos
                </button>
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                    variants={containerVariants}
                    className="portfolio-grid"
                    style={activeTab === 'Shorts' || activeTab === 'Longs' ? { 
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px',
                        maxWidth: activeTab === 'Longs' ? '1200px' : '960px',
                        margin: '0 auto'
                    } : { 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                        gap: '30px'
                    }}
                >
                    {itemsToDisplay.map((item, index) => (
                        <motion.div 
                            variants={itemVariants} 
                            className="portfolio-item glass-card" 
                            key={index} 
                            style={{ 
                                height: activeTab === 'Posters' ? '450px' : (activeTab === 'Shorts' ? '500px' : (activeTab === 'Longs' ? '280px' : '280px')), 
                                width: activeTab === 'Shorts' ? '280px' : (activeTab === 'Longs' ? '500px' : 'auto'),
                                flexShrink: (activeTab === 'Shorts' || activeTab === 'Longs') ? 0 : undefined,
                                borderRadius: '16px', 
                                overflow: 'hidden', 
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                position: 'relative'
                            }}
                        >
                            {activeTab === 'Shorts' || activeTab === 'Longs' ? (
                                <>
                                    <video
                                        ref={(el) => { videoRefs.current[index] = el; }}
                                        src={`${folderPath}/${item}`}
                                        loop
                                        playsInline
                                        onMouseEnter={(e) => {
                                            const video = e.target;
                                            video.muted = false;
                                            video.play().catch(() => {
                                                // Fallback to muted if browser blocks audio autoplay
                                                video.muted = true;
                                                video.play();
                                            });
                                        }}
                                        onMouseLeave={(e) => {
                                            const video = e.target;
                                            video.pause();
                                            video.currentTime = 0;
                                            setPlayingIndex(null);
                                        }}
                                        onClick={(e) => handleVideoTap(e, index)}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', display: 'block' }}
                                    />
                                    {/* Mobile tap-to-play button — hidden on desktop via CSS */}
                                    <div
                                        className="video-tap-btn"
                                        onClick={(e) => handleVideoTap(e, index)}
                                        style={{
                                            position: 'absolute',
                                            bottom: '70px',
                                            right: '16px',
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.6)',
                                            backdropFilter: 'blur(8px)',
                                            border: '2px solid rgba(255,255,255,0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 10,
                                            transition: 'opacity 0.3s ease',
                                            opacity: playingIndex === index ? 0 : 1,
                                            pointerEvents: 'auto'
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                    </div>
                                </>
                            ) : (
                                <img
                                    src={`${folderPath}/${item}`}
                                    alt={`${activeTab} ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                />
                            )}
                            
                                <div className="portfolio-overlay" style={{ 
                                    padding: '20px', 
                                    pointerEvents: 'none',
                                    background: (activeTab === 'Shorts' || activeTab === 'Longs') ? 'linear-gradient(to top, rgba(10, 11, 30, 0.95) 0%, rgba(10, 11, 30, 0.4) 50%, transparent 100%)' : ''
                                }}>
                                    <span style={{ fontSize: '0.75rem', marginBottom: '5px' }}>{(activeTab === 'Shorts' || activeTab === 'Longs') ? 'Video' : activeTab} Format</span>
                                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>
                                        {activeTab === 'Posters' ? (posterNames[item] || item.replace(/\.[^/.]+$/, "")) : 
                                         activeTab === 'Thumbnails' ? (thumbnailNames[item] || item.replace(/\.[^/.]+$/, "")) :
                                         activeTab === 'Shorts' ? (shortVideoNames[item] || item.replace(/\.[^/.]+$/, "")) :
                                         (longVideoNames[item] || item.replace(/\.[^/.]+$/, ""))}
                                    </h3>
                                </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
