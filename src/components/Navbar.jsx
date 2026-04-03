import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, pointerEvents: 'none' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', paddingTop: '24px', position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`nav-brand ${isScrolled ? 'nav-brand-scrolled' : ''}`}
                    style={{ pointerEvents: 'auto', marginLeft: '-2.5rem' }}
                >
                    <Link to="/" onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                        <motion.img 
                            src="/logo.png" 
                            alt="Patronum Media Logo" 
                            style={{ height: '75px', objectFit: 'contain' }}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'white', lineHeight: '0.9', letterSpacing: '1px' }}>PATRONUM MEDIA</span>
                            <span className="gradient-text" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '3px', marginTop: '6px' }}>PATRONUMX ECOSYSTEM</span>
                        </div>
                    </Link>
                </motion.div>

                <motion.nav
                    className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
                    initial={{ opacity: 0, y: -20, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ pointerEvents: 'auto' }}
                >
                    <ul className="nav-links">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/" onClick={scrollToTop}>Home</Link>
                        </li>
                        <li className={location.pathname === '/portfolio' ? 'active' : ''}>
                            <Link to="/portfolio" onClick={scrollToTop}>Portfolio</Link>
                        </li>
                        <li className={location.pathname === '/talent' ? 'active' : ''}>
                            <Link to="/talent" onClick={scrollToTop}>Talent</Link>
                        </li>
                        <li className={location.pathname === '/services' ? 'active' : ''}>
                            <Link to="/services" onClick={scrollToTop}>Services</Link>
                        </li>
                        <li className={location.pathname === '/about' ? 'active' : ''}>
                            <Link to="/about" onClick={scrollToTop}>About Us</Link>
                        </li>
                        <li className={location.pathname === '/contact' ? 'active' : ''}>
                            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
                        </li>
                    </ul>
                </motion.nav>
            </div>
        </header>
    );
};

export default Navbar;
