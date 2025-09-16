import React, { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ text: '', rating: 0, date: '', author: 'Anonymous' });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Static mock reviews data
  const mockReviews = [
    {
      text: 'Amazing exhibits and friendly staff! The shark feeding was a highlight.',
      rating: 5,
      date: '2024-10-10',
      author: 'John D.'
    },
    {
      text: 'Kids loved the touch tank experience. Highly recommend for families!',
      rating: 4,
      date: '2024-10-15',
      author: 'Sarah M.'
    },
    {
      text: 'Educational and fun for all ages. The conservation talk was inspiring!',
      rating: 5,
      date: '2024-10-20',
      author: 'Emily R.'
    }
  ];

  // Load reviews from localStorage on mount, fallback to mock data if empty
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews(stored.length > 0 ? stored : mockReviews);
  }, []);

  // Handle review submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text.trim() && newReview.rating >= 1 && newReview.rating <= 5) {
      const updatedReview = {
        ...newReview,
        date: new Date().toISOString().split('T')[0],
        author: 'Anonymous'
      };
      const updated = [...reviews, updatedReview];
      setReviews(updated);
      localStorage.setItem('reviews', JSON.stringify(updated));
      setNewReview({ text: '', rating: 0, date: '', author: 'Anonymous' });
      setShowConfirmation(true);
    }
  };

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, rev) => sum + rev.rating, 0) / reviews.length).toFixed(1)
    : 0;

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' })
    };
  };

  return (
    <div className="reviews-page">
      {/* Hero Section */}
      <section className="reviews-hero position-relative overflow-hidden">
        <div 
          className="hero-background position-absolute w-100 h-100"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/reviews-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div 
          className="hero-content position-relative text-white text-center py-5 d-flex align-items-center"
          style={{ zIndex: 2, minHeight: '60vh' }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="badge bg-light text-primary px-4 py-2 rounded-pill mb-4 fs-6">
                  Your Voice Matters
                </span>
                <h1 className="display-3 fw-bold mb-4">Visitor Reviews</h1>
                <p className="lead fs-4 mb-5">
                  Share your experience at Jenkinson Sea Life and read what others have to say about their visit!
                </p>
                <div className="hero-actions d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn btn-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-star me-2"></i>Write a Review
                  </button>
                  <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-book me-2"></i>Read Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Section */}
      <section className="all-reviews py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Visitor Feedback
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">What Our Visitors Say</h2>
            <p className="lead text-muted">
              Average Rating: {averageRating}/5 based on {reviews.length} reviews
            </p>
          </div>

          <div className="row g-4">
            {reviews.map((review, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="review-card bg-white rounded-4 shadow-sm h-100 overflow-hidden">
                  <div className="review-content p-4">
                    <div className="review-header d-flex align-items-center mb-3">
                      <div className="rating-box bg-primary text-white rounded-3 p-2 me-3 text-center" style={{ minWidth: '60px' }}>
                        <div className="fw-bold">{review.rating}</div>
                        <div className="small">/5</div>
                      </div>
                      <div>
                        <div className="text-muted small">
                          <i className="fas fa-calendar me-1"></i>
                          {formatDate(review.date).month} {formatDate(review.date).day}
                        </div>
                      </div>
                    </div>
                    <p 
                      className="text-muted mb-4"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {review.text}
                    </p>
                    <div className="review-footer d-flex align-items-center justify-content-between">
                      <span className="text-primary fw-bold">{review.author}</span>
                      <div className="text-warning">
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {reviews.length === 0 && (
              <div className="text-center py-5">
                <i className="fas fa-star-half-alt text-muted fs-1 mb-3"></i>
                <h5 className="text-muted">No reviews yet</h5>
                <p className="text-muted">Be the first to share your experience!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Submit Review Section */}
      <section className="submit-review py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
              Share Your Experience
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Write a Review</h2>
            <p className="lead text-muted">
              Let us know about your visit to Jenkinson Sea Life. Your feedback is invaluable!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="review-form bg-white rounded-4 shadow-sm p-5">
                <div className="mb-4">
                  <label className="form-label fw-bold">Your Review</label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    placeholder="Share your thoughts about your visit..."
                    rows="5"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">Rating (1-5)</label>
                  <div className="d-flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`btn btn-outline-warning rounded-circle p-2 ${newReview.rating >= star ? 'bg-warning text-white' : ''}`}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                      >
                        <i className="fas fa-star"></i>
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg rounded-pill px-5 py-3 w-100"
                  disabled={!newReview.text.trim() || newReview.rating < 1}
                >
                  <i className="fas fa-paper-plane me-2"></i>Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights Section */}
      <section className="review-highlights py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-info text-white px-3 py-2 rounded-pill mb-3">
              Top Feedback
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Review Highlights</h2>
            <p className="lead text-muted">
              See what visitors love most about Jenkinson Sea Life!
            </p>
          </div>

          <div className="row g-4">
            {mockReviews.map((highlight, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="highlight-card bg-white rounded-4 shadow-sm p-4 text-center h-100">
                  <div className="highlight-icon bg-info bg-opacity-10 rounded-circle p-4 mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-quote-left text-info fs-2"></i>
                  </div>
                  <p className="text-muted mb-4">"{highlight.text}"</p>
                  <div className="highlight-author">
                    <span className="fw-bold text-dark">{highlight.author}</span>
                    <div className="text-warning">
                      {[...Array(highlight.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div
          className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999 }}
          onClick={() => setShowConfirmation(false)}
        >
          <div
            className="modal-content bg-white rounded-4 position-relative p-5 text-center"
            style={{ maxWidth: '500px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={() => setShowConfirmation(false)}
            ></button>
            <div className="modal-icon mb-4">
              <i className="fas fa-check-circle text-success fs-1"></i>
            </div>
            <h3 className="fw-bold text-dark mb-3">Review Submitted!</h3>
            <p className="text-muted mb-4">
              Thank you for sharing your experience. Your review helps us improve and inspires others!
            </p>
            <button
              className="btn btn-primary rounded-pill px-4 py-2"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews;