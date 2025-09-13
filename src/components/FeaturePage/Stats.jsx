import React from 'react';

const Stats = () => {
  return (
    <div className="stats-section mb-5">
      <div className="row text-center">
        <div className="col-md-3 col-6 mb-4">
          <div className="stat-item">
            <div className="stat-number">500K+</div>
            <div className="stat-label">Active Users</div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="stat-item">
            <div className="stat-number">$2.5B</div>
            <div className="stat-label">Assets Managed</div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">User Satisfaction</div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;