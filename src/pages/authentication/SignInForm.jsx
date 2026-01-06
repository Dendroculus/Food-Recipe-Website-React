import React from 'react';
import { Link } from 'react-router-dom';
import { validateLoginForm } from '../../components/validator/AuthValidator'; 
import PasswordInput from './AuthPasswordInput';

/**
 * SignInForm component renders the login form and handles local form state and validation.
 *
 * Props:
 * - isActive: boolean - whether the sign-in panel is currently active/visible
 * - onSwitchMode: function - callback to switch to the sign-up mode
 *
 * @extends React.Component
 */
class SignInForm extends React.Component {
  /**
   * Initialize component state for the sign-in form.
   * state:
   * - email: string
   * - password: string
   * - errors: object
   * - isLoading: boolean
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
    };
  }

  /**
   * Handle form input changes and clear field-specific errors immediately.
   * @param {Event} e - Input change event.
   * @returns {void}
   */
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value,
      // Clear error immediately when user types
      errors: { ...this.state.errors, [name]: '' } 
    });
  };

  /**
   * Handle form submission: validate using external validator, show errors, or simulate login.
   * @param {Event} e - Form submit event.
   * @returns {void}
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
    // 1. USE EXTERNAL VALIDATOR
    const validationErrors = validateLoginForm(email, password);

    // 2. CHECK ERRORS
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });

      // 3. AUTO-HIDE ERRORS AFTER 3 SECONDS
      setTimeout(() => {
        this.setState({ errors: {} });
      }, 3000);
      return;
    }

    // Simulate Login
    this.setState({ isLoading: true });
    setTimeout(() => {
      alert('Login successful');
      this.setState({ isLoading: false, email: '', password: '' });
    }, 800);
  };

  /**
   * Render the sign-in form panel.
   * @returns {JSX.Element} Sign-in panel JSX.
   */
  render() {
    const { isActive, onSwitchMode } = this.props;
    const { email, password, errors, isLoading } = this.state;

    return (
      <div className={`auth-panel left-panel ${isActive ? 'active' : ''}`}>
        <header className="auth-header">
          <h1>WELCOME BACK <img src="/assets/forms/wave-unscreen.gif" alt="wave" /></h1>
          <p className="auth-details">Welcome back! Please enter your details.</p>
        </header>

        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <section className="form_login">
            
            {/* EMAIL WRAPPER */}
            <div className="input-wrapper">
              <label htmlFor="email" className="email">Email</label>
              <input
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={this.handleChange}
              />
              {errors.email && <small className="error-msg">{errors.email}</small>}
            </div>

            {/* PASSWORD WRAPPER */}
            <PasswordInput 
              name="password"
              label="Password"
              value={password}
              onChange={this.handleChange}
              error={errors.password}
              placeholder="Enter your password"
              id="password"
              className="password"
              autoComplete="off" />

          </section>

          <div className="auth-footer">
            <label className="remember-wrap">
              <input type="checkbox" id="kotak" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="auth-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Sign in'}
          </button>

          <p className="auth-separator">Or</p>

          <div className="switch-auth-mode">
            <span>Don&apos;t have an account?</span>
            <button type="button" className="switch-link" onClick={onSwitchMode}> Sign up</button>
          </div>

          <ul className="container_gambar">
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

export default SignInForm;