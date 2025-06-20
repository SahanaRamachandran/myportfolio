import React, { useState } from 'react';
import '../ContactPage.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_bpumw4m';
const TEMPLATE_ID = 'template_ai312';
const PUBLIC_KEY = 'Qk_NjlJAR5Am8N9sp';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { ...form, title: "Contact from Portfolio" },
      PUBLIC_KEY
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-page">
      <h1 className="section-title">Contact Me</h1>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+91 8056655111</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>sahanaramachandran2003@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h3>Address</h3>
          <p>Coimbatore-641020, Tamil Nadu, India</p>
        </div>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Write me a message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Send Message</button>
        {status && <p style={{ color: status.includes('success') ? '#4caf50' : '#ff5757', marginTop: '10px' }}>{status}</p>}
      </form>
    </div>
  );
};

export default ContactPage;
