

const Hero = () => {
  return (
    <div className="support-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">We're Here to Help</h1>
            <p className="hero-subtitle">
              Our dedicated support team is available 24/7 to assist you with any questions or issues you may have. 
              We're committed to providing you with the best possible experience.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <div className="hero-graphic">
                <div className="graphic-item graphic-1">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="graphic-item graphic-2">
                  <i className="fas fa-comments"></i>
                </div>
                <div className="graphic-item graphic-3">
                  <i className="fas fa-question-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;