import React from "react";
import "./Payment.css";
import {
  acceptedPayments,
  morePayments,
  footerLinks,
  shippingFields,
  paymentFields,
  state as initialState,
} from "./PaymentData";

import OrderSummary from "./OrderSummary/OrderSummary";
import ShippingInformation from "./PaymentForms/ShippingInformation";
import PaymentInformation from "./PaymentForms/PaymentInformation";
import PaymentMethods from "./PaymentMethod/PaymentMethod";
import PaymentFooter from "./PaymentFooter/PaymentFooter";
import { parseIdrToNumber, idrToUsd, formatUsd } from "./CurrencyConverter";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.acceptedPayments = acceptedPayments;
    this.morePayments = morePayments;
    this.footerLinks = footerLinks;
    this.shippingFields = shippingFields;
    this.paymentFields = paymentFields;
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.money = this.money.bind(this);
    this.handleCartUpdated = this.handleCartUpdated.bind(this);
    this.syncCart = this.syncCart.bind(this);
    this.recalcSummary = this.recalcSummary.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.syncCart();
    window.addEventListener("cart-updated", this.handleCartUpdated);
  }

  componentWillUnmount() {
    window.removeEventListener("cart-updated", this.handleCartUpdated);
  }

  handleCartUpdated(e) {
    const cart = e?.detail ?? [];
    this.setState({ cart }, this.recalcSummary);
  }

  syncCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    this.setState({ cart }, this.recalcSummary);
  }

  recalcSummary() {
    const subtotalIdr = (this.state.cart || []).reduce((sum, item) => {
      const idr = parseIdrToNumber(item.price);
      return sum + idr * (item.quantity || 1);
    }, 0);

    const subtotalUsd = idrToUsd(subtotalIdr);

    this.setState(({ summary }) => ({
      summary: {
        summary,
        subtotal: subtotalUsd, 
        subtotalIdr,          
        shipping: 0,
        tax: 0,
      },
    }));
  }

  removeFromCart(id) {
    const next = (this.state.cart || []).filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("cart-updated", { detail: next }));
    this.setState({ cart: next }, this.recalcSummary);
  }

  money(n) {
    return formatUsd(n);
  }

  total() {
    const { subtotal, shipping, tax } = this.state.summary;
    return Number(subtotal || 0) + Number(shipping || 0) + Number(tax || 0);
  }

  cartCount() {
    return (this.state.cart || []).length;
  }

  canSubmit() {
    if (this.cartCount() === 0) return false;

    const required = [
      "firstName",
      "lastName",
      "email",
      "address",
      "city",
      "state",
      "zip",
      "country",
      "cardName",
      "cardNumber",
      "expiry",
      "cvv",
    ];

    return required.every((k) => String(this.state.form[k] || "").trim().length > 0);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prev) => ({
      form: { ...prev.form, [name]: value },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.canSubmit()) return;
    alert("Purchase completed (demo).");
  }

  renderCart() {
    const count = this.cartCount();

    return (
      <section className="cart-section">
        <h2>
          Shopping Cart <span className="cart-count">({count} items)</span>
        </h2>
        
        {count === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p className="empty-cart-message">You haven't added any items yet!</p>
            <p className="empty-cart-submessage">Explore our shop and find something you love.</p>
            <a href="#shopping-modal" className="shop-link">
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="cart-items">
            {this.state.cart.map((item) => {
              const idr = parseIdrToNumber(item.price);
              const qty = item.quantity || 1;
              const lineUsd = idrToUsd(idr * qty);
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-main">
                    <div className="cart-item-title">{item.title || item.name}</div>
                    <div className="cart-item-meta">
                      {qty} × {item.price}
                      <span className="cart-item-usd">({formatUsd(lineUsd)})</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn cart-remove"
                    onClick={() => this.removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
            <div className="cart-footer">
                <a href="#shopping-modal" className="add-more-link">
                    Add more items
                </a>
            </div>
          </div>
        )}
      </section>
    );
  }

  render() {
    return (
      <div className="payment-page">
        <main>
          <div className="payment-container">
            <div className="payment-box">
              <header className="payment-header">
                <a href="/" className="back-link">
                  ← Back to Home
                </a>
                <h1>CHECKOUT 💫</h1>
                <p className="subtitle">Complete your celestial shopping experience</p>
              </header>

              <form className="payment-form" onSubmit={this.handleSubmit}>
                {this.renderCart()}

                <OrderSummary summary={this.state.summary} money={this.money} />

                <ShippingInformation
                  sections={this.shippingFields}
                  form={this.state.form}
                  onChange={this.handleChange}
                />

                <PaymentInformation
                  sections={this.paymentFields}
                  form={this.state.form}
                  onChange={this.handleChange}
                />

                <PaymentMethods accepted={this.acceptedPayments} includeMore={true} />

                <div className="form-actions">
                  <a href="/" className="btn-secondary">
                    Cancel
                  </a>
                  <button type="submit" className="btn-primary sbmt" disabled={!this.canSubmit()}>
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <PaymentFooter footerLinks={this.footerLinks} morePayments={this.morePayments} />
      </div>
    );
  }
}