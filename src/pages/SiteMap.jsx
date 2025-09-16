import React from 'react';
import { Link } from 'react-router-dom';

function SiteMap() {
  // Static data for site map sections
  const siteMapSections = [
    {
      title: 'Main Pages',
      items: [
        { path: '/', label: 'Home', description: 'Welcome to Jenkinson Sea Life and explore our highlights' },
        { path: '/about', label: 'About Us', description: 'Learn about our mission, vision, and team' },
        { path: '/contact', label: 'Contact Us', description: 'Get in touch with our team' },
      ],
      icon: 'fas fa-home',
      color: 'primary'
    },
    {
      title: 'Content Sections',
      items: [
        { path: '/gallery', label: 'Gallery', description: 'View stunning images of our marine exhibits' },
        { path: '/animals', label: 'Marine Animals', description: 'Discover our diverse marine life and their habitats' },
        { path: '/events', label: 'Events', description: 'Check out our schedules and programs for all ages' },
      ],
      icon: 'fas fa-book',
      color: 'success'
    },
    {
      title: 'Visitor Tools',
      items: [
        { path: '/reviews', label: 'Reviews', description: 'Share your feedback and read visitor experiences' },
        { path: '/queries', label: 'Queries', description: 'Submit your questions about our facility' },
      ],
      icon: 'fas fa-tools',
      color: 'info'
    },
    {
      title: 'Additional Resources',
      items: [
        { path: '/blog', label: 'Blog', description: 'Read our latest articles on marine conservation' },
        { path: '/conservation', label: 'Conservation Tips', description: 'Learn how to protect our oceans' },
        { path: '/faq', label: 'FAQ', description: 'Find answers to frequently asked questions' },
      ],
      icon: 'fas fa-link',
      color: 'warning'
    }
  ];

  return (
    <div className="sitemap-page">
      {/* Hero Section */}
      <section className="sitemap-hero position-relative overflow-hidden">
        <div 
          className="hero-background position-absolute w-100 h-100"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/sitemap-hero.jpg')",
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
                  Explore Our Site
                </span>
                <h1 className="display-3 fw-bold mb-4">Site Map</h1>
                <p className="lead fs-4 mb-5">
                  Easily navigate through all sections of the Jenkinson Sea Life website to find what you need.
                </p>
                <div className="hero-actions d-flex justify-content-center gap-3 flex-wrap">
                  <Link to="/" className="btn btn-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-home me-2"></i>Back to Home
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-envelope me-2"></i>Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Map Sections */}
      <section className="sitemap-sections py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Navigate Easily
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Explore Our Website</h2>
            <p className="lead text-muted">
              Find all pages and resources available on the Jenkinson Sea Life website with ease.
            </p>
          </div>

          <div className="row g-4">
            {siteMapSections.map((section, index) => (
              <div key={index} className="col-lg-6 col-md-12">
                <div className="section-card bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className={`section-icon bg-${section.color} bg-opacity-10 rounded-circle p-3 me-3`} style={{ width: '60px', height: '60px' }}>
                      <i className={`${section.icon} text-${section.color} fs-3`}></i>
                    </div>
                    <h3 className="fw-bold text-dark mb-0">{section.title}</h3>
                  </div>
                  <ul className="list-group list-group-flush">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="list-group-item border-0 py-3">
                        <Link 
                          to={item.path} 
                          className="d-flex align-items-center text-decoration-none text-dark"
                          onMouseEnter={(e) => e.currentTarget.querySelector('span').classList.add(`text-${section.color}`)}
                          onMouseLeave={(e) => e.currentTarget.querySelector('span').classList.remove(`text-${section.color}`)}
                        >
                          <i className="fas fa-chevron-right me-2 text-muted"></i>
                          <div>
                            <span className="fw-bold">{item.label}</span>
                            <div className="text-muted small">{item.description}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
              Quick Access
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Popular Links</h2>
            <p className="lead text-muted">
              Jump straight to our most visited pages and start exploring!
            </p>
          </div>

          <div className="row g-4">
            {siteMapSections
              .flatMap(section => section.items)
              .slice(0, 3) // Highlight first three as popular links
              .map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <Link to={item.path} className="quick-link-card bg-white rounded-4 shadow-sm p-4 text-center h-100 text-decoration-none">
                    <div className="quick-link-icon bg-info bg-opacity-10 rounded-circle p-4 mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-link text-info fs-2"></i>
                    </div>
                    <h5 className="fw-bold text-dark mb-3">{item.label}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SiteMap;