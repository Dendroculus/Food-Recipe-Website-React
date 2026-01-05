import React from 'react';

/**
 * AuthOverlay component renders the split overlay panels for auth pages.
 * Provides buttons to switch between sign-in and sign-up modes via callbacks.
 *
 * Props:
 * - onSwitchToSignIn: function - callback invoked when the "Sign In" button is clicked
 * - onSwitchToSignUp: function - callback invoked when the "Sign Up" button is clicked
 *
 * @extends React.Component
 */
class AuthOverlay extends React.Component {
  /**
   * Render the overlay panels with action buttons.
   * @returns {JSX.Element} Overlay section JSX.
   */
  render() {
    const { onSwitchToSignIn, onSwitchToSignUp } = this.props;

    return (
      <section className="overlay-container" aria-hidden="true">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button className="to_btn" onClick={onSwitchToSignIn}>
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h2>Hey There!</h2>
            <p>Enter your personal details and start your cooking journey with us</p>
            <button className="to_btn" onClick={onSwitchToSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthOverlay;