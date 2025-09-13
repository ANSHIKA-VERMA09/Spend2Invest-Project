import React from 'react';

const Expense = () => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <i className="fas fa-wallet"></i>
      </div>
      <h3>Expense Tracking</h3>
      <p>Monitor your spending in real-time with our intuitive expense tracking system. Categorize expenses, set limits, and receive notifications when you're approaching your budget.</p>
      <button className="feature-btn">Learn More</button>
    </div>
  );
};

export default Expense;