import React from 'react';
import { Link } from 'react-router-dom';
import windshieldImg from '../assets/images/windshield.jpg';
import windRangerImg from '../assets/images/windRanger.jpg';

const Services = () => {
  // Inline style for highlight class
  const highlightStyle = `
    .service-subtitle.highlight {
      background: linear-gradient(90deg, #e0f7fa 0%, #b2ebf2 100%);
      color: #12475c;
      font-weight: bold;
      padding: 0.5rem 1.25rem;
      border-radius: 0.5rem;
      display: inline-block;
      margin-bottom: 1rem;
    }
    ul.service-features {
      background: #f7fafc;
      padding: 1.5rem 2rem;
      border-radius: 1rem;
      margin: 1rem 0 2rem 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: 0 2px 12px rgba(18, 140, 126, 0.07);
    }
    .service-feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.08rem;
      color: #12475c;
    }
    .service-feature-item svg {
      color: #1a5f7a;
      flex-shrink: 0;
    }
  `;
  return (
    <div>
      <style>{highlightStyle}</style>
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="container text-center">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-text">
            Professional car mirror and windshield services for all vehicle types
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section">
        <div className="container">
          <div className="service-list">
            {/* Windshield Sales */}
            <div className="service-item">
              <div className="service-content content-first">
                <h2 className="service-title">Windshield Sales</h2>
                <p className="service-description">
                  At Auto Glass, we offer a comprehensive range of front and rear windshields for all car types and sizes. Our inventory includes windshields for popular makes and models, ensuring that you find the perfect fit for your vehicle.
                </p>
                <p className="service-description">
                  All our glass products meet the highest industry standards for safety and quality, giving you peace of mind when you're on the road.
                </p>
                <h3 className="service-subtitle highlight">What We Offer:</h3>
                <ul className="service-features">
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Front windshields for all car models</span>
                  </li>
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rear windshields with defrosting elements</span>
                  </li>
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom-sized windshields for special vehicles</span>
                  </li>
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tinted glass options available</span>
                  </li>
                </ul>
                
              </div>
              <div className="service-image">
                <img 
                  src={windRangerImg}
                  alt="Windshield replacement"
                  className="service-img"
                />
              </div>
            </div>
            
            {/* Mirror Repair */}
            <div className="service-item">
              <div className="service-image">
                <img 
                  src={windshieldImg}
                  alt="Car side mirror"
                  className="service-img"
                />
              </div>
              <div className="service-content">
                <h2 className="service-title">Mirror Repair</h2>
                <p className="service-description">
                  Our expert technicians specialize in repairing and replacing car mirrors of all types. Whether you need a quick fix or a complete replacement, we have the skills and equipment to get the job done right.
                </p>
                <p className="service-description">
                  We understand that functioning mirrors are essential for safe driving, which is why we prioritize quality and precision in all our repair services.
                </p>
                <h3 className="service-subtitle highlight">Our Repair Services Include:</h3>
                <ul className="service-features">
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Side mirror replacement and repair</span>
                  </li>
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rearview mirror installation</span>
                  </li>
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mirror glass replacement</span>
                  </li>
                  <li className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="feature-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Heated mirror repairs</span>
                  </li>
                </ul>
                <a 
                  href="https://wa.me/255699343939" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Book a Repair</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Process</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h3 className="process-title">Consultation</h3>
              <p className="process-text">Visit our shop or contact us to discuss your specific car glass needs</p>
            </div>
            <div className="process-card">
              <div className="process-number">2</div>
              <h3 className="process-title">Assessment</h3>
              <p className="process-text">Our experts assess your vehicle to determine the exact requirements</p>
            </div>
            <div className="process-card">
              <div className="process-number">3</div>
              <h3 className="process-title">Service</h3>
              <p className="process-text">We perform the necessary repairs or replacements with precision</p>
            </div>
            <div className="process-card">
              <div className="process-number">4</div>
              <h3 className="process-title">Quality Check</h3>
              <p className="process-text">Final inspection to ensure everything meets our quality standards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How long does windshield replacement take?</h3>
              <p className="faq-answer">Most windshield replacements can be completed within 1-2 hours, depending on the vehicle model and complexity.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you offer windshield installation services?</h3>
              <p className="faq-answer">Yes, we provide professional installation services for all the windshields we sell to ensure proper fitting and safety.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can you repair small cracks in my windshield?</h3>
              <p className="faq-answer">Yes, we can repair small cracks and chips. However, larger damages may require a full replacement for safety reasons.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do I need to make an appointment?</h3>
              <p className="faq-answer">While walk-ins are welcome, we recommend making an appointment via WhatsApp for faster service and to ensure we have the parts ready.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ready for Professional Car Glass Service?</h2>
          <p className="cta-text">
            Contact us today to schedule your service or visit our shop in Kariakoo, Dar-es-Salaam.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-light">
              Contact Us
            </Link>
            <a 
              href="https://wa.me/255699343939" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
