import React from 'react';

const Home = () => {
  // Styles Objects
  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6dg1_pW0Py_r76INflR7w3OLCRZVanO3P2JmKg-qVg&s)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const navbarStyle = {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 48px',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '40px',
    fontSize: '14px',
    fontWeight: '500',
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
  };

  const accountStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  };

  const heroSectionStyle = {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 48px',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    flexGrow: 1,
  };

  const followUsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    fontSize: '12px',
    letterSpacing: '2px',
    color: '#d1d5db',
    transform: 'rotate(-90deg)',
  };

  const lineStyle = {
    width: '48px',
    height: '1px',
    backgroundColor: '#d1d5db',
  };

  const heroContentStyle = {
    maxWidth: '550px',
    margin: '0 auto',
  };

  const guideWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  };

  const yellowLineStyle = {
    width: '32px',
    height: '2px',
    backgroundColor: '#eab308',
  };

  const hikingGuideStyle = {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    color: '#eab308',
    fontWeight: '600',
  };

  const headingStyle = {
    fontSize: '48px',
    fontFamily: 'serif',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '24px',
  };

  const scrollDownStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  };

  const paginationStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '12px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#9ca3af',
  };

  const activePageStyle = {
    color: '#ffffff',
    fontWeight: 'bold',
    borderRight: '2px solid #ffffff',
    paddingRight: '12px',
  };

  return (
    <div style={containerStyle}>
      {/* Dark Overlay */}
      <div style={overlayStyle}></div>

      {/* Navbar */}
      <nav style={navbarStyle}>
        <div style={logoStyle}>Alpine Heights</div>
        
        <div style={navLinksStyle}>
          <a href="#equipment" style={linkStyle}>Equipment</a>
          <a href="#about" style={linkStyle}>About us</a>
          <a href="#blog" style={linkStyle}>Blog</a>
        </div>

        <div style={accountStyle}>
          <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Account</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={heroSectionStyle}>
        
        {/* Left Side: Follow Us */}
        <div style={followUsStyle}>
          <span>FOLLOW US</span>
          <div style={lineStyle}></div>
        </div>

        {/* Center Content */}
        <div style={heroContentStyle}>
          <div style={guideWrapperStyle}>
            <div style={yellowLineStyle}></div>
            <span style={hikingGuideStyle}>A Hiking Guide</span>
          </div>
          <h1 style={headingStyle}>Be Prepared For The Mountains And Beyond!</h1>
          <div style={scrollDownStyle}>
            <span >scroll down</span>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Right Side: Pagination */}
        <div style={paginationStyle}>
          <span style={activePageStyle}>01</span>
        </div>

      </div>
    </div>
  );
};

export default Home;