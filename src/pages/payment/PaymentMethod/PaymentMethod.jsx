import React from "react";
import "./PaymentMethod.css";

export default class PaymentMethods extends React.Component {
  render() {
    const { accepted = [], includeMore = false, moreModalId = "#more-payments-modal" } = this.props;

    return (
      <section className="payment-section">
        <h2>Payment Methods</h2>
        <div className="payment-methods">
          <p>We accept:</p>
          <div className="payment-logos">
            {accepted.map((p) => (
              <div className="payment-logo" key={p.alt}>
                <img className="img-fluid" src={p.src} alt={p.alt} />
              </div>
            ))}

            {includeMore && (
              <div className="others-payment">
                <a href={moreModalId}>
                  <img className="img-fluid" src="/assets/icons/More.png" alt="Payments" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}