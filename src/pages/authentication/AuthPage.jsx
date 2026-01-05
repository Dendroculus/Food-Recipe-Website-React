import React from 'react';
import './Auth.css';
import '../../components/validator/AuthValidator.css';
import { Link } from "react-router-dom";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import AuthOverlay from './AuthOverlay';

/**
 * AuthPage component that manages sign-in / sign-up UI mode and layout.
 * Uses local state to toggle between modes and renders SignInForm, SignUpForm, and AuthOverlay.
 *
 * State:
 * - mode: 'signin' | 'signup'  Controls which panel is active.
 *
 * @extends React.Component
 */
class AuthPage extends React.Component {
  /**
   * Local component state controlling the active mode.
   */
  state = {
    mode: 'signin', 
  };

  /**
   * Returns a handler that sets the auth mode when invoked.
   * Used to switch between 'signin' and 'signup' panels.
   * @param {string} mode - Target mode ('signin' or 'signup').
   * @returns {Function} Event handler that updates component state.
   */
  setMode = (mode) => () => this.setState({ mode });

  /**
   * Render the auth page, including navigation and selected auth panel.
   * @returns {JSX.Element} Auth page JSX.
   */
  render() {
    const { mode } = this.state;
    const isSignIn = mode === 'signin';

    return (
      <div className="auth-page">
        <nav className="top-nav" role="navigation" aria-label="Primary">
          <Link className="home-link" to="/" aria-label="Go to Home">
            <svg className="home-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.172 2.5 11h1.9v8a1 1 0 0 0 1 1H10v-6h4v6h4.6a1 1 0 0 0 1-1v-8h1.9L12 3.172z" />
            </svg>
            Home
          </Link>
        </nav>

        <section className={`form_box ${isSignIn ? 'mode-signin' : 'mode-signup'}`}>
          
          <SignInForm 
            isActive={isSignIn} 
            onSwitchMode={this.setMode('signup')} 
          />

          <SignUpForm 
            isActive={!isSignIn} 
            onSwitchMode={this.setMode('signin')} 
          />

          <AuthOverlay 
            onSwitchToSignIn={this.setMode('signin')}
            onSwitchToSignUp={this.setMode('signup')}
          />

        </section>
      </div>
    );
  }
}

export default AuthPage;