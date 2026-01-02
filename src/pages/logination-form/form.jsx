import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class AuthPage extends React.Component {
  state = {
    mode: 'signin', // 'signin' | 'signup'
  };

  setMode = (mode) => () => this.setState({ mode });

  render() {
    const { mode } = this.state;
    const isSignIn = mode === 'signin';

    return (
      <div className="auth-page">
        {/* Top nav */}
        <nav className="top-nav" role="navigation" aria-label="Primary">
          <Link className="home-link" to="/" aria-label="Go to Home">
            <svg className="home-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.172 2.5 11h1.9v8a1 1 0 0 0 1 1H10v-6h4v6h4.6a1 1 0 0 0 1-1v-8h1.9L12 3.172z" />
            </svg>
            Home
          </Link>
        </nav>

        {/* Wrapper gets mode-signin / mode-signup */}
        <section className={`form_box ${isSignIn ? 'mode-signin' : 'mode-signup'}`}>
          {/* Left: Sign in */}
          <div id="left" className={isSignIn ? 'active' : ''}>
            <header id="head">
              <h1>
                WELCOME BACK <img src="/assets/forms/wave-unscreen.gif" alt="wave" />
              </h1>
              <p id="details">Welcome back! Please enter your details.</p>
            </header>

            <form className="form" action="Sign_in">
              <section className="form_login">
                <label htmlFor="email" className="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  minLength={5}
                />
                <label htmlFor="password" className="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                  minLength={4}
                />
              </section>

              <div id="footer">
                <label className="remember-wrap">
                  <input type="checkbox" id="kotak" />
                  <span>Remember me</span>
                </label>
                <a href="/forgot-password" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" id="button">Sign in</button>

              <p id="or">Or</p>

              <div id="sign_up">
                <span>Don&apos;t have an account?</span>
                <button type="button" className="switch-link" onClick={this.setMode('signup')}>
                  {' '}Sign up
                </button>
              </div>

              <ul className="container_gambar">
                <li><a href="https://www.google.com/"><img src="/assets/logo/Google.png" alt="google" /></a></li>
                <li><a href="https://www.facebook.com/"><img src="/assets/logo/Facebook.png" alt="facebook" /></a></li>
                <li><a href="https://github.com/Dendroculus/Food-Recipe-Website"><img src="/assets/logo/Github.png" alt="github" /></a></li>
                <li><a href="https://twitter.com/"><img src="/assets/logo/X.png" alt="X" /></a></li>
              </ul>
            </form>
          </div>

          {/* Right: Sign up */}
          <div id="right" className={!isSignIn ? 'active' : ''}>
            <div className="head_right">
              <h1>SIGN UP</h1>
            </div>

            <form className="form" action="Sign_up">
              <section className="form_signup">
                <label htmlFor="username" className="username">Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  autoComplete="off"
                  minLength={5}
                />
                <label htmlFor="email_signup" className="email_signup">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email_signup"
                  id="email_signup"
                  placeholder="Enter your email"
                  autoComplete="off"
                  minLength={5}
                />
                <label htmlFor="password_signup" className="password_signup">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password_signup"
                  id="password_signup"
                  placeholder="Enter your password"
                  autoComplete="off"
                  minLength={4}
                />
              </section>

              <div id="footer_signup">
                <label className="remember-wrap">
                  <input type="checkbox" id="kotak2" />
                  <span>I agree to the Terms of Service and Privacy Policy</span>
                </label>
              </div>

              <button type="submit" id="button_signup">Sign up</button>

              <div id="sign_in">
                <span>Already have an account?</span>
                <button type="button" className="switch-link" onClick={this.setMode('signin')}>
                  {' '}Sign in
                </button>
              </div>

              <p id="or_signup">Or</p>

              <ul className="container_gambar_signup">
                <li><a href="https://www.google.com/"><img src="/assets/logo/Google.png" alt="google" /></a></li>
                <li><a href="https://www.facebook.com/"><img src="/assets/logo/Facebook.png" alt="facebook" /></a></li>
                <li><a href="https://github.com/Dendroculus/Food-Recipe-Website"><img src="/assets/logo/Github.png" alt="github" /></a></li>
                <li><a href="https://twitter.com/"><img src="/assets/logo/X.png" alt="X" /></a></li>
              </ul>
            </form>
          </div>

          {/* Overlay */}
          <section className="overlay-container" aria-hidden="true">
            <div className="overlay">
              <button
                type="button"
                className="overlay-panel overlay-left"
                onClick={this.setMode('signin')}
                aria-label="Switch to Sign In"
              >
                <h2>Welcome Back!</h2>
                <p>To keep connected with us please login with your personal info</p>
                <span className="to_btn">Sign In</span>
              </button>

              <button
                type="button"
                className="overlay-panel overlay-right"
                onClick={this.setMode('signup')}
                aria-label="Switch to Sign Up"
              >
                <h2>Hey There!</h2>
                <p>Enter your personal details and start your cooking journey with us</p>
                <span className="to_btn">Sign Up</span>
              </button>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default AuthPage;