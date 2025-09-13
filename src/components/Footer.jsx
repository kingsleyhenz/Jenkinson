import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const [location, setLocation] = useState('Loading...');
  const [dateTime, setDateTime] = useState(new Date());
  const [scrollText, setScrollText] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(`${pos.coords.latitude.toFixed(2)}°N, ${pos.coords.longitude.toFixed(2)}°E`),
        () => setLocation('Location unavailable')
      );
    }

    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Smooth scrolling animation for marquee
    const scrollInterval = setInterval(() => {
      setScrollText(prev => (prev >= 100 ? -100 : prev + 0.1));
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(scrollInterval);
    };
  }, []);

  const formatDateTime = (date) => {
    return {
      date: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
  };

  const { date, time } = formatDateTime(dateTime);

  const socialIcons = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '🎥', href: '#' }
  ];

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/animals', label: 'Animals' }
  ];

  return (
    <footer 
      className="mt-auto"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        color: '#e2e8f0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      {/* Wave decoration at top */}
      <div 
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
          backgroundSize: '200% 100%',
          animation: 'gradient-shift 3s ease infinite'
        }}
      />

      {/* Main footer content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <div 
              className="mb-4 p-4 rounded-3 h-100"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h5 
                className="mb-3 fw-bold"
                style={{ 
                  color: '#06b6d4',
                  fontSize: '1.3rem',
                  letterSpacing: '0.5px'
                }}
              >
                🌊 About Jenkinson Sea Life
              </h5>
              <p className="mb-3" style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
                Dedicated to marine conservation and education since 1990. 
                Inspiring wonder and protecting our ocean's precious ecosystems.
              </p>
              <div className="d-flex align-items-center mb-2">
                <span className="me-2">🏆</span>
                <small style={{ color: '#94a3b8' }}>Award-winning conservation programs</small>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2">🌍</span>
                <small style={{ color: '#94a3b8' }}>Over 1M visitors educated annually</small>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-4 col-md-6">
            <div 
              className="mb-4 p-4 rounded-3 h-100"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h5 
                className="mb-3 fw-bold"
                style={{ 
                  color: '#8b5cf6',
                  fontSize: '1.3rem',
                  letterSpacing: '0.5px'
                }}
              >
                🔗 Quick Links
              </h5>
              <div className="row">
                <div className="col-6">
                  {quickLinks.slice(0, 3).map((link, index) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="d-block text-decoration-none mb-2 p-2 rounded transition-all"
                      style={{
                        color: '#cbd5e1',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#06b6d4';
                        e.target.style.background = 'rgba(6, 182, 212, 0.1)';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#cbd5e1';
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
                <div className="col-6">
                  {quickLinks.slice(3).map((link, index) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="d-block text-decoration-none mb-2 p-2 rounded transition-all"
                      style={{
                        color: '#cbd5e1',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#06b6d4';
                        e.target.style.background = 'rgba(6, 182, 212, 0.1)';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#cbd5e1';
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="col-lg-4 col-md-12">
            <div 
              className="mb-4 p-4 rounded-3 h-100"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h5 
                className="mb-3 fw-bold"
                style={{ 
                  color: '#10b981',
                  fontSize: '1.3rem',
                  letterSpacing: '0.5px'
                }}
              >
                📞 Contact & Connect
              </h5>
              
              {/* Contact Info */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">📧</span>
                  <a 
                    href="mailto:info@jenkinsonsealife.com"
                    className="text-decoration-none"
                    style={{ color: '#cbd5e1', fontSize: '0.95rem' }}
                  >
                    info@jenkinsonsealife.com
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">📱</span>
                  <a 
                    href="tel:+6512345678"
                    className="text-decoration-none"
                    style={{ color: '#cbd5e1', fontSize: '0.95rem' }}
                  >
                    +65-1234-5678
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-3">
                <h6 className="mb-3" style={{ color: '#94a3b8', fontSize: '1rem' }}>
                  Follow Our Journey
                </h6>
                <div className="d-flex gap-3">
                  {socialIcons.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.1)';
                        e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Info Bar */}
        <div 
          className="mt-4 p-3 rounded-3 position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div 
            className="position-absolute top-0 start-0 h-100"
            style={{
              width: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
              animation: 'slide 8s ease-in-out infinite'
            }}
          />
          
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 text-center">
            <div className="d-flex align-items-center">
              <span className="me-2">📅</span>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{date}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">⏰</span>
              <span 
                className="fw-bold"
                style={{ color: '#06b6d4', fontSize: '1rem', fontFamily: 'monospace' }}
              >
                {time}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">📍</span>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{location}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">🌊</span>
              <span style={{ color: '#10b981', fontSize: '0.9rem' }}>Inspiring Marine Conservation</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="text-center mt-4 pt-4"
          style={{
            borderTop: '1px solid rgba(59, 130, 246, 0.2)',
            color: '#94a3b8'
          }}
        >
          <p className="mb-0" style={{ fontSize: '0.9rem' }}>
            &copy; 2025 Jenkinson Sea Life. All rights reserved. | 
            <span className="ms-1" style={{ color: '#06b6d4' }}>
              Protecting Our Oceans, One Wave at a Time
            </span>
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slide {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
}

export default Footer;