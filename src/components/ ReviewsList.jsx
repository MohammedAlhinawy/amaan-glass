// Create a new component called ReviewsList.jsx
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Load reviews from localStorage when component mounts
    const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews(savedReviews);
  }, []);

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to leave a review!</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <h3>{review.name}</h3>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      color={i < review.rating ? '#ffc107' : '#e4e5e9'} 
                    />
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
              <p className="review-date">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsList;