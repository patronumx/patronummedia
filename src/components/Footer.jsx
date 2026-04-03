import React from 'react';
import { Zap, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" style={{
            position: 'relative',
            zIndex: 10,
            background: 'rgba(13, 8, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '40px 0 10px 0',
            marginTop: 'auto',
            width: '100%'
        }}>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <img src="/logo.png" alt="Patronum Media Logo" style={{ height: '50px', objectFit: 'contain' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>PATRONUM MEDIA</span>
                                <span className="gradient-text" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', marginTop: '4px' }}>PATRONUMX ECOSYSTEM</span>
                            </div>
                        </div>
                        <p>Engineering the future of esports content. From algorithmic optimization to hyper-visual executions, we operate seamlessly within the digital void.</p>
                        <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
                            <a href="mailto:patronumgg@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)' }}>
                                <Mail size={20} /> patronumgg@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4>Systems</h4>
                        <ul>
                            <li><Link to="/about">About Protocol</Link></li>
                            <li><Link to="/portfolio">Our Archives</Link></li>
                            <li><Link to="/services">Capabilities</Link></li>
                            <li><Link to="/contact">Communicate</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-group" style={{ maxWidth: '300px' }}>
                        <h4>Start a Conversation</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem' }}>Let&apos;s discuss partnerships, talent opportunities, and high-impact media collaborations.</p>
                        <Link to="/contact">
                            <button className="btn-primary" style={{ width: '100%', padding: '12px' }}>Contact Us</button>
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} PATRONUMX  Framework. All systems operational.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
