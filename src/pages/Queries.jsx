import React, { useState } from 'react';

function Queries() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'General Inquiry',
    query: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Static data for query types
  const queryTypes = [
    { id: 'general', label: 'General Inquiry', icon: 'fas fa-question-circle', color: 'primary' },
    { id: 'event', label: 'Event Booking', icon: 'fas fa-calendar-alt', color: 'success' },
    { id: 'conservation', label: 'Conservation', icon: 'fas fa-leaf', color: 'info' },
    { id: 'school', label: 'School Tours', icon: 'fas fa-school', color: 'warning' }
  ];

  // Static data for common queries
  const commonQueries = [
    {
      question: 'How do I book a school tour?',
      answer: 'School tours can be booked through our Contact Us page or by emailing tours@jenkinsonsealife.com.',
      icon: 'fas fa-school'
    },
    {
      question: 'What are your operating hours?',
      answer: 'We are open daily from 9:00 AM to 5:00 PM, with extended hours for special events.',
      icon: 'fas fa-clock'
    },
    {
      question: 'Can I volunteer for conservation programs?',
      answer: 'Yes! Check our Conservation page for volunteer opportunities and application details.',
      icon: 'fas fa-leaf'
    }
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.query.trim()) {
      // Store query in localStorage
      const storedQueries = JSON.parse(localStorage.getItem('queries') || '[]');
      const newQuery = {
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };
      const updatedQueries = [...storedQueries, newQuery];
      localStorage.setItem('queries', JSON.stringify(updatedQueries));
      setFormData({ name: '', email: '', phone: '', queryType: 'General Inquiry', query: '' });
      setShowConfirmation(true);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="queries-page">
      {/* Hero Section */}
      <section className="queries-hero position-relative overflow-hidden">
        <div 
          className="hero-background position-absolute w-100 h-100"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/queries-hero.jpg')",
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
                  Get In Touch
                </span>
                <h1 className="display-3 fw-bold mb-4">Submit Your Queries</h1>
                <p className="lead fs-4 mb-5">
                  Have questions about our exhibits, events, or conservation efforts? We're here to help!
                </p>
                <div className="hero-actions d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn btn-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-envelope me-2"></i>Ask a Question
                  </button>
                  <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-book me-2"></i>View FAQs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="inquiry-form py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
              Send Us Your Questions
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Inquiry Form</h2>
            <p className="lead text-muted">
              Fill out the form below, and our team will respond promptly to your questions.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="inquiry-form bg-white rounded-4 shadow-sm p-5">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Query Type</label>
                    <select
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {queryTypes.map((type) => (
                        <option key={type.id} value={type.label}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">Your Query</label>
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      rows="6"
                      className="form-control"
                      placeholder="Describe your question or request..."
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg rounded-pill px-5 py-3 w-100"
                      disabled={!formData.name.trim() || !formData.email.trim() || !formData.query.trim()}
                    >
                      <i className="fas fa-paper-plane me-2"></i>Send Query
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Common Queries Section */}
      <section className="common-queries py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-info text-white px-3 py-2 rounded-pill mb-3">
              Quick Answers
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Common Queries</h2>
            <p className="lead text-muted">
              Find quick answers to frequently asked questions or explore our FAQ section for more details.
            </p>
          </div>

          <div className="row g-4">
            {commonQueries.map((query, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="query-card bg-white rounded-4 shadow-sm p-4 text-center h-100">
                  <div className="query-icon bg-info bg-opacity-10 rounded-circle p-4 mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className={`${query.icon} text-info fs-2`}></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-3">{query.question}</h5>
                  <p className="text-muted mb-0">{query.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section bg-light rounded-4 p-5 mt-5 text-center">
            <h4 className="fw-bold text-dark mb-3">Still Have Questions?</h4>
            <p className="text-muted mb-4">
              Visit our FAQ page or contact us directly for more information.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="/faq" className="btn btn-primary rounded-pill px-4 py-2">
                <i className="fas fa-question-circle me-2"></i>View FAQ
              </a>
              <a href="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2">
                <i className="fas fa-envelope me-2"></i>Contact Us
              </a>
            </div>
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
            <h3 className="fw-bold text-dark mb-3">Query Submitted!</h3>
            <p className="text-muted mb-4">
              Thank you for reaching out. Our team will respond to your query soon!
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

export default Queries;