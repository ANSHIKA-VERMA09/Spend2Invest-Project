import React from 'react';
import Expense from "./Expense";
import DataSecurity from "./DataSecurity";
import SavingGoals from "./SavingGoals";
import InvestmentGuidance from "./InvestmentGuidance"; 
import HowItWorks from "./HowItWorks";
import Benefits from "./Benefits";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount"; 
import './FeaturePage.css';

export default function FeaturePage() {
  return (
    <div className="feature-page">
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="feature-title">Our Features</h2>
          <p className="feature-subtitle">Everything you need to manage your finances effectively</p>
          <div className="title-underline"></div>
        </div>
        
        {/* Features Grid */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-3">
            <Expense />
          </div>
          <div className="col-md-6 col-lg-3">
            <DataSecurity />
          </div>
          <div className="col-md-6 col-lg-3">
            <SavingGoals />
          </div>
          <div className="col-md-6 col-lg-3">
            <InvestmentGuidance />
          </div>
        </div>
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Benefits Section */}
        <Benefits />
        
        {/* Stats Section */}
        <Stats />
        
        {/* OpenAccount Section */}
        <div className="mt-5 pt-4">
          <OpenAccount />
        </div>
      </div>
    </div>
  );
}