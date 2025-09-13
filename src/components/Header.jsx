import { useEffect, useState } from 'react';
import logo from '../assets/logo.webp';
import seaImage from '../assets/sea-creature.jpg';

function Header() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Visitor count logic (using state instead of localStorage for Claude.ai compatibility)
    setVisitorCount(prev => prev + 1);

    // Scroll effect for header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky-top transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
          : 'bg-gradient-to-r from-blue-50 to-cyan-50'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid">
        <nav className="d-flex justify-content-between align-items-center py-3 px-4">
          {/* Logo and Brand Section */}
          <div className="d-flex align-items-center">
            <div className="position-relative me-3">
              <img 
                src={logo} 
                alt="Jenkinson Sea Life Logo" 
                className="img-fluid transition-transform duration-300 hover:scale-110"
                style={{ 
                  height: isScrolled ? '45px' : '55px',
                  transition: 'height 0.3s ease'
                }} 
              />
            </div>
            
            <div className="position-relative me-3">
              <img 
                src={seaImage} 
                alt="Sea Creature" 
                className="rounded-circle shadow-sm border border-2 border-white transition-transform duration-300 hover:scale-105"
                style={{ 
                  height: isScrolled ? '45px' : '55px',
                  width: isScrolled ? '45px' : '55px',
                  objectFit: 'cover',
                  transition: 'all 0.3s ease'
                }} 
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3))',
                  mixBlendMode: 'overlay'
                }}
              />
            </div>

            <div>
              <h1 
                className="mb-0 fw-bold text-gradient d-none d-md-block"
                style={{ 
                  fontSize: isScrolled ? '1.8rem' : '2.2rem',
                  background: 'linear-gradient(135deg, #1e40af, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'font-size 0.3s ease',
                  letterSpacing: '-0.5px'
                }}
              >
                Jenkinson Sea Life
              </h1>
              <h2 
                className="mb-0 fw-bold text-gradient d-md-none"
                style={{ 
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, #1e40af, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.3px'
                }}
              >
                JSL
              </h2>
            </div>
          </div>

          {/* Stats Section */}
          <div className="d-flex align-items-center">
            <div 
              className={`px-4 py-2 rounded-pill transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' 
                  : 'bg-white/80 backdrop-blur-sm shadow-sm border border-blue-200'
              }`}
            >
              <div className="d-flex align-items-center">
                <svg 
                  className="me-2" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span 
                  className="fw-semibold d-none d-sm-inline me-2"
                  style={{ fontSize: '0.9rem' }}
                >
                  Visitors:
                </span>
                <span 
                  className="fw-bold"
                  style={{ 
                    fontSize: '1.1rem',
                    fontVariantNumeric: 'tabular-nums'
                  }}
                >
                  {visitorCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Subtle bottom border animation */}
      <div 
        className="position-absolute bottom-0 start-0 h-1"
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(16, 185, 129, 0.5), transparent)',
          opacity: isScrolled ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
    </header>
  );
}

export default Header;