import React from 'react';
import Navbar from '../../home/Navbar';
import Footer from '../../home/Footer';
import ShopLayout from '../ShopLayout';
import { products, filters } from './DigitalProductData';

class DigitalProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'all', search: '', selected: null };
  }

  handleFilterChange = (filter) => this.setState({ filter });
  handleSearchChange = (search) => this.setState({ search });

  filteredProducts() {
    const { filter, search } = this.state;
    const term = search.trim().toLowerCase();
    return products.filter((p) => {
      const byFilter = filter === 'all' || p.category === filter;
      const bySearch =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.meta.toLowerCase().includes(term);
      return byFilter && bySearch;
    });
  }

  renderCard = (p) => (
    <div key={p.id} className="col-12 col-sm-6 col-md-4 product">
      <article className="card product-card h-100 border-0 shadow-sm">
        <img src={p.img} className="card-img-top" alt={p.alt} loading="lazy" />
        <div className="card-body">
          <h5 className="card-title mb-1">{p.title}</h5>
          <div className="meta">{p.meta}</div>
          <div className="d-flex justify-content-between align-items-start mt-2" id="card-desc">
            <div>
              <strong className="text-success text-nowrap">{p.price}</strong>
              <div className="small text-muted">Stock: {p.stock}</div>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <button className="small btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({ selected: p })}>
                Details
              </button>
              <button className="btn btn-sm btn-primary btn-add" aria-disabled="true" disabled>
                Add
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );

  renderModal() {
    const { selected } = this.state;
    if (!selected) return null;
    return (
      <div className="modal" role="dialog" aria-modal="true" style={{ display: 'flex' }}>
        <div className="modal-content">
          <button className="close" aria-label="Close" onClick={() => this.setState({ selected: null })}>
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

  render() {
    const items = this.filteredProducts();
    return (
      <>
        <Navbar />
        <ShopLayout
          title="Digital Products"
          searchPlaceholder="Search digital products..."
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
        {this.renderModal()}
        <Footer />
      </>
    );
  }
}

export default DigitalProduct;