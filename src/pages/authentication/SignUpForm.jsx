import React from 'react';
import { validateRegisterForm } from '../../components/validator/AuthValidator';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
      errors: {},
      isLoading: false,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;

    this.setState({ 
      [name]: finalValue,
      errors: { ...this.state.errors, [name]: '' }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, termsAccepted } = this.state;
    
    // 1. USE EXTERNAL VALIDATOR
    const validationErrors = validateRegisterForm(username, email, password, confirmPassword, termsAccepted);

    // 2. CHECK ERRORS
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      
      // 3. AUTO-HIDE ERRORS
      setTimeout(() => {
        this.setState({ errors: {} });
      }, 3000);
      return;
    }

    this.setState({ isLoading: true });
    setTimeout(() => {
      alert('Register successful');
      this.setState({ isLoading: false, username: '', email: '', password: '', confirmPassword: '' });
    }, 800);
  };

  render() {
    const { isActive, onSwitchMode } = this.props;
    const { username, email, password, confirmPassword, errors, isLoading, termsAccepted } = this.state;

    return (
      <div className={`auth-panel right-panel ${isActive ? 'active' : ''}`}>
        <div className="head_right">
          <h1>SIGN UP</h1>
        </div>

        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <section className="form_signup">
            
            {/* USERNAME */}
            <div className="input-wrapper">
              <label htmlFor="username" className="username">Username</label>
              <input
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                autoComplete="off"
                value={username}
                onChange={this.handleChange}
              />
              {errors.username && <small className="error-msg">{errors.username}</small>}
            </div>

            {/* EMAIL */}
            <div className="input-wrapper">
              <label htmlFor="email_signup" className="email_signup">Email</label>
              <input
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                type="email"
                name="email"
                id="email_signup"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={this.handleChange}
              />
              {errors.email && <small className="error-msg">{errors.email}</small>}
            </div>

            {/* PASSWORD */}
            <div className="input-wrapper">
              <label htmlFor="password_signup" className="password_signup">Password</label>
              <input
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                type="password"
                name="password"
                id="password_signup"
                placeholder="Enter your password"
                autoComplete="off"
                value={password}
                onChange={this.handleChange}
              />
              {errors.password && <small className="error-msg">{errors.password}</small>}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-wrapper">
              <label htmlFor="confirm_password" className="password_signup">Confirm Password</label>
              <input
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                type="password"
                name="confirmPassword"
                id="confirm_password"
                placeholder="Confirm your password"
                autoComplete="off"
                value={confirmPassword}
                onChange={this.handleChange}
              />
              {errors.confirmPassword && <small className="error-msg">{errors.confirmPassword}</small>}
            </div>

          </section>

          <div id="footer_signup" style={{ position: 'relative' }}> {/* <--- ADD THIS STYLE */}
            <label className="remember-wrap" style={{ cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                id="terms" 
                name="termsAccepted"       
                checked={termsAccepted}   
                onChange={this.handleChange} 
              />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
            {errors.terms && <small className="error-msg" style={{ bottom: '-1rem', left: 0 }}>{errors.terms}</small>}
          </div>

          <button type="submit" className="auth-btn" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Sign up'}
          </button>

          <div className="switch-auth-mode">
            <span>Already have an account?</span>
            <button type="button" className="switch-link" onClick={onSwitchMode}> Sign in</button>
          </div>

          <p className="auth-separator">Or</p>

          <ul className="container_gambar_signup">
            <li><a href="https://www.google.com/"><img src="/assets/logo/Google.png" alt="google" /></a></li>
            <li><a href="https://www.facebook.com/"><img src="/assets/logo/Facebook.png" alt="facebook" /></a></li>
            <li><a href="https://github.com/Dendroculus/Food-Recipe-Website"><img src="/assets/logo/Github.png" alt="github" /></a></li>
            <li><a href="https://twitter.com/"><img src="/assets/logo/X.png" alt="X" /></a></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default SignUpForm;