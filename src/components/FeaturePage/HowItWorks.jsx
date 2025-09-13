// import React from 'react';

const HowItWorks = () => {
  return (
    <div className="how-it-works mb-5">
      <div className="text-center mb-4">
        <h3 className="section-title">How Spend2Invest Works</h3>
        <p className="section-subtitle">A simple 3-step process to transform your financial future</p>
      </div>
      
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div className="step-circle">1</div>
          <h4>Track Expenses</h4>
          <p>Monitor your spending habits and categorize expenses automatically</p>
        </div>
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div className="step-circle">2</div>
          <h4>Set Goals</h4>
          <p>Create personalized savings goals and investment targets based on your financial situation</p>
        </div>
        <div className="col-md-4 text-center">
          <div className="step-circle">3</div>
          <h4>Invest Wisely</h4>
          <p>Receive tailored investment recommendations and grow your wealth over time</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;