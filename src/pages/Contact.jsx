import React, { useState } from 'react';
import '../components/LocationMap.css';
import { ImWhatsapp } from 'react-icons/im';
import { FaInstagram } from "react-icons/fa6";
import { GrMap } from "react-icons/gr";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the WhatsApp message
    const { name, email, phone, message } = formData;
    const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/255699343939?text=${whatsappMessage}`, '_blank');
    
    // Optional: Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container text-center">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-text">
            Get in touch with our team for all your car glass needs
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <GrMap />
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-item-title">Visit Us</h3>
                    <p className="contact-item-text">Kariakoo, Dar-es-Salaam, Tanzania</p>
                    <a 
                      href="https://maps.app.goo.gl/7dWVChfvfCyjAPAn8?g_st=com.google.maps.preview.copy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-link"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <ImWhatsapp />
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-item-title">WhatsApp</h3>
                    <p className="contact-item-text">+255-699-343939</p>
                    <a 
                      href="https://wa.me/255699343939?text=Hello%20Amaan%20Glass%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-link"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaInstagram />
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-item-title">Instagram</h3>
                    <p className="contact-item-text">amaan_car_glass</p>
                    <a 
                        href="https://www.instagram.com/amaan_car_glass?igsh=MWN2dHY4YXBncDk1" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link"
                      >
                        Follow Us on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <form 
                action="https://formsubmit.co/brainiac.t.s.m@gmail.com" 
                method="POST" 
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="thankyou" />
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name <span className="required-mark">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required-mark">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required-mark">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-textarea"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="form-submit-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    const whatsappUrl = `https://wa.me/255699343939?text=Hello%20Amaan%20Glass%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.%0AName:%20${formData.name}%0AEmail:%20${formData.email}%0APhone%20Number:%20${formData.phone}%0AMessage:%20${formData.message}`;
                    window.open(whatsappUrl);
                  }}
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Container */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Find Us</h2>
          <div className="location-container">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8775889648695!2d39.27264947515878!3d-6.7924109940621075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b03a3a478c5%3A0x698f0deec121192f!2sKariakoo%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1699958541638!5m2!1sen!2stz" 
                width="600" 
                height="450" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
            <div className="location-info">
              <h3 className="location-title">Our Workshop Location</h3>
              <p className="location-address">Kariakoo, Dar-es-Salaam, Tanzania</p>
              <p className="location-hours"><strong>Working Hours:</strong></p>
              <ul className="hours-list">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
              <a 
                href="https://maps.app.goo.gl/7dWVChfvfCyjAPAn8?g_st=com.google.maps.preview.copy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Get Directions</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="btn-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
