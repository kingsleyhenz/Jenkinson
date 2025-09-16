import React from 'react';
import { FaChevronDown, FaUser, FaUsers } from 'react-icons/fa';
import { FaAward, FaLeaf, FaSeedling } from 'react-icons/fa6';
function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero position-relative overflow-hidden">
        <div className="hero-background position-absolute w-100 h-100" style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/about-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="hero-content position-relative text-white text-center py-5 d-flex align-items-center" style={{ zIndex: 2, minHeight: '60vh' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="badge bg-light text-primary px-4 py-2 rounded-pill mb-4 fs-6">
                  Since 2025
                </span>
                <h1 className="display-3 fw-bold mb-4">About Jenkinson Sea Life</h1>
                <p className="lead fs-4 mb-5">
                  Dedicated to marine conservation and education for over a few weeks
                </p>
                <div className="scroll-indicator">
                  <FaChevronDown/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="mission-content ps-lg-5">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                  Our Mission
                </span>
                <h2 className="display-5 fw-bold text-dark mb-4">
                  Protecting Oceans Through <span className="text-primary">Education</span>
                </h2>
                <p className="lead text-muted mb-4">
                  We are dedicated to promoting awareness of marine animals, their habitats, and conservation efforts. Through creative exhibits and innovative programs, we provide unique experiences that educate and inspire.
                </p>
                <p className="text-muted mb-4">
                  Established in 2025, Jenkinson Sea Life has grown from a small aquarium to a major educational center, hosting thousands of visitors annually. Our team of marine biologists and educators work tirelessly to ensure accurate and engaging information.
                </p>
                
                <div className="mission-stats row g-4 mt-4">
                  <div className="col-6 col-md-3">
                    <div className="stat-item text-center">
                      <div className="stat-icon bg-primary bg-opacity-10 rounded-circle p-3 mx-auto mb-2" style={{width: '60px', height: '60px'}}>
                        <FaUser/>
                      </div>
                      <h4 className="fw-bold text-primary mb-1">500+</h4>
                      <small className="text-muted">Species Protected</small>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-item text-center">
                      <div className="stat-icon bg-success bg-opacity-10 rounded-circle p-3 mx-auto mb-2" style={{width: '60px', height: '60px'}}>
                        <FaUsers/>
                      </div>
                      <h4 className="fw-bold text-success mb-1">50K+</h4>
                      <small className="text-muted">Annual Visitors</small>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-item text-center">
                      <div className="stat-icon bg-warning bg-opacity-10 rounded-circle p-3 mx-auto mb-2" style={{width: '60px', height: '60px'}}>
                        <FaAward/>
                      </div>
                      <h4 className="fw-bold text-warning mb-1">25</h4>
                      <small className="text-muted">Awards Won</small>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-item text-center">
                      <div className="stat-icon bg-info bg-opacity-10 rounded-circle p-3 mx-auto mb-2" style={{width: '60px', height: '60px'}}>
                        <FaSeedling/>
                      </div>
                      <h4 className="fw-bold text-info mb-1">15</h4>
                      <small className="text-muted">Research Projects</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="mission-visual position-relative">
                <div className="image-stack">
                  <div className="bg-primary bg-opacity-10 rounded-4 p-2" style={{transform: 'rotate(-3deg)'}}>
                    <div className="bg-white rounded-4 p-4 shadow-sm">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary rounded-circle p-2 me-3">
                          <FaLeaf/>
                        </div>
                        <h5 className="fw-bold mb-0">Conservation</h5>
                      </div>
                      <p className="text-muted small mb-0">Protecting marine ecosystems worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Meet Our Experts
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Our Passionate Team</h2>
            <p className="lead text-muted">Dedicated professionals committed to marine conservation and education</p>
          </div>
          
          <div className="row justify-content-center g-4">
            <div className="col-lg-5 col-md-6">
              <div className="team-card bg-white rounded-4 shadow-sm overflow-hidden h-100">
                <div className="card-body p-5 text-center">
                  <div className="team-image-wrapper position-relative mx-auto mb-4">
                    
                    {/* <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-2"></div> */}
                  </div>
                  <h4 className="fw-bold text-dark mb-2">Kingsley Henshaw</h4>
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                    Fullstack developer
                  </span>
                  <p className="text-muted mb-4">
                    Over 5 years of experience in Software development, specializing in building scalable web applications and services. 
                  </p>
                  <div className="social-links d-flex justify-content-center gap-3">
                    <a href="#" className="text-muted">
                      <i className="fab fa-linkedin fs-5"></i>
                    </a>
                    <a href="#" className="text-muted">
                      <i className="fas fa-envelope fs-5"></i>
                    </a>
                    <a href="#" className="text-muted">
                      <i className="fab fa-twitter fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partnership CTA */}
      <section className="partnership-cta py-5 text-white" style={{
        background: 'linear-gradient(135deg, #007bbf 0%, #00b5cc 100%)'
      }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="display-6 fw-bold mb-4">Join Our Conservation Mission</h3>
              <p className="lead mb-5">
                Partner with us to make a lasting impact on marine conservation and education
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-light btn-lg px-5 py-3 rounded-pill">
                  <i className="fas fa-handshake me-2"></i>
                  Become a Partner
                </button>
                <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                  <i className="fas fa-heart me-2"></i>
                  Make a Donation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;