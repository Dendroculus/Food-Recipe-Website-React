import React from 'react';
import './Modals.css';

/**
 * Modals component managing multiple informational modals and a cookie preferences modal.
 * Renders simple modals (terms, privacy, cookies, disclaimer) and a customize cookie modal.
 * @extends React.Component
 */
class Modals extends React.Component {
  constructor(props) {
    super(props);

    // Simple modal definitions
    /**
     * List of simple modal definitions rendered by renderSimpleModals.
     * Each modal object includes:
     * - id: string - element id used for modal anchor
     * - title: string - modal title
     * - paragraphs: string[] - paragraphs to render inside modal
     * - extraButtons?: Array<{className: string, label: string}>
     * - extraLink?: {href: string, className: string, label: string}
     * @type {Array<Object>}
     */
    this.simpleModals = [
      {
        id: 'terms-modal',
        title: 'Terms of Use',
        paragraphs: [
          'This project is created for educational purposes only. All content, images, and code included are for study and demonstration.',
          'Images used in this project are sourced randomly for learning purposes and are not intended for redistribution or commercial use.',
          'The code is released under the MIT License. You are free to study, modify, and use it for personal learning or academic projects.',
        ],
      },
      {
        id: 'privacy-modal',
        title: 'Privacy Policy',
        paragraphs: [
          'No personal data is collected in this project. Any email inputs (e.g., in forms) are purely for demonstration and do not send or store real data.',
          'This project is meant only to show functionality and interface design for learning purposes.',
        ],
      },
      {
        id: 'cookies-modal',
        title: 'Cookies',
        paragraphs: [
          'This project does not use cookies. Any references to cookies are for interface demonstration purposes only.',
        ],
        extraButtons: [
          { className: 'accept btn', label: 'ACCEPT ALL' },
          { className: 'reject btn', label: 'REJECT ALL' },
        ],
        extraLink: {
          href: '#customize-modal',
          className: 'customize btn',
          label: 'CUSTOMIZE COOKIES',
        },
      },
      {
        id: 'disclaimer-modal',
        title: 'Disclaimer',
        paragraphs: [
          'This website and its cookie settings are for educational purposes only as part of a school project. No actual data is collected or stored.',
          'Some images used in this project are sourced from Google Images and are for educational and demonstration purposes only. All rights belong to their respective owners',
        ],
      },
    ];

    // Cookie preference sections
    /**
     * Cookie preference section definitions displayed inside the customize cookie modal.
     * Each section includes:
     * - key: string
     * - title: string
     * - desc: string
     * - locked: boolean
     * - defaultOpen: boolean
     * - hasToggle: boolean
     * - defaultChecked?: boolean
     * - list: string[]
     * @type {Array<Object>}
     */
    this.cookieSections = [
      {
        key: 'essential',
        title: 'Essential cookies',
        desc:
          'Required for the website to function. This includes security, network management, and accessibility.',
        locked: true,
        defaultOpen: true,
        hasToggle: false,
        list: [
          'Load balancing and session management',
          'Fraud prevention and security',
          'Basic preferences like language',
        ],
      },
      {
        key: 'analytics',
        title: 'Analytics cookies',
        desc: 'Help us understand site usage so we can improve recipes and features.',
        locked: false,
        defaultOpen: false,
        hasToggle: true,
        defaultChecked: false,
        list: [
          'Aggregate traffic insights (pages visited, time on page)',
          'Error tracking to fix broken pages',
        ],
      },
      {
        key: 'preferences',
        title: 'Preference cookies',
        desc: 'Remember your choices like theme, language, or favourite recipes.',
        locked: false,
        defaultOpen: false,
        hasToggle: true,
        defaultChecked: true,
        list: [
          'Stores display preferences (e.g., dark mode)',
          'Keeps items saved to your recipe list',
        ],
      },
      {
        key: 'marketing',
        title: 'Marketing cookies',
        desc: 'Used to show you relevant content and offers based on your interests.',
        locked: false,
        defaultOpen: false,
        hasToggle: true,
        defaultChecked: false,
        list: [
          'Limits how often you see the same promo',
          'Measures campaign performance',
        ],
      },
      {
        key: 'geolocation',
        title: 'Precise geolocation data, and identification through device scanning',
        desc:
          'Allow us to use accurate location and device signals to deliver localised content.',
        locked: false,
        defaultOpen: false,
        hasToggle: true,
        defaultChecked: false,
        list: [
          'Use exact location to tailor nearby seasonal ingredients',
          'Identify device characteristics for fraud prevention',
        ],
      },
    ];
  }

  /**
   * Render simple informational modals (Terms, Privacy, Cookies, Disclaimer).
   * @returns {Array<JSX.Element>} Array of modal JSX elements.
   */
  renderSimpleModals() {
    return this.simpleModals.map((modal) => (
      <div key={modal.id} id={modal.id} className="modal">
        <div className="modal-content">
          <a href="#!" className="close">
            ×
          </a>
          <h2>{modal.title}</h2>
          {modal.paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}

          {modal.extraButtons &&
            modal.extraButtons.map((btn, idx) => (
              <button key={idx} className={btn.className}>
                {btn.label}
              </button>
            ))}

          {modal.extraLink && (
            <a
              href={modal.extraLink.href}
              className={modal.extraLink.className}
            >
              {modal.extraLink.label}
            </a>
          )}
        </div>
      </div>
    ));
  }

  /**
   * Render cookie preference sections used inside the customize cookie modal.
   * @returns {Array<JSX.Element>} Array of details elements representing cookie groups.
   */
  renderCookieSections() {
    return this.cookieSections.map((section) => (
      <details
        key={section.key}
        open={section.defaultOpen}
        className="cookie-group"
      >
        <summary>
          <div className="sum-text">
            <div className="title">{section.title}</div>
            <div className="desc">{section.desc}</div>
          </div>

          {section.locked && (
            <span className="badge locked">Required</span>
          )}

          {section.hasToggle && (
            <label
              className="switch"
              aria-label={`Toggle ${section.title.toLowerCase()}`}
            >
              <input
                type="checkbox"
                defaultChecked={section.defaultChecked}
              />
              <span className="track"></span>
              <span className="switch-text" aria-hidden="true"></span>
            </label>
          )}
        </summary>

        <ul className="list">
          {section.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </details>
    ));
  }

  /**
   * Render method for the Modals component.
   * Outputs all simple modals plus the customize cookie modal UI.
   * @returns {JSX.Element} Fragment containing modal elements.
   */
  render() {
    return (
      <>
        {this.renderSimpleModals()}

        <div id="customize-modal" className="modal">
          <div className="modal-content cookie-modal">
            <a href="#!" className="close" aria-label="Close">
              ×
            </a>

            <header className="cookie-header">
              <h2>Manage Cookie Preferences</h2>
              <p className="cookie-intro">
                We use cookies and similar technologies to deliver, maintain, and improve our services, and to provide a personalised
                web experience. You can review how this information is used and customise your preferences below. You may change
                your choices at any time as described in our{' '}
                <a href="#privacy-modal">Privacy Policy</a>.
              </p>
              <nav className="cookie-actions-top">
                <a href="#!" className="ghost-action">
                  Reject all
                </a>
                <a href="#!" className="ghost-action">
                  Accept all
                </a>
              </nav>
            </header>

            <div className="cookie-body">
              <section className="cookie-group">
                {this.renderCookieSections()}
              </section>

              <a href="#!" className="partners-link">
                Partners
              </a>
            </div>

            <footer className="cookie-footer">
              <small className="legal">
                You can update your choices at any time. See our{' '}
                <a href="#privacy-modal">Privacy Policy</a> and{' '}
                <a href="#cookies-modal">Cookies</a>.
              </small>
              <a href="#!" className="btn-cta">
                Save &amp; Exit
              </a>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default Modals;