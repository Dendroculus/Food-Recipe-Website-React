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

/**
 * Payment page component handling checkout flow, cart synchronization, and submission.
 *
 * Uses localStorage to sync cart state and emits/listens to a custom "cart-updated" event.
 *
 * @extends React.Component
 */
export default class Payment extends React.Component {
  /**
   * Initialize Payment component and bind handlers.
   * @param {object} props
   */
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

  /**
   * Component did mount lifecycle: sync cart from localStorage and attach event listener.
   * @returns {void}
   */
  componentDidMount() {
    this.syncCart();
    window.addEventListener("cart-updated", this.handleCartUpdated);
  }

  /**
   * Remove event listener on unmount.
   * @returns {void}
   */
  componentWillUnmount() {
    window.removeEventListener("cart-updated", this.handleCartUpdated);
  }

  /**
   * Handler for the custom "cart-updated" event. Updates local cart state and recalculates summary.
   * @param {CustomEvent} e - Event with detail containing the updated cart array.
   * @returns {void}
   */
  handleCartUpdated(e) {
    const cart = e?.detail ?? [];
    this.setState({ cart }, this.recalcSummary);
  }

  /**
   * Synchronize cart from localStorage into component state and recalculate summary.
   * @returns {void}
   */
  syncCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    this.setState({ cart }, this.recalcSummary);
  }

  /**
   * Recalculate order summary (subtotal in IDR and USD conversion) and update state.
   * @returns {void}
   */
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

  /**
   * Remove an item from the cart by id, persist to localStorage and dispatch update event.
   * @param {string|number} id - Item id to remove.
   * @returns {void}
   */
  removeFromCart(id) {
    const next = (this.state.cart || []).filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("cart-updated", { detail: next }));
    this.setState({ cart: next }, this.recalcSummary);
  }

  /**
   * Money formatter using USD format helper.
   * @param {number} n - Number to format.
   * @returns {string} Formatted currency string.
   */
  money(n) {
    return formatUsd(n);
  }

  /**
   * Compute the total (subtotal + shipping + tax) in USD from state summary.
   * @returns {number} Total amount.
   */
  total() {
    const { subtotal, shipping, tax } = this.state.summary;
    return Number(subtotal || 0) + Number(shipping || 0) + Number(tax || 0);
  }

  /**
   * Return number of items in the cart.
   * @returns {number} Count of cart items.
   */
  cartCount() {
    return (this.state.cart || []).length;
  }

  /**
   * Determine whether the form can be submitted.
   * Checks that the cart is not empty and required fields are present.
   * @returns {boolean} True if submission is allowed.
   */
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

  /**
   * Handle input change events and update form state.
   * @param {Event} e - Input change event.
   * @returns {void}
   */
  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prev) => ({
      form: { ...prev.form, [name]: value },
    }));
  }

  /**
   * Handle form submission for checkout. Performs a final canSubmit check.
   * @param {Event} e - Form submit event.
   * @returns {void}
   */
  handleSubmit(e) {
    e.preventDefault();
    if (!this.canSubmit()) return;
    alert("Purchase completed (demo).");
  }

  /**
   * Render the shopping cart section with items or an empty state.
   * @returns {JSX.Element} Cart section JSX.
   */
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

  /**
   * Render the full payment page including forms, summary, and footer.
   * @returns {JSX.Element} Payment page markup.
   */
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
                  <a href="/" className="payment-cancel-btn btn-secondary">
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