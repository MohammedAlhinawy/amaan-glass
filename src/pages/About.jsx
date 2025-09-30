import React from 'react';
import workshopImg from '../assets/images/workshop.jpg';

const About = () => {
  return (
    <div>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container text-center">
          <h1 className="about-hero-title">About Amaan Glass</h1>
          <p className="about-hero-text">
            Your trusted partner for all car mirror and windshield needs in Kariakoo, Dar-es-Salaam.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Our Story</h2>
              <p className="about-text">
                Amaan Glass was established with a mission to provide high-quality car glass products and repair services to vehicle owners in Dar-es-Salaam. Over the years, we have built a reputation for excellence and reliability in the automotive glass industry.
              </p>
              <p className="about-text">
                Located in the heart of Kariakoo, we have become a trusted name for car owners looking for quality windshields and mirror repair services. Our commitment to quality and customer satisfaction has made us a preferred choice for many car owners in the region.
              </p>
              <p className="about-text">
                We take pride in our team of skilled technicians who have years of experience in handling various types of car glass repairs and replacements. Their expertise ensures that every job is done with precision and care.
              </p>
            </div>
            <div className="about-image-container">
              <img 
                src={workshopImg}
                alt="Amaan Glass workshop"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Our Mission & Values</h2>
          </div>
          <div className="mission-values-grid">
            <div className="mission-card">
              <h3 className="mission-card-title">Our Mission</h3>
              <p className="mission-card-text">
                To provide high-quality car glass products and services that ensure the safety and satisfaction of our customers. We aim to be the leading car glass specialist in Dar-es-Salaam, known for our reliability, expertise, and customer-focused approach.
              </p>
            </div>
            <div className="values-card">
              <h3 className="values-card-title">Our Values</h3>
              <ul className="values-list">
                <li className="value-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="value-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Quality:</strong> We use only the highest quality materials for all our products and services.</span>
                </li>
                <li className="value-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="value-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Integrity:</strong> We conduct our business with honesty and transparency.</span>
                </li>
                <li className="value-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="value-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Customer Focus:</strong> We prioritize customer satisfaction in everything we do.</span>
                </li>
                <li className="value-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="value-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Expertise:</strong> We continuously improve our skills and knowledge to provide the best service.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Experience */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Experience</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <p className="stat-text">Years of Experience</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <p className="stat-text">Satisfied Customers</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <p className="stat-text">Car Models Serviced</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Experience Our Quality Service?</h2>
          <p className="cta-text">
            Visit our shop in Kariakoo or contact us today to get started with your car glass needs.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://maps.app.goo.gl/7dWVChfvfCyjAPAn8?g_st=com.google.maps.preview.copy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Visit Our Location
            </a>
            <a 
              href="https://wa.me/255699343939" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
