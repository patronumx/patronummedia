import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="container page-shell">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="section-tag">About Us</span>
                <h1 className="page-title page-title-lg">We Are <span className="gradient-text">Patronum Media</span></h1>

                <div className="glass-card page-card page-card-spacious">
                    <p className="page-lead" style={{ marginBottom: '24px' }}>
                        Born in the digital void, Patronum Media is a collective of elite creators, strategists, and technologists.
                        We specialize in crafting stories and building communities for the titans of the esports industry.
                    </p>
                    <p className="page-lead">
                        Our mission is to push the boundaries of digital content, optimizing for engagement, retention, and algorithmic dominance.
                        We don't just follow the meta; we define it. From high-octane cinematic edits to predictive algorithmic insights,
                        our protocol ensures your brand stays at the forefront of the ecosystem.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
