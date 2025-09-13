import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login form submitted:', formData);
      setIsSubmitting(false);
      // In a real app, you would handle authentication here
    }, 1500);
  };

  const handleGoogleLogin = () => {
    // Simulate Google OAuth
    console.log('Google login clicked');
    // In a real app, you would redirect to Google OAuth
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg auth-card" style={{ width: '100%', maxWidth: '450px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Welcome Back</h2>
            <p className="text-muted">Sign in to continue to Spend2Invest</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <span className="input-group-text bg-primary text-white">
                <i className="fas fa-envelope"></i>
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
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
              />
            </div>
            
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-primary text-decoration-none">
                Forgot Password?
              </Link>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2 mb-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Signing In...
                </>
              ) : 'Sign In'}
            </button>
          </form>
          
          <div className="d-flex align-items-center my-4">
            <div className="border-bottom flex-grow-1"></div>
            <span className="mx-3 text-muted">OR</span>
            <div className="border-bottom flex-grow-1"></div>
          </div>
          
          <button 
            className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center"
            onClick={handleGoogleLogin}
          >
            <i className="fab fa-google me-2"></i>
            Continue with Google
          </button>
          
          <div className="text-center mt-4">
            <p className="mb-0">Don't have an account? <Link to="/signup" className="text-primary text-decoration-none">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;