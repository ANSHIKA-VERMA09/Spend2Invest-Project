import { useState } from 'react';
import './SupportPage.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // In a real implementation, this would be an API call to your backend
      // axios.post('/api/contact', formData)
      
      // Simulate successful submission
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-form-section">
      <div className="text-center mb-4">
        <h3 className="section-title">Contact Us</h3>
        <p className="section-subtitle">Can't find what you're looking for? Send us a message</p>
      </div>
      
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="contact-form-card">
            {submitStatus === 'success' && (
              <div className="alert alert-success" role="alert">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle me-2"></i>
                  <div>
                    <strong>Message Sent!</strong> We've received your inquiry and sent a confirmation email to your inbox.
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div className="email-info-card mt-4">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-envelope me-2"></i>
                What happens next?
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  You'll receive an automated confirmation email immediately
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Our support team will review your message within 24 hours
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  We'll send a personalized response to your email
                </li>
                <li>
                  <i className="fas fa-check text-success me-2"></i>
                  Your inquiry will be assigned a ticket number for tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;