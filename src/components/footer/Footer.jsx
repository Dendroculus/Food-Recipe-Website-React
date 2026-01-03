import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.socialLinks = [
      { href: 'https://github.com/Dendroculus/Food-Recipe-Website-React', src: '/assets/logo/Github.png', alt: 'Github', extraClass: '' },
      { href: 'https://www.instagram.com/', src: '/assets/logo/Instagram.png', alt: 'Instagram', extraClass: '' },
      { href: 'https://www.facebook.com/', src: '/assets/logo/Facebook.png', alt: 'Facebook', extraClass: 'Facebook' },
      { href: 'https://twitter.com/', src: '/assets/logo/X.png', alt: 'X', extraClass: '' },
      { href: 'https://www.linkedin.com/', src: '/assets/logo/LinkedIn.jpg', alt: 'LinkedIn', extraClass: '' },
    ];

    this.footerLinks = [
      { href: '#terms-modal', label: 'Terms of Use' },
      { href: '#privacy-modal', label: 'Privacy Policy' },
      { href: '#cookies-modal', label: 'Cookies' },
      { href: '#disclaimer-modal', label: 'Disclaimer' },
    ];
  }

  render() {
    return (
      <footer className="main-footer">
        <h2 className="footer-title">Socials</h2>

        <div className="socials-logo">
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