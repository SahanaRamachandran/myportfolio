import React, { useState } from 'react';
import '../ContactPage.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Submitted:', formData);
  };
  
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      
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
      
      <div className="map">
    
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.929061119735!2d77.00473841479812!3d10.994833862070123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3d5ef2a37f533%3A0x37a9e44d227cc937!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1686591465892!5m2!1sen!2sus"
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
