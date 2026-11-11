import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // You can integrate backend or email service here
  };

  return (
    <section id="contact" className="contact">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" placeholder="Your Email" type="email" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
