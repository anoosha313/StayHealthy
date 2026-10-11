import React, { useState } from "react";

const GiveReviews = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() === "" || rating === 0) {
      setShowWarning(true);
      return;
    }
    setSubmitted(true);
    setShowWarning(false);
    console.log("Review Submitted:", { review, rating });
  };

  return (
    <div className="review-form-container">
      <h2>Give Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <select 
            value={rating} 
            onChange={(e) => setRating(e.target.value)}
            disabled={submitted}
          >
            <option value={0}>Select Rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        
        <div>
          <label>Your Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            disabled={submitted}
            placeholder="Write your review here"
            rows="4"
          />
        </div>

        {showWarning && <p style={{color: "red"}}>Please fill all fields!</p>}
        {submitted && <p style={{color: "green"}}>Thank you! Review submitted successfully.</p>}

        <button type="submit" disabled={submitted}>
          {submitted ? "Submitted" : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default GiveReviews;
