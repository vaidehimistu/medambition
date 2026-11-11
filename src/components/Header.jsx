import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const textRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Optional subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${y * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🌟 Top Black Bar with animated text */}
      <div className="top-bar">
        <span ref={textRef} className="animated-text">
          Admissions Open for <span className="highlight">2025</span> | Complete Handholding for NEET Counselling Guidance
        </span>

        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-link fb"><FaFacebookF /></a>
          <span className="separator">|</span>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link ig"><FaInstagram /></a>
          <span className="separator">|</span>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="social-link tw"><FaTwitter /></a>
          <span className="separator">|</span>
          <a href="https://wa.me/919742809502" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="social-link wa"><FaWhatsapp /></a>
          <span className="separator">|</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link li"><FaLinkedinIn /></a>
          <span className="separator">|</span>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" className="social-link yt"><FaYoutube /></a>

          {/* ✅ Book Free Session Button */}
          <button className="book-session-btn" onClick={() => setShowForm(true)}>Book a Free Session</button>
        </div>
      </div>

      {/* 🌟 Main Header */}
      <header className="header-bar">
        <div className="logo-container">
          <img src={logo} alt="MedAmbition Logo" className="site-logo" />
        </div>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/mbbs-russia">MBBS Russia</NavLink>
        </nav>

        <div className="call-now">
          <a href="tel:+91-9742809502"><FaPhoneAlt className="phone-icon" /> Call Now: 9742809502</a>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      </header>

      {/* ✅ Modal Form */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Book Your Free Session</h2>
              <button className="modal-close" onClick={() => setShowForm(false)}><X size={24} /></button>
            </div>
            <div className="modal-body">
              <p>Secure your NEET Success</p>
              <form>
                <label>UG/PG:<select><option value="">Select</option><option value="UG">UG</option><option value="PG">PG</option></select></label>
                <label>Enter Name:<input type="text" placeholder="Your Name" /></label>
                <label>+91:<input type="tel" placeholder="Phone Number" /></label>
                <label>Enter Your Mail:<input type="email" placeholder="Email" /></label>
                <label>Select State:<select><option value="">Select State</option><option value="State1">State 1</option><option value="State2">State 2</option></select></label>
                <label>Select Session Type:<select><option value="">Select</option><option value="Office Visit">Office Visit</option><option value="On Call">On Call</option><option value="Video Call">Video Call</option></select></label>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
