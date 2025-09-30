import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => (
  <div className="thankyou-page">
    <section className="section text-center" style={{padding: '6rem 0'}}>
      <div className="container">
        <h1 className="thankyou-title" style={{color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem'}}>Thank You!</h1>
        <p className="thankyou-text" style={{fontSize: '1.25rem', marginBottom: '2rem'}}>
          Your message has been sent successfully.<br />We appreciate your interest and will get back to you as soon as possible.
        </p>
        <Link to="/" className="btn btn-primary" style={{padding: '0.75rem 2rem', fontSize: '1.1rem'}}>Back to Home</Link>
      </div>
    </section>
  </div>
);

export default ThankYou;
