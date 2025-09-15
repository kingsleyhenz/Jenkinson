import React from 'react';

function ContactUs() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero position-relative overflow-hidden">
        <div className="hero-background position-absolute w-100 h-100" style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/contact-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="hero-content position-relative text-white text-center py-5 d-flex align-items-center" style={{ zIndex: 2, minHeight: '60vh' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="badge bg-light text-primary px-4 py-2 rounded-pill mb-4 fs-6">
                  We're Here to Help
                </span>
                <h1 className="display-3 fw-bold mb-4">Get in Touch</h1>
                <p className="lead fs-4 mb-5">
                  Have questions about our exhibits, programs, or conservation efforts? We'd love to hear from you.
                </p>
                <div className="contact-quick-actions d-flex justify-content-center gap-3 flex-wrap">
                  <a href="tel:+6512345678" className="btn btn-light btn-lg px-4 py-3 rounded-pill">
                    <i className="fas fa-phone me-2"></i>Call Now
                  </a>
                  <a href="mailto:contact@jenkinsonsealife.com" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill">
                    <i className="fas fa-envelope me-2"></i>Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-details pe-lg-5">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                  Contact Details
                </span>
                <h2 className="display-5 fw-bold text-dark mb-4">We're Here to Help</h2>
                <p className="lead text-muted mb-5">
                  We're here to answer your questions about visits, events, or conservation efforts. Reach out via the details below or use our contact form.
                </p>
                
                <div className="contact-items mb-5">
                  <div className="contact-item d-flex align-items-start mb-4 p-4 bg-light rounded-4">
                    <div className="contact-icon bg-primary bg-opacity-10 rounded-circle p-3 me-4 flex-shrink-0">
                      <i className="fas fa-envelope text-primary fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-dark mb-2">Email Address</h6>
                      <a href="mailto:contact@jenkinsonsealife.com" className="text-primary text-decoration-none fw-semibold">
                        contact@jenkinsonsealife.com
                      </a>
                      <p className="text-muted small mb-0 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="contact-item d-flex align-items-start mb-4 p-4 bg-light rounded-4">
                    <div className="contact-icon bg-success bg-opacity-10 rounded-circle p-3 me-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-success fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-dark mb-2">Visit Us</h6>
                      <p className="text-muted mb-2">
                        MBM Plaza, Old Aba Road<br/>
                        Port-Harcourt, Rivers
                      </p>
                      <button className="btn btn-sm btn-outline-success rounded-pill">
                        <i className="fas fa-directions me-1"></i>Get Directions
                      </button>
                    </div>
                  </div>
                  
                  <div className="contact-item d-flex align-items-start mb-4 p-4 bg-light rounded-4">
                    <div className="contact-icon bg-warning bg-opacity-10 rounded-circle p-3 me-4 flex-shrink-0">
                      <i className="fas fa-phone text-warning fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-dark mb-2">Phone & Fax</h6>
                      <p className="mb-1">
                        <strong>Phone:</strong> <a href="tel:+6512345678" className="text-primary text-decoration-none">+65-1234-5678</a>
                      </p>
                      <p className="text-muted mb-0">
                        <strong>Fax:</strong> +65-9876-5432
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item d-flex align-items-start mb-4 p-4 bg-light rounded-4">
                    <div className="contact-icon bg-info bg-opacity-10 rounded-circle p-3 me-4 flex-shrink-0">
                      <i className="fas fa-clock text-info fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-dark mb-2">Operating Hours</h6>
                      <p className="mb-2">
                        <strong>Monday - Sunday:</strong> 9:00 AM - 5:00 PM
                      </p>
                      <span className="badge bg-success text-white px-3 py-1 rounded-pill">
                        <i className="fas fa-check-circle me-1"></i>Open Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="contact-map-wrapper position-relative">
                <div className="contact-map bg-light rounded-4 p-5 text-center" style={{ minHeight: '400px' }}>
                  <div className="map-placeholder d-flex align-items-center justify-content-center h-100">
                    <div>
                      <i className="fas fa-map-marked-alt text-primary fs-1 mb-3"></i>
                      <h5 className="fw-bold text-dark mb-2">Interactive Map</h5>
                      <p className="text-muted">Find us on the beautiful Point Pleasant Beach Boardwalk</p>
                      <button className="btn btn-primary rounded-pill px-4">
                        <i className="fas fa-external-link-alt me-2"></i>Open in Maps
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                  Send Message
                </span>
                <h2 className="display-5 fw-bold text-dark mb-4">Send Us a Message</h2>
                <p className="lead text-muted">
                  Have a specific question or inquiry? Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="contact-form bg-white rounded-4 shadow-sm p-5">
                <form className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">Full Name *</label>
                    <input type="text" className="form-control rounded-3 border-0 bg-light py-3" placeholder="Enter your full name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">Email Address *</label>
                    <input type="email" className="form-control rounded-3 border-0 bg-light py-3" placeholder="Enter your email" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">Phone Number</label>
                    <input type="tel" className="form-control rounded-3 border-0 bg-light py-3" placeholder="Optional" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark">Inquiry Type</label>
                    <select className="form-select rounded-3 border-0 bg-light py-3">
                      <option value="">Select inquiry type</option>
                      <option value="general">General Information</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="education">Educational Programs</option>
                      <option value="events">Private Events</option>
                      <option value="conservation">Conservation Partnership</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold text-dark">Subject *</label>
                    <input type="text" className="form-control rounded-3 border-0 bg-light py-3" placeholder="Brief subject line" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold text-dark">Message *</label>
                    <textarea className="form-control rounded-3 border-0 bg-light" rows="5" placeholder="Please provide details about your inquiry..." required></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" id="newsletter" />
                      <label className="form-check-label text-muted" htmlFor="newsletter">
                        Subscribe to our newsletter for updates on new exhibits and events
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3 rounded-pill w-100">
                      <i className="fas fa-paper-plane me-2"></i>
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                  FAQ
                </span>
                <h2 className="display-5 fw-bold text-dark mb-4">Frequently Asked Questions</h2>
                <p className="lead text-muted">
                  Quick answers to common questions about visiting Jenkinson Sea Life
                </p>
              </div>
              
              <div className="accordion accordion-flush" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 rounded-4 shadow-sm">
                  <h2 className="accordion-header" id="faq1">
                    <button className="accordion-button collapsed rounded-4 shadow-none border-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                          <i className="fas fa-ticket-alt text-primary"></i>
                        </div>
                        <strong>What are your ticket prices and discounts?</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body p-4">
                      <div className="pricing-info">
                        <div className="row g-3 mb-4">
                          <div className="col-md-4">
                            <div className="price-card bg-light rounded-3 p-3 text-center">
                              <h6 className="fw-bold text-primary">Adults</h6>
                              <h4 className="fw-bold">$20</h4>
                              <small className="text-muted">Ages 13+</small>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="price-card bg-light rounded-3 p-3 text-center">
                              <h6 className="fw-bold text-success">Children</h6>
                              <h4 className="fw-bold">$10</h4>
                              <small className="text-muted">Ages 3-12</small>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="price-card bg-light rounded-3 p-3 text-center">
                              <h6 className="fw-bold text-warning">Seniors</h6>
                              <h4 className="fw-bold">$15</h4>
                              <small className="text-muted">Ages 65+</small>
                            </div>
                          </div>
                        </div>
                        <p className="mb-0"><strong>Group Discounts:</strong> 15% off for groups of 10 or more. Educational groups receive additional discounts.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 rounded-4 shadow-sm">
                  <h2 className="accordion-header" id="faq2">
                    <button className="accordion-button collapsed rounded-4 shadow-none border-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false">
                      <div className="d-flex align-items-center">
                        <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                          <i className="fas fa-parking text-success"></i>
                        </div>
                        <strong>Is parking available and what does it cost?</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body p-4">
                      Yes! We offer convenient parking right next to our facility. Parking is $5 for the entire day, and we also validate parking for visitors who spend 3+ hours at the aquarium.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 rounded-4 shadow-sm">
                  <h2 className="accordion-header" id="faq3">
                    <button className="accordion-button collapsed rounded-4 shadow-none border-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                          <i className="fas fa-utensils text-warning"></i>
                        </div>
                        <strong>Do you have food and dining options?</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body p-4">
                      Absolutely! We have the Ocean View Café featuring fresh seafood, sandwiches, and kid-friendly options. We also have several snack stations throughout the facility and allow outside food in designated picnic areas.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 rounded-4 shadow-sm">
                  <h2 className="accordion-header" id="faq4">
                    <button className="accordion-button collapsed rounded-4 shadow-none border-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false">
                      <div className="d-flex align-items-center">
                        <div className="bg-info bg-opacity-10 rounded-circle p-2 me-3">
                          <i className="fas fa-wheelchair text-info"></i>
                        </div>
                        <strong>Is the facility wheelchair accessible?</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body p-4">
                      Yes, Jenkinson Sea Life is fully wheelchair accessible. All exhibits, restrooms, and facilities are ADA compliant. We also offer wheelchair rentals at the front desk for a small fee.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-5">
                <div className="bg-light rounded-4 p-4">
                  <h5 className="fw-bold text-dark mb-3">Still have questions?</h5>
                  <p className="text-muted mb-4">
                    For more information about visiting, educational programs, or conservation efforts, don't hesitate to reach out to our friendly team.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="tel:+6512345678" className="btn btn-primary rounded-pill px-4 py-2">
                      <i className="fas fa-phone me-2"></i>Call Us
                    </a>
                    <a href="mailto:contact@jenkinsonsealife.com" className="btn btn-outline-primary rounded-pill px-4 py-2">
                      <i className="fas fa-envelope me-2"></i>Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;