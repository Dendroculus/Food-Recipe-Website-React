import React from 'react';
import './Footer.css';

/**
 * Footer component that displays social icons, policy links, and a copyright note.
 * @extends React.Component
 */
class Footer extends React.Component {
  /**
   * Footer component constructor.
   * @param {object} props - Component props.
   */
  constructor(props) {
    super(props);

    /**
     * Array of social link descriptors used to render social icons.
     * Each object contains:
     * - href: URL to link to
     * - src: image source path
     * - alt: alt text for the image
     * - extraClass: additional CSS class for the image
     * @type {Array<{href: string, src: string, alt: string, extraClass: string}>}
     */
    this.socialLinks = [
      { href: 'https://github.com/Dendroculus/Food-Recipe-Website-React', src: '/assets/logo/Github.png', alt: 'Github', extraClass: '' },
      { href: 'https://www.instagram.com/', src: '/assets/logo/Instagram.png', alt: 'Instagram', extraClass: '' },
      { href: 'https://www.facebook.com/', src: '/assets/logo/Facebook.png', alt: 'Facebook', extraClass: 'Facebook' },
      { href: 'https://twitter.com/', src: '/assets/logo/X.png', alt: 'X', extraClass: '' },
      { href: 'https://www.linkedin.com/', src: '/assets/logo/LinkedIn.jpg', alt: 'LinkedIn', extraClass: '' },
    ];

    /**
     * Array of footer policy link descriptors.
     * Each object contains:
     * - href: fragment or URL for the policy modal/link
     * - label: visible text for the link
     * @type {Array<{href: string, label: string}>}
     */
    this.footerLinks = [
      { href: '#terms-modal', label: 'Terms of Use' },
      { href: '#privacy-modal', label: 'Privacy Policy' },
      { href: '#cookies-modal', label: 'Cookies' },
      { href: '#disclaimer-modal', label: 'Disclaimer' },
    ];
  }

  /**
   * Render method for the Footer component.
   * @returns {JSX.Element} The rendered footer element.
   */
  render() {
    return (
      <footer className="main-footer">
        <h2 className="footer-title">Socials</h2>

        <div className="socials-logo" id="footer-socials">
          {this.socialLinks.map((item) => (
            <a key={item.href} href={item.href} aria-label={item.alt}>
              <img className={`img-fluid ${item.extraClass}`} src={item.src} alt={item.alt} loading="lazy" width="48" height="48" />
            </a>
          ))}
        </div>

        <nav className="footer-policy-links">
          {this.footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer-note">© 2024 Celestial. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;