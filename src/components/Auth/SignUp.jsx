import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear password error when user types
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    
    if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    
    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setPasswordError('');
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup form submitted:', formData);
      setIsSubmitting(false);
      // In a real app, you would handle registration here
    }, 1500);
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    // In a real app, you would redirect to Google OAuth
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 " style={{ marginTop: '100px',marginBottom: '50px' }}>
      <div className="card shadow-lg auth-card" style={{ width: '100%', maxWidth: '450px',height:'700px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Create Account</h2>
            <p className="text-muted">Join Spend2Invest to manage your finances</p>
          </div>
          
          {error && (
            <div className="alert alert-danger mb-3">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <span className="input-group-text bg-primary text-white">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
              />
            </div>
            
            <div className="mb-3 input-group">
              <span className="input-group-text bg-primary text-white">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
              />
            </div>
            
            <div className="mb-3 input-group">
              <span className="input-group-text bg-primary text-white">
                <i className="bi bi-lock-fill"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
              />
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
            
            <div className="mb-3 input-group">
              <span className="input-group-text bg-primary text-white">
                <i className="bi bi-lock-fill"></i>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm Password"
              />
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
            {passwordError && <div className="alert alert-danger py-2">{passwordError}</div>}
            
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="agreeToTerms">
                I agree to the <Link to="/terms" className="text-primary">Terms of Service</Link> and <Link to="/privacy" className="text-primary">Privacy Policy</Link>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2 mb-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Creating Account...
                </>
              ) : 'Sign Up'}
            </button>
          </form>
          
          <div className="d-flex align-items-center my-4">
            <div className="border-bottom flex-grow-1"></div>
            <span className="mx-3 text-muted">OR</span>
            <div className="border-bottom flex-grow-1"></div>
          </div>
          
          <button 
            className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center"
            onClick={handleGoogleSignup}
          >
            <i className="bi bi-google me-2"></i>
            Sign Up with Google
          </button>
          
          <div className="text-center mt-4">
            <p className="mb-0">Already have an account? <Link to="/login" className="text-primary text-decoration-none">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;