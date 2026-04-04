import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('Posters');

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
        "20250104_090915.jpg", "20250104_090933.jpg", "Arslan ash tournament.jpg", "jonn.jpg"
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
        "Arslan vs knee.jpg", "Arslan.jpg", "Atif 0.jpg", "Atif 1.jpg", "Atif 2.jpg", "Atif.jpg"
    ];

    const posterNames = {
        "20250104_090803.jpg": "The Jon - Champion of TGU Poster",
        "20250104_090832.jpg": "Tekken World Tour 2024 - The Jon Finalist",
        "20250104_090850.jpg": "Usama - Second Impact Champion",
        "20250104_090915.jpg": "Capetown Showdown Runner Up Tribute",
        "20250104_090933.jpg": "7th Place at First Knockout Tournament",
        "Arslan ash tournament.jpg": "Pakistan vs Saudi Tekken 8 - Arslan Ash Highlights",
        "jonn.jpg": "The Jon - Champion of TGU"
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
        "Atif.jpg": "Battle of Wavu Wavu - Atif vs Heera Malik Finals"
    };

    const itemsToDisplay = activeTab === 'Posters' ? posters : thumbnails;
    const folderPath = activeTab === 'Posters' ? '/assets/Posters' : '/assets/Thumbnails';

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
            <div className="portfolio-tabs">
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
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                    variants={containerVariants}
                    className="portfolio-grid"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}
                >
                    {itemsToDisplay.map((item, index) => (
                        <motion.div variants={itemVariants} className="portfolio-item glass-card" key={index} style={{ height: activeTab === 'Posters' ? '450px' : '280px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <img
                                src={`${folderPath}/${item}`}
                                alt={`${activeTab} ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            />
                            <div className="portfolio-overlay" style={{ padding: '20px' }}>
                                <span style={{ fontSize: '0.75rem', marginBottom: '5px' }}>{activeTab} Format</span>
                                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>
                                    {activeTab === 'Posters' ? (posterNames[item] || item.replace('.jpg', '')) : (thumbnailNames[item] || item.replace('.jpg', ''))}
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
