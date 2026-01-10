import React from 'react';

/**
 * Component that handles cookie consent logic, local storage persistence,
 * and renders the interactive Cookie Popup and Customization Modal.
 * @extends React.Component
 */
class CookieConsent extends React.Component {
  /**
   * Constructor for CookieConsent.
   * @param {object} props - Component props.
   */
  constructor(props) {
    super(props);

    /**
     * Component state.
     * @property {boolean} showCookiePopup - Controls visibility of the initial small popup.
     */
    this.state = { showCookiePopup: false };
    
    this.handleCookieAction = this.handleCookieAction.bind(this);
    this.closeCookiePopup = this.closeCookiePopup.bind(this);

    /**
     * Configuration for the detailed cookie preferences list.
     * Used to generate the accordion sections in the customize modal.
     * @type {Array<{key: string, title: string, desc: string, locked: boolean, defaultOpen: boolean, hasToggle: boolean, list: string[], defaultChecked?: boolean}>}
     */
    this.cookieSections = [
      {
        key: 'essential',
        title: 'Essential cookies',
        desc: 'Required for the website to function. This includes security, network management, and accessibility.',
        locked: true, defaultOpen: true, hasToggle: false,
        list: ['Load balancing and session management', 'Fraud prevention and security', 'Basic preferences like language'],
      },
      {
        key: 'analytics',
        title: 'Analytics cookies',
        desc: 'Help us understand site usage so we can improve recipes and features.',
        locked: false, defaultOpen: false, hasToggle: true, defaultChecked: false,
        list: ['Aggregate traffic insights (pages visited, time on page)', 'Error tracking to fix broken pages'],
      },
      {
        key: 'preferences',
        title: 'Preference cookies',
        desc: 'Remember your choices like theme, language, or favourite recipes.',
        locked: false, defaultOpen: false, hasToggle: true, defaultChecked: true,
        list: ['Stores display preferences (e.g., dark mode)', 'Keeps items saved to your recipe list'],
      },
      {
        key: 'marketing',
        title: 'Marketing cookies',
        desc: 'Used to show you relevant content and offers based on your interests.',
        locked: false, defaultOpen: false, hasToggle: true, defaultChecked: false,
        list: ['Limits how often you see the same promo', 'Measures campaign performance'],
      },
      {
        key: 'geolocation',
        title: 'Precise geolocation data, and identification through device scanning',
        desc: 'Allow us to use accurate location and device signals to deliver localised content.',
        locked: false, defaultOpen: false, hasToggle: true, defaultChecked: false,
        list: ['Use exact location to tailor nearby seasonal ingredients', 'Identify device characteristics for fraud prevention'],
      },
    ];
  }

  /**
   * Lifecycle method triggered after component mounts.
   * Checks LocalStorage for existing consent. If none exists, shows the popup.
   */
  componentDidMount() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.setState({ showCookiePopup: true });
    }
  }

  /**
   * Handles the user's decision (Accept, Reject, Custom).
   * Saves the decision to LocalStorage and closes the popup.
   * @param {string} status - The consent status ('accepted', 'rejected', or 'custom').
   */
  handleCookieAction(status) {
    localStorage.setItem('cookieConsent', status);
    this.closeCookiePopup();
  }

  /**
   * Hides the small cookie popup and removes the URL hash
   * to prevent the modal from staying open via CSS :target.
   */
  closeCookiePopup() {
    this.setState({ showCookiePopup: false });
    if (window.location.hash === '#cookies-modal') {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }

  /**
   * Renders the Cookie Consent UI elements.
   * @returns {JSX.Element} A fragment containing the small popup and the large customization modal.
   */
  render() {
    const { showCookiePopup } = this.state;
    const isSmallPopupOpen = showCookiePopup; 

    return (
      <>
        <div 
          id="cookies-modal" 
          className="modal"
          style={isSmallPopupOpen ? { display: 'flex' } : {}}
        >
          <div className="modal-content">
            <a href="#!" className="close" onClick={this.closeCookiePopup}>×</a>
            <h2>Cookies</h2>
            <p>This project does not use cookies. Any references to cookies are for interface demonstration purposes only.</p>
            
            <button className="accept btn" onClick={() => this.handleCookieAction('accepted')}>ACCEPT ALL</button>
            <button className="reject btn" onClick={() => this.handleCookieAction('rejected')}>REJECT ALL</button>
            
            <a href="#customize-modal" className="customize btn">CUSTOMIZE COOKIES</a>
          </div>
        </div>

        <div id="customize-modal" className="modal">
          <div className="modal-content cookie-modal">
            <a href="#!" className="close" aria-label="Close">×</a>

            <header className="cookie-header">
              <h2>Manage Cookie Preferences</h2>
              <p className="cookie-intro">
                We use cookies and similar technologies to deliver, maintain, and improve our services...
              </p>
              <nav className="cookie-actions-top">
                <a href="#!" className="ghost-action" onClick={() => this.handleCookieAction('rejected')}>Reject all</a>
                <a href="#!" className="ghost-action" onClick={() => this.handleCookieAction('accepted')}>Accept all</a>
              </nav>
            </header>

            <div className="cookie-body">
              <section className="cookie-group">
                {this.cookieSections.map((section) => (
                  <details key={section.key} open={section.defaultOpen} className="cookie-group">
                    <summary>
                      <div className="sum-text">
                        <div className="title">{section.title}</div>
                        <div className="desc">{section.desc}</div>
                      </div>
                      {section.locked && <span className="badge locked">Required</span>}
                      {section.hasToggle && (
                        <label className="switch" aria-label={`Toggle ${section.title.toLowerCase()}`}>
                          <input type="checkbox" defaultChecked={section.defaultChecked} />
                          <span className="track"></span>
                          <span className="switch-text" aria-hidden="true"></span>
                        </label>
                      )}
                    </summary>
                    <ul className="list">
                      {section.list.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </details>
                ))}
              </section>
              <a href="#!" className="partners-link">Partners</a>
            </div>

            <footer className="cookie-footer">
              <small className="legal">
                You can update your choices at any time. See our <a href="#privacy-modal">Privacy Policy</a> and <a href="#cookies-modal">Cookies</a>.
              </small>
              <a href="#!" className="cookies-save btn-cta" onClick={() => this.handleCookieAction('custom')}>Save &amp; Exit</a>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default CookieConsent;