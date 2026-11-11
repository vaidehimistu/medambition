import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} MedAmbition OverSeas. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
