// import React from 'react';
// import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">About Spend2Invest</h1>
            <p className="hero-subtitle">
              We're a team of passionate financial experts and tech innovators dedicated to transforming how people manage their money. Our mission is to empower individuals with the tools and knowledge to make smarter financial decisions.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2025</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Founders</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Users</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
  <div className="hero-image">
    <div className="hero-graphic">
      <div className="graphic-item graphic-1">
        <div className="graphic-icon">
          <i className="fas fa-receipt"></i>
        </div>
        <div className="step-number">1</div>
        <div className="graphic-text">Expenses</div>
      </div>
      <div className="graphic-item graphic-2">
        <div className="graphic-icon">
          <i className="fas fa-calculator"></i>
        </div>
        <div className="step-number">2</div>
        <div className="graphic-text">Budget</div>
      </div>
      <div className="graphic-item graphic-3">
        <div className="graphic-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="step-number">3</div>
        <div className="graphic-text">Invest</div>
      </div>
      
      {/* Connecting lines between steps */}
      <div className="connector connector-1"></div>
      <div className="connector connector-2"></div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;