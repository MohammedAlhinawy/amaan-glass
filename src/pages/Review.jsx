import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import logo from "../assets/images/logo.PNG";

const Review = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    review: '',
    phone: ''
  });
  const [hover, setHover] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const saveReview = (review) => {
    // Get existing reviews from localStorage or initialize empty array
    const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    
    // Add the new review with a unique ID and timestamp
    const newReview = {
      ...review,
      id: Date.now(), // Using timestamp as a simple unique ID
      date: new Date().toISOString() // Add timestamp
    };
    
    // Save back to localStorage
    localStorage.setItem('reviews', JSON.stringify([...existingReviews, newReview]));
    return newReview;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/brainiac.t.s.m@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Review from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          rating: formData.rating,
          review: formData.review,
          _template: 'table'
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        setMessage({ 
          text: 'Thank you for your review!', 
          type: 'success' 
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          rating: 0,
          review: '',
          phone: ''
        });
        // Redirect to home after 2 seconds
        setTimeout(() => navigate('/'), 2000);

        // Save review to localStorage
        // Save the review
        const savedReview = saveReview({
          name: formData.name,
          rating: formData.rating,
          review: formData.review,
          email: formData.email,
          phone: formData.phone
        });
        console.log('Review saved:', savedReview);
      } else {
        throw new Error(result.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage({ 
        text: 'Failed to submit review. Please try again later.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-page">
      <div style={{ width: '100%', marginBottom: '2rem' }} className="review-form contact-form-container">
        <img src={logo} alt="Amaan Glass Logo" className='review-logo'/>
        <h1 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: '600' , fontFamily: 'Times New Roman, Times, serif'}}>Leave a Review</h1>
        <p style={{
          color: '#666',
          marginBottom: '2rem',
          fontSize: '1.1rem'
        }}>We value your feedback! Please share your experience with us.</p>

        {message.text && (
          <div style={{
            padding: '1rem',
            marginBottom: '1.5rem',
            borderRadius: '4px',
            backgroundColor: message.type === 'error' ? '#ffebee' : '#e8f5e9',
            color: message.type === 'error' ? '#c62828' : '#2e7d32',
            border: `1px solid ${message.type === 'error' ? '#ef9a9a' : '#a5d6a7'}`
          }}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#333'
            }}>
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#333'
            }}>
              Your Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#333'
            }}>
              Your Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#333'
            }}>
              Your Rating *
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setFormData({...formData, rating: ratingValue})}
                      style={{ display: 'none' }}
                      required
                    />
                    <FaStar
                      size={32}
                      color={ratingValue <= (hover || formData.rating) ? '#ffc107' : '#e4e5e9'}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      style={{ cursor: 'pointer' }}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#333'
            }}>
              Your Review *
            </label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                resize: 'vertical',
                minHeight: '120px'
              }}
              placeholder="Share your experience with us..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: '#1d3557',
              color: 'white',
              padding: '0.75rem 2rem',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              width: '100%',
              transition: 'background-color 0.3s',
              opacity: isSubmitting ? 0.7 : 1
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#12475c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1d3557'}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
      
      <button
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: '1px solid #1d3557',
          color: '#1d3557',
          padding: '0.5rem 1.5rem',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '1rem',
          transition: 'all 0.3s'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#f5f5f5';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Review;
