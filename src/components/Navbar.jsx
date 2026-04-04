import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className="site-header">
            <div className="container nav-shell">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`nav-brand ${isScrolled ? 'nav-brand-scrolled' : ''}`}
                >
                    <Link to="/" onClick={scrollToTop} className="nav-brand-link">
                        <motion.img 
                            src="/logo.png" 
                            alt="Patronum Media Logo" 
                            className="nav-brand-logo"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                        <div className="nav-brand-text">
                            <span className="nav-brand-title">PATRONUM MEDIA</span>
                            <span className="gradient-text nav-brand-subtitle">PATRONUMX ECOSYSTEM</span>
                        </div>
                    </Link>
                </motion.div>

                <button
                    type="button"
                    className={`mobile-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <motion.nav
                    className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isMenuOpen ? 'navbar-mobile-open' : ''}`}
                    initial={{ opacity: 0, y: -20, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
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
