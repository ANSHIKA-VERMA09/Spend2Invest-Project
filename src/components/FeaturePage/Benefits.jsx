import React from 'react';

const Benefits = () => {
  return (
    <div className="benefits-section mb-5">
      <div className="text-center mb-4">
        <h3 className="section-title">Why Choose Spend2Invest</h3>
        <p className="section-subtitle">Experience the difference with our comprehensive financial platform</p>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <div className="benefit-content">
              <h4>Real-time Sync</h4>
              <p>All your financial data syncs across devices in real-time, so you're always up to date</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="benefit-content">
              <h4>Smart Insights</h4>
              <p>Our AI analyzes your spending patterns to provide personalized financial insights</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="benefit-content">
              <h4>Mobile First</h4>
              <p>Manage your finances on the go with our intuitive mobile app</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="benefit-content">
              <h4>Expert Support</h4>
              <p>Access our team of financial advisors whenever you need guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;