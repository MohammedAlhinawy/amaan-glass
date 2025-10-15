import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.PNG';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      const toggleButton = document.querySelector('.navbar-toggle');
      
      // Close mobile menu if open and click is outside
      if (isMenuOpen && !navbar.contains(event.target) && event.target !== toggleButton) {
        closeMenu();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Auto Glass Logo" />
          <span>Auto Glass</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="navbar-links">
          <Link to="/" className={`navbar-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`navbar-link ${isActive('/about')}`}>About Us</Link>
          <Link to="/services" className={`navbar-link ${isActive('/services')}`}>Services</Link>
          <Link to="/gallery" className={`navbar-link ${isActive('/gallery')}`}>Gallery</Link>
          <Link to="/contact" className={`navbar-link ${isActive('/contact')}`}>Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-mobile-links">
          <Link to="/" className={`navbar-mobile-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`navbar-mobile-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
          <Link to="/services" className={`navbar-mobile-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
          <Link to="/gallery" className={`navbar-mobile-link ${isActive('/gallery')}`} onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" className={`navbar-mobile-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
