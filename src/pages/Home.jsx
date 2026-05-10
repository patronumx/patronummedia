import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Gamepad2, Swords, Target, Crown, Users, Zap, Heart, Shield, Globe, Award } from 'lucide-react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import ThumbnailCarousel from '../components/ThumbnailCarousel';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } }
    };

    return (
        <div style={{ overflow: 'hidden' }}>
            <section className="hero" style={{ paddingTop: '180px', paddingBottom: '120px' }}>
                <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.div variants={itemVariants} className="hero-badge">
                        <span>Pioneering the Digital Nexus</span>
                    </motion.div>
                    
                    <motion.h1 variants={itemVariants}>
                        Elevating Esports <span className="gradient-text">Talent.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-description" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        We connect world-class phenoms with international opportunities, bridging the gap between raw skill and global recognition.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
                        <ThumbnailCarousel />
                    </motion.div>

                    <motion.div variants={itemVariants} className="hero-buttons">
                        <Link to="/contact">
                            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 40px' }}>
                                Collaborate With Us <ArrowRight size={20} />
                            </button>
                        </Link>
                        <Link to="/portfolio">
                            <button className="btn-secondary" style={{ padding: '16px 40px' }}>Explore Portfolio</button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Infinite Scrolling Marquee */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    className="hero-marquee"
                >
                    <div className="hero-marquee-track">
                        <Marquee gradient={false} speed={50}>
                            <div className="hero-logos">
                                <div className="hero-logo-item">
                                    <img src="/logos/valorant.png" alt="Valorant" className="hero-logo hero-logo-sm" />
                                </div>
                                <div className="hero-logo-item">
                                    <img src="/logos/League_of_legends.png" alt="League of Legends" className="hero-logo hero-logo-sm" />
                                </div>
                                <div className="hero-logo-item">
                                    <img src="/logos/PUBG_mobile.png" alt="PUBG Mobile" className="hero-logo hero-logo-sm" />
                                </div>
                                <div className="hero-logo-item">
                                    <img src="/logos/Mobile_legends.png" alt="Mobile Legends" className="hero-logo hero-logo-lg" />
                                </div>
                                <div className="hero-logo-item">
                                    <img src="/logos/Fifa.png" alt="FIFA" className="hero-logo hero-logo-sm" />
                                </div>
                                <div className="hero-logo-item">
                                    <img src="/logos/Freefire.png" alt="Free Fire" className="hero-logo hero-logo-xs" />
                                </div>
                                <div className="hero-logo-item">
                                    <img src="/logos/Honor_of_kings.png" alt="Honor of Kings" className="hero-logo hero-logo-lg" />
                                </div>
                                <div className="hero-logo-item">
                                    <img src="/logos/TEKKEN.png" alt="Tekken" className="hero-logo hero-logo-lg" />
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </motion.div>
            </section>

            {/* Our Operations Section */}
            <section className="services home-section">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="home-section-header"
                    >
                        <h2 className="home-section-title">What We <span className="gradient-text">Execute</span></h2>
                        <p className="home-section-intro">
                            We illuminate the passion and grind behind every match, transforming competitive milestones into unforgettable digital narratives.
                        </p>
                    </motion.div>

                    <div className="home-services-grid">
                        {[
                            { title: 'Talent Management', desc: 'Guiding top esports athletes with comprehensive career stewardship, ensuring they focus on winning while we handle the business.', icon: <Users size={32} color="var(--accent-purple)" /> },
                            { title: 'Brand Amplification', desc: 'Constructing robust personal brands and identity assets that resonate deeply within the gaming community.', icon: <Target size={32} color="var(--accent-cyan)" /> },
                            { title: 'Strategic Opportunities', desc: 'Forging lucrative partnerships by connecting elite players with top-tier global teams, sponsors, and lifestyle brands.', icon: <Globe size={32} color="var(--accent-blue)" /> },
                            { title: 'Media Production', desc: 'End-to-end creation of high-impact visuals and narratives, perfectly framing your journey for the digital age.', icon: <Zap size={32} color="var(--accent-purple)" /> },
                            { title: 'Event Orchestration', desc: 'Designing and executing premium competitive events and tournaments that captivate global audiences and define new industry benchmarks.', icon: <Swords size={32} color="var(--accent-cyan)" /> },
                            { title: 'Content Syndication', desc: 'Maximizing the distribution and reach of digital assets across the global nexus through intelligent, algorithmic optimization.', icon: <Globe size={32} color="var(--accent-blue)" /> }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="glass-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                style={{ padding: '50px 40px', textAlign: 'left', background: 'rgba(26, 16, 43, 0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px' }}
                            >
                                <div style={{ marginBottom: '30px', background: 'rgba(255, 255, 255, 0.05)', display: 'inline-flex', padding: '18px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'white', fontWeight: 'bold' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Brands Choose Us Section */}
            <section className="home-brands-section">
                <div className="container">
                    <div className="home-brands-shell">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="home-brands-copy"
                        >
                            <h2 className="home-section-title">Why Brands <br/><span className="gradient-text">Partner With Us</span></h2>
                            <p className="home-section-intro home-brands-intro">
                                We don't just secure sponsorships; we engineer integrated cultural moments. Discover how we elevate brand visibility through authentic gaming connections.
                            </p>
                        </motion.div>

                        <div className="home-brands-grid">
                            {[
                                { title: 'Genuine Connections', desc: 'We align brands with passionate esports athletes, forging collaborations built on mutual trust and shared values that truly resonate with fans.', icon: <Heart size={28} color="var(--accent-purple)" /> },
                                { title: 'Innovative Campaigns', desc: 'Transforming sponsorships into compelling digital narratives. Our creative methodologies help your brand stand out in a saturated digital arena.', icon: <Sparkles size={28} color="var(--accent-cyan)" /> },
                                { title: 'Synergistic Partnerships', desc: 'We treat partnerships as allied missions. We work intrinsically with players to embed your brand into the culture, ensuring maximum impact over mere exposure.', icon: <Shield size={28} color="var(--accent-blue)" /> },
                                { title: 'Gaming DNA', desc: 'We live and breathe the game. Our profound roots in the esports ecosystem mean we understand exactly what drives ultimate fan engagement.', icon: <Gamepad2 size={28} color="var(--accent-purple)" /> }
                            ].map((feature, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid rgba(255,255,255,0.1)' }}
                                    className="hover-border-gradient"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
                                            {feature.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.3rem', color: 'white' }}>{feature.title}</h3>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="home-cta-section">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card home-cta-card"
                >
                    <Award size={48} color="var(--accent-cyan)" style={{ margin: '0 auto 24px auto' }} />
                    <h2 className="home-cta-title">Ready to Build Your Legacy?</h2>
                    <p className="home-cta-text">Join the elite ranks of players and brands shaping the future of competitive gaming.</p>
                    <Link to="/contact">
                        <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', borderRadius: '50px' }}>
                            Start the Journey
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
