import React from 'react';
import PropTypes from 'prop-types';

/**
 * Modal UI for adding a product to the shopping cart.
 * Displays product details and quantity controls.
 * Props:
 * - product: object | null
 * - quantity: number
 * - onClose: function
 * - onSave: function
 * - onInc: function
 * - onDec: function
 * - onQtyChange: function
 * @extends React.Component
 */
class ShopAddModal extends React.Component {
  render() {
    const { product, quantity, onClose, onSave, onInc, onDec, onQtyChange } = this.props;
    if (!product) return null;

    const maxStock = typeof product.stock === 'number' ? product.stock : 99;

    return (
      <div className="shop-modal" role="dialog" aria-modal="true" style={{ display: 'flex' }}>
        <div className="shop-modal-content">
          <button className="shop-modal-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
          <h2>Add to Cart</h2>
          <p className="mb-2"><strong>{product.title}</strong></p>
          <p>{product.price}</p>

          <div className="quantity-control" aria-label="Quantity selector">
            <button type="button" className="qty-btn" onClick={onDec} aria-label="Decrease quantity">
              –
            </button>
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={onQtyChange}
              aria-label="Quantity"
            />
            <button 
              type="button" 
              className="qty-btn" 
              onClick={onInc} 
              aria-label="Increase quantity"
              disabled={quantity >= maxStock}
            >
              +
            </button>
          </div>

          <div className="d-flex gap-2 mt-3">
            <button type="button" className="btn btn-secondary w-100" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary btn-add-cart w-100" onClick={onSave}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Prop types for ShopAddModal.
 * @type {Object}
 */
ShopAddModal.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired,
  onQtyChange: PropTypes.func.isRequired,
};

export default ShopAddModal;