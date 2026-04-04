import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gamepad2, Swords, Crown, Image, Layers, Megaphone } from 'lucide-react';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="features container page-shell">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <span className="section-tag">Core Capabilities</span>
                <h1 className="page-title">Elevating the <span className="gradient-text">Ecosystem</span></h1>
                <p className="page-intro" style={{ maxWidth: '600px', margin: '0 auto' }}>We deliver an interconnected suite of creative tools designed strictly for elite performance.</p>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="features-grid"
            >
                <motion.div variants={itemVariants} className="feature-card glass-card">
                    <div className="feature-icon"><Sparkles size={32} color="var(--accent-cyan)" /></div>
                    <h3>Video Editing</h3>
                    <p>Precision-cut, high-retention video content engineered for algorithmic success on YouTube, TikTok, and Reels.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="feature-card glass-card">
                    <div className="feature-icon"><Gamepad2 size={32} color="var(--accent-purple)" /></div>
                    <h3>Graphic Designing</h3>
                    <p>Hyper-visual thumbnails, stream packages, and brand identity assets designed to dominate the digital feed.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="feature-card glass-card">
                    <div className="feature-icon"><Swords size={32} color="var(--accent-blue)" /></div>
                    <h3>Script Writing</h3>
                    <p>Engaging, retention-optimized scripting tailored for modern media pacing and psychological hooks.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="feature-card glass-card">
                    <div className="feature-icon"><Crown size={32} color="var(--accent-cyan)" /></div>
                    <h3>Content Creation</h3>
                    <p>End-to-end production of viral content frameworks, operating seamlessly within the esports and gaming void.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="feature-card glass-card">
                    <div className="feature-icon"><Image size={32} color="var(--accent-purple)" /></div>
                    <h3>Thumbnail Designing</h3>
                    <p>Algorithm-breaking thumbnails guaranteed to drastically increase your Click-Through Rate.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="feature-card glass-card">
                    <div className="feature-icon"><Layers size={32} color="var(--accent-blue)" /></div>
                    <h3>Poster Designing</h3>
                    <p>High-impact promotional posters optimized for esports tournaments and major brand announcements.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="feature-card glass-card">
                    <div className="feature-icon"><Megaphone size={32} color="var(--accent-cyan)" /></div>
                    <h3>PR Management</h3>
                    <p>Strategic reputation management, community building, and brand communication scaling.</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Services;
