import React from "react";
import Modals from "../../components/modals/Modals";

export default class PaymentFooter extends React.Component {
  renderMorePaymentsModal() {
    const { morePayments = [] } = this.props;
    return (
      <div id="more-payments-modal" className="modal">
        <div className="modal-content">
          <a href="#!" className="close">
            ×
          </a>
          <h2>More Payment Options</h2>
          <p>In addition to the main payment methods displayed, we also accept:</p>
          <div className="payment-logos">
            {morePayments.map((p) => (
              <div className="payment-logo" key={p.alt}>
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderSecurityModal() {
    return (
      <div id="security-modal" className="modal">
        <div className="modal-content">
          <a href="#!" className="close">
            ×
          </a>
          <h2>Security</h2>
          {[
            "We take the security of your information seriously. This site uses HTTPS to protect data in transit and follows common industry practices to help keep your information safe.",
            "Payments are processed by trusted, PCI-compliant third-party providers. We do not store full card numbers on our servers — only tokenized references where required by the payment provider.",
            "We retain personal data only as needed to provide services. Sensitive data (like passwords) should be stored hashed on production systems, and access is limited to authorized personnel only.",
          ].map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <h3>How You Can Help</h3>
          <ul>
            {[
              "Use a strong, unique password. Consider a password manager.",
              "Enable two-factor authentication where available.",
              "Don't share your credentials and log out from shared devices.",
              "Beware of phishing — we will never ask for your password or full card details by email.",
            ].map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>

          <p>
            <strong>Report issues:</strong>{" "}
            <a href="mailto:celesti4lrecip3s@gmail.com">celesti4lrecip3s@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }

  renderShoppingModal() {
    const shops = [
      { href: "/shop/ingredients", img: "/assets/shop/Ingredients/ingredients_pfp.jpg", label: "Cooking Ingredients", alt: "Ingredients" },
      { href: "/shop/kitchen-tools", img: "/assets/shop/Kitchen Tools/kitchen_tools_pfp.jpg", label: "Kitchen Tools", alt: "Kitchen Tools" },
      { href: "/shop/recipe-themed-merch", img: "/assets/shop/Recipe Themed/recipe_themed_merch_pfp.png", label: "Recipe Themed Merch", alt: "Recipe Themed Merch" },
      { href: "/shop/digital-products", img: "/assets/shop/Digital Products/digital_products_pfp.png", label: "Digital Products", alt: "Digital Products" },
    ];

    return (
      <div id="shopping-modal" className="modal">
        <div className="modal-content">
          <a href="#!" className="close">
            ×
          </a>
          <h2>Choose a Shop:</h2>
          {shops.map((s) => (
            <a className="shop-contents shop-item" href={s.href} key={s.href}>
              <div className="shop-modal-pfps">
                <img src={s.img} alt={s.alt} />
              </div>
              <p>{s.label}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { footerLinks = [] } = this.props;

    return (
      <>
        <footer className="payment-footer">
          <ul className="footer-policy-links list-unstyled">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <p>© 2024 Celestial. All rights reserved.</p>
        </footer>

        {this.renderMorePaymentsModal()}
        {this.renderSecurityModal()}
        {this.renderShoppingModal()}

        <Modals />
      </>
    );
  }
}