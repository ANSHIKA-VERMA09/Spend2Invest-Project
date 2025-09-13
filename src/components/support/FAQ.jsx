import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Enter your email address and follow the instructions sent to your inbox."
    },
    {
      question: "How can I link my bank account?",
      answer: "You can link your bank account by going to Settings > Accounts > Add Account. Follow the prompts to securely connect your bank using our encrypted connection."
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level encryption and security protocols to protect your data. We never store your banking credentials and all data is encrypted both in transit and at rest."
    },
    {
      question: "How do I set up a budget?",
      answer: "To set up a budget, go to the Budget section and click 'Create New Budget'. Set your spending limits for different categories and track your progress."
    },
    {
      question: "Can I use Spend2Invest on multiple devices?",
      answer: "Yes, Spend2Invest syncs across all your devices. Simply log in with your account on any device to access your data."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section mb-5">
      <div className="text-center mb-4">
        <h3 className="section-title">Frequently Asked Questions</h3>
        <p className="section-subtitle">Find answers to common questions about Spend2Invest</p>
      </div>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <h4>{faq.question}</h4>
              <i className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <button className="btn btn-outline-primary">View All FAQs</button>
      </div>
    </div>
  );
};

export default FAQ;