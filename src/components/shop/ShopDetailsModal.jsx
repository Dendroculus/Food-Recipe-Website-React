import React from 'react';
import PropTypes from 'prop-types';

/**
 * Modal component for showing product details in the shop.
 * Props:
 * - product: object
 * - onClose: function
 * @extends React.Component
 */
class ShopDetailsModal extends React.Component {
  render() {
    const { product, onClose } = this.props;
    if (!product) return null;

    return (
      <div className="shop-modal" role="dialog" aria-modal="true" style={{ display: 'flex' }}>
        <div className="shop-modal-content">
          <button className="shop-modal-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
          <h2>{product.title}</h2>
          <div className="modal-image-wrapper">
            <img src={product.img} alt={product.title} />
          </div>
          <p>{product.details}</p>
        </div>
      </div>
    );
  }
}

/**
 * Prop types for ShopDetailsModal.
 * @type {Object}
 */
ShopDetailsModal.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ShopDetailsModal;