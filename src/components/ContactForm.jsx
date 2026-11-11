import React from 'react';
import './ContactForm.css'; // Make sure this file exists

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <h3>Contact Us</h3>
      <form
        action="https://formspree.io/f/mrbkrnlo" // Replace with your Formspree endpoint
        method="POST"
      >
        {/* Optional spam protection field (honeypot) */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
