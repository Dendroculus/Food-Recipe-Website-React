import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.socialLinks = [
      {
        href: 'https://github.com/Dendroculus/Food-Recipe-Website',
        src: '/assets/logo/Github.png',
        alt: 'Github',
        extraClass: '',
      },
      {
        href: 'https://www.instagram.com/',
        src: '/assets/logo/Instagram.png',
        alt: 'Instagram',
        extraClass: '',
      },
      {
        href: 'https://www.facebook.com/',
        src: '/assets/logo/Facebook.png',
        alt: 'Facebook',
        extraClass: 'Facebook',
      },
      {
        href: 'https://twitter.com/',
        src: '/assets/logo/X.png',
        alt: 'X',
        extraClass: '',
      },
      {
        href: 'https://www.linkedin.com/',
        src: '/assets/logo/LinkedIn.jpg',
        alt: 'LinkedIn',
        extraClass: '',
      },
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
        <h1 className="footer-title">Socials</h1>

        <div className="socials-logo">
          {this.socialLinks.map((item, index) => (
            <a key={index} href={item.href}>
              <img
                className={`img-fluid ${item.extraClass}`}
                src={item.src}
                alt={item.alt}
              />
            </a>
          ))}
        </div>

        <nav className="footer-policy-links">
          {this.footerLinks.map((link, index) => (
            <a key={index} href={link.href}>
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