import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImWhatsapp } from 'react-icons/im';

const ThankYou = () => {
  const location = useLocation();
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    // Check for state from navigation or session storage
    if (location.state?.showWhatsAppButton) {
      const url = location.state.whatsappUrl;
      setWhatsappUrl(url);
      
      // Open WhatsApp in a new tab
      const newWindow = window.open(url, '_blank');
      
      // If popup was blocked, show the button as fallback
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setShowWhatsAppButton(true);
      }
      
      // Clear the state to prevent reopening on refresh
      window.history.replaceState({}, document.title);
    } else {
      const pendingMessage = sessionStorage.getItem('pendingWhatsApp');
      if (pendingMessage) {
        const url = `https://wa.me/255699343939?text=${encodeURIComponent(pendingMessage)}`;
        setWhatsappUrl(url);
        
        // Open WhatsApp in a new tab
        const newWindow = window.open(url, '_blank');
        
        // If popup was blocked, show the button as fallback
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          setShowWhatsAppButton(true);
        }
        
        sessionStorage.removeItem('pendingWhatsApp');
      }
    }
  }, [location.state]);
  
  return (
    <div className="thankyou-page">
      <section className="section text-center" style={{padding: '6rem 0'}}>
        <div className="container">
          <h1 className="thankyou-title" style={{color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem'}}>
            Thank You!
          </h1>
          <p className="thankyou-text" style={{fontSize: '1.25rem', marginBottom: '2rem'}}>
            Your message has been sent successfully.<br />
            {showWhatsAppButton ? (
              <span>You can continue the conversation on WhatsApp.</span>
            ) : (
              <span>We've opened WhatsApp for you to continue the conversation.</span>
            )}
          </p>
          
          {showWhatsAppButton && (
            <div style={{marginBottom: '2rem'}}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary" 
                style={{
                  padding: '0.75rem 2rem', 
                  fontSize: '1.1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  borderColor: '#25D366'
                }}
              >
                <ImWhatsapp size={20} /> Open WhatsApp
              </a>
            </div>
          )}
          
          <div>
            <Link to="/" className="btn btn-primary" style={{padding: '0.75rem 2rem', fontSize: '1.1rem'}}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
