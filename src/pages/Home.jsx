import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/Testimonials.css';
import { IoPersonCircleOutline } from "react-icons/io5";
import homeImg from '../assets/images/home.jpg';

// Helper function to format date as "X days/weeks/months ago"
const formatDate = (date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (diffInSeconds < minute) return 'Just now';
  if (diffInSeconds < hour) return `${Math.floor(diffInSeconds / minute)} minute${diffInSeconds < 120 ? '' : 's'} ago`;
  if (diffInSeconds < day) return `${Math.floor(diffInSeconds / hour)} hour${diffInSeconds < 2 * hour ? '' : 's'} ago`;
  if (diffInSeconds < week) return `${Math.floor(diffInSeconds / day)} day${diffInSeconds < 2 * day ? '' : 's'} ago`;
  if (diffInSeconds < month) return `${Math.floor(diffInSeconds / week)} week${diffInSeconds < 2 * week ? '' : 's'} ago`;
  if (diffInSeconds < year) return `${Math.floor(diffInSeconds / month)} month${diffInSeconds < 2 * month ? '' : 's'} ago`;
  return `${Math.floor(diffInSeconds / year)} year${diffInSeconds < 2 * year ? '' : 's'} ago`;
};

const testimonials = [
  {
    id: 1,
    name: 'Ibrahim Mohammed',
    role: 'Business Owner',
    location: 'Kariakoo',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    rating: 5,
    content: {
      en: "The service at Auto Glass is exceptional. They replaced my car's windshield quickly and at a great price. Highly recommended!",
      sw: "Huduma ya Auto Glass ni bora kabisa. Walibadili kioo cha gari langu haraka na kwa bei nzuri. Nimeipenda sana!"
    }
  },
  {
    id: 2,
    name: 'Grace Mushi',
    role: 'Teacher',
    location: 'Mikocheni',
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
    rating: 5,
    content: {
      en: "I had my side mirror fixed here. The staff was very professional and the work was done perfectly.",
      sw: "Nilipewa huduma ya kurekebisha kioo cha upande hapa. Wafanyakazi walikuwa wataalamu na kazi ilifanyika kikamilifu."
    }
  },
  {
    id: 3,
    name: 'Abdulrahman Juma',
    role: 'Taxi Driver',
    location: 'Mbagala',
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 3 weeks ago
    rating: 5,
    content: {
      en: "Best place for car glass in Dar es Salaam. Fast service and good prices. I bring all my taxis here.",
      sw: "Mahali bora kwa vioo vya magari jijini Dar es Salaam. Huduma ya haraka na bei nzuri. Ninaleta magari yangu yote hapa."
    }
  },
  {
    id: 4,
    name: 'Neema Charles',
    role: 'Nurse',
    location: 'Ubungo',
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 1 month ago
    rating: 5,
    content: {
      en: "Very professional service. They fixed my car's windshield and it looks brand new. Thank you Auto Glass!",
      sw: "Huduma bora sana. Walinirekebishia kioo cha gari langu na sasa kimeonekana kipya kabisa. Asanteni Auto Glass!"
    }
  }
];

const Home = () => {
  const [language, setLanguage] = useState('en');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{marginTop: '2rem'}}>
              <h1 className="hero-title">Your Trusted Car Mirror Specialist in Kariakoo</h1>
              <p className="hero-text">Professional sales and repair services for all types of car mirrors and windshields.</p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-secondary">
                  Visit Us Today
                </Link>
                <a 
                  href="tel:+255699343939" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Call Us Now
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src={homeImg}
                alt="Auto Glass workshop"
                style={{
                  height: '350px', // Default for mobile
                  objectFit: 'cover',
                  width: '100%'
                }}
                className="hero-desktop-image"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Summary */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="service-title">Windshield Sales</h3>
              <p className="service-text">
                We offer a wide range of front and rear windshields for all car types and sizes.
                Our glass products are of the highest quality to ensure safety and durability.
              </p>
              <Link to="/services">
                Learn More →
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="service-title">Mirror Repair</h3>
              <p className="service-text">
                Our expert technicians specialize in repairing car mirrors of all types.
                From side mirrors to rearview mirrors, we ensure precision and quality.
              </p>
              <Link to="/services">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Auto Glass</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="feature-title">Quality Products</h3>
              <p className="feature-text">
                We use only the highest quality glass products that meet industry standards.
              </p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Fast Service</h3>
              <p className="feature-text">
                We understand your time is valuable, so we work efficiently to get you back on the road.
              </p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Experienced Staff</h3>
              <p className="feature-text">
                Our team has years of experience in car mirror installation and repair.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">
            {language === 'en' ? 'What Our Customers Say' : 'Wanachama Wetu Wanasema Nini'}
          </h2>
          
          <div className="language-toggle" style={{ margin: '1rem 0 2rem', textAlign: 'center' }}>
            <button 
              onClick={() => setLanguage('en')} 
              className={`language-btn ${language === 'en' ? 'active' : ''}`}
              style={{
                padding: '0.5rem 1.5rem',
                margin: '0 0.5rem',
                border: '1px solid #43a047',
                background: language === 'en' ? '#43a047' : 'transparent',
                color: language === 'en' ? 'white' : '#43a047',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                fontWeight: 500
              }}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('sw')} 
              className={`language-btn ${language === 'sw' ? 'active' : ''}`}
              style={{
                padding: '0.5rem 1.5rem',
                margin: '0 0.5rem',
                border: '1px solid #43a047',
                background: language === 'sw' ? '#43a047' : 'transparent',
                color: language === 'sw' ? 'white' : '#43a047',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                fontWeight: 500
              }}
            >
              Kiswahili
            </button>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
                style={{
                  opacity: index === activeTestimonial ? 1 : 0.7,
                  transform: `scale(${index === activeTestimonial ? 1.02 : 0.98})`,
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "{testimonial.content[language] || testimonial.content.en}"
                  </p>
                  <div className="testimonial-author">
                    <IoPersonCircleOutline className="testimonial-avatar"/>
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <div className="testimonial-meta">
                        <div className="testimonial-location">{testimonial.location}</div>
                        <div className="testimonial-rating">
                          {Array(5).fill(0).map((_, i) => (
                            <span key={i} style={{ color: i < testimonial.rating ? '#ffc107' : '#ddd' }}>★</span>
                          ))}
                        </div>
                      </div>
                      <div className="testimonial-date">{formatDate(testimonial.date)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === activeTestimonial ? '#43a047' : '#ddd',
                  margin: '0 5px',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="testimonial-cta" style={{ marginTop: '2rem' }}>
            <a 
              href="/review" 
              // target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {language === 'en' ? 'Leave a Review' : 'Acha Maoni Yako'}
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Fix or Replace Your Car Glass?</h2>
          <p className="cta-text">
            Visit our shop in Kariakoo or contact us today to get a quote for your car mirror needs.
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

export default Home;
