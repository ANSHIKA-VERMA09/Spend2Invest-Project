import { useState } from 'react';
import Hero from "./Hero";
import Types from "./Types";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import './SupportPage.css';

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="support-page">
      <Hero />
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">How Can We Help You?</h2>
          <p className="section-subtitle">We're here to assist you with any questions or issues</p>
          <div className="title-underline"></div>
        </div>
        
        {/* Support Types Navigation */}
        <div className="support-nav mb-5">
          <div className="d-flex justify-content-center flex-wrap">
            <button 
              className={`support-nav-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Support
            </button>
            <button 
              className={`support-nav-btn ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              FAQs
            </button>
            <button 
              className={`support-nav-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Us
            </button>
            <button 
              className={`support-nav-btn ${activeTab === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
          </div>
        </div>
        
        {/* Support Types Section */}
        <Types />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact Form Section */}
        <ContactForm />
        
        
      </div>
    </div>
  );
}