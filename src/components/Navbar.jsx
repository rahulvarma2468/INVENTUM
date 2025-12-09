import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import './Navbar.css';

function Navbar({ showBack = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/technical-events', label: 'Technical' },
    { path: '/non-technical-events', label: 'Non-Technical' },
    { path: '/memories', label: 'Memories' },
    { path: '/contact', label: 'Contact' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">INVENTUM</span>
          <span className="brand-year">2K26</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-desktop">
          {showBack ? (
            <Link to="/dashboard" className="nav-link nav-back">
              ← Back to the DOWNSIDE UP
            </Link>
          ) : (
            navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="navbar-mobile-overlay"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="mobile-menu-content">
                {showBack ? (
                  <Link
                    to="/dashboard"
                    className="mobile-nav-link nav-back"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ← Back to the DOWNSIDE UP
                  </Link>
                ) : (
                  navLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  showBack: PropTypes.bool
};
