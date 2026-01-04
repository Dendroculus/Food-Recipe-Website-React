import React from 'react';
import PropTypes from 'prop-types';
import ShopLayout from './ShopLayout'; 
import Shop from './Shop'; 

class ShopCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localProducts: props.products.map(p => ({ ...p })),
      filter: 'all',
      search: '',
      selected: null,
      addItem: null,
      quantity: 1,
    };
  }

  handleFilterChange = (filter) => this.setState({ filter });
  handleSearchChange = (search) => this.setState({ search });

  handleAddClick = (product) => this.setState({ addItem: product, quantity: 1 });
  closeAddModal = () => this.setState({ addItem: null, quantity: 1 });

  incQty = () => {
    this.setState((state) => {
      const { addItem, quantity } = state;
      if (!addItem) return null;

      const maxStock = typeof addItem.stock === 'number' ? addItem.stock : 99;

      return { quantity: Math.min(maxStock, quantity + 1) };
    });
  };

  decQty = () => this.setState((s) => ({ quantity: Math.max(1, s.quantity - 1) }));
  
  handleQtyChange = (e) => {
    const { addItem } = this.state;
    if (!addItem) return;

    const maxStock = typeof addItem.stock === 'number' ? addItem.stock : 99;
    const val = parseInt(e.target.value, 10);

    const validQuantity = Math.max(1, Math.min(maxStock, val || 1));
    
    this.setState({ quantity: validQuantity });
  };

  saveToCart = () => {
    const { addItem, quantity } = this.state;
    if (!addItem) return;

    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = stored.find((i) => i.id === addItem.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      stored.push({
        id: addItem.id,
        title: addItem.title,
        price: addItem.price,
        quantity,
      });
    }
    localStorage.setItem('cart', JSON.stringify(stored));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: stored }));
    this.closeAddModal();

    this.setState((prevState) => ({
      localProducts: prevState.localProducts.map((p) => {
        if (p.id === addItem.id) {
          if (typeof p.stock === 'number') {
            const newStock = Math.max(0, p.stock - quantity); 
            return { ...p, stock: newStock };
          }
        }
        return p;
      }),
      addItem: null, 
      quantity: 1
    }));
  };

  filteredProducts() {
    const { localProducts } = this.state; 
    const { filter, search } = this.state;
    const term = search.trim().toLowerCase();
    
    return localProducts.filter((p) => {
      const byFilter = filter === 'all' || p.category === filter;
      const bySearch =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.meta.toLowerCase().includes(term);
      return byFilter && bySearch;
    });
  }

renderCard = (p) => {
    const isOutOfStock = typeof p.stock === 'number' && p.stock <= 0;

    return (
      <div key={p.id} className="col-12 col-sm-6 col-md-4 product">
        <article className="card product-card h-100 border-0 shadow-sm">
          <img src={p.img} className="card-img-top" alt={p.alt || p.title} loading="lazy" />
          <div className="card-body">
            <h5 className="card-title mb-1">{p.title}</h5>
            <div className="meta">{p.meta}</div>
            <div className="d-flex justify-content-between align-items-start mt-2" id="card-desc">
              <div>
                <strong className="text-success text-nowrap">{p.price}</strong>
                <div className="small text-muted">
                  {isOutOfStock ? (
                    <span className="text-danger fw-bold">Out of Stock</span>
                  ) : (
                    `Stock: ${p.stock}`
                  )}
                </div>
              </div>
              <div className="d-flex gap-2 align-items-start">
                <button
                  className="small btn btn-sm btn-outline-secondary"
                  type="button"
                  onClick={() => this.setState({ selected: p })}
                >
                  Details
                </button>
                <button
                  className="btn btn-sm btn-primary btn-add"
                  type="button"
                  disabled={isOutOfStock}
                  onClick={() => this.handleAddClick(p)}
                >
                  {isOutOfStock ? 'Sold Out' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  };

  renderDetailsModal() {
    const { selected } = this.state;
    if (!selected) return null;
    return (
      <div className="shop-modal" role="dialog" aria-modal="true" style={{ display: 'flex' }}>
        <div className="shop-modal-content">
          <button className="shop-modal-close" aria-label="Close" onClick={() => this.setState({ selected: null })}>
            ×
          </button>
          <h2>{selected.title}</h2>
          <div className="modal-image-wrapper">
            <img src={selected.img} alt={selected.title} />
          </div>
          <p>{selected.details}</p>
        </div>
      </div>
    );
  }

  renderAddModal() {
    const { addItem, quantity } = this.state;
    if (!addItem) return null;
    return (
      <div className="shop-modal" role="dialog" aria-modal="true" style={{ display: 'flex' }}>
        <div className="shop-modal-content">
          <button className="shop-modal-close" aria-label="Close" onClick={this.closeAddModal}>
            ×
          </button>
          <h2>Add to Cart</h2>
          <p className="mb-2"><strong>{addItem.title}</strong></p>
          <p>{addItem.price}</p>

          <div className="quantity-control" aria-label="Quantity selector">
            <button type="button" className="qty-btn" onClick={this.decQty} aria-label="Decrease quantity">
              –
            </button>
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={this.handleQtyChange}
              aria-label="Quantity"
            />
            <button type="button" className="qty-btn" onClick={this.incQty} aria-label="Increase quantity">
              +
            </button>
          </div>

          <div className="d-flex gap-2 mt-3">
            <button type="button" className="btn btn-secondary w-100" onClick={this.closeAddModal}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary btn-add-cart w-100" onClick={this.saveToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { title, searchPlaceholder, filters } = this.props; 
    const items = this.filteredProducts();

    return (
      <Shop>
        <ShopLayout
          title={title}
          searchPlaceholder={searchPlaceholder}
          searchValue={this.state.search}
          onSearchChange={this.handleSearchChange}
          filters={filters}
          currentFilter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        >
          <section id="products" className="row g-3" aria-live="polite">
            {items.map(this.renderCard)}
          </section>
        </ShopLayout>
        {this.renderDetailsModal()}
        {this.renderAddModal()}
      </Shop>
    );
  }
}

ShopCategoryPage.propTypes = {
  title: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
};

export default ShopCategoryPage;