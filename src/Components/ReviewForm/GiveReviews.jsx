import React, { useState, useEffect } from 'react';

const GiveReviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 0
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const existingReview = storedReviews.find(r => r.name === "User");
    if (existingReview) {
      setDisabled(true);
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (rating) => {
    setFormData({ ...formData, rating: rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { ...formData, name: formData.name || "User" };
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    storedReviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(storedReviews));
    setReviews(storedReviews);
    setIsSubmitted(true);
    setDisabled(true);
    setShowForm(false);
    setFormData({ name: "", review: "", rating: 0 });
  };

  return (
    <div className="review-container">
      <h2>Give Your Review</h2>
      
      {isSubmitted && <p className="review-submitted-message">Review Submitted! Thank you.</p>}

      {!showForm && !isSubmitted && (
        <button onClick={() => setShowForm(true)}>Click Here To Give Review</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Review:</label>
            <textarea name="review" value={formData.review} onChange={handleChange} required />
          </div>
          <div>
            <label>Rating:</label>
            <div>
              {[1,2,3,4,5].map((star) => (
                <span 
                  key={star} 
                  onClick={() => handleRating(star)} 
                  style={{cursor: 'pointer', color: star <= formData.rating ? 'gold' : 'gray'}}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button type="submit" disabled={disabled}>
            {disabled ? "Submitted" : "Submit Review"}
          </button>
        </form>
      )}

      {isSubmitted && (
        <button disabled={true}>Review Already Submitted</button>
      )}
    </div>
  );
};

export default GiveReviews;
