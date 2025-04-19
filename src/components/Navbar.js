import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import "../style/Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <Link to="home">
        <h3>Royal kludge</h3>
      </Link>
      <nav>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="product" smooth={true} duration={500}>Product</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
      </nav>
    </header>
  );
};

export default Navbar;

