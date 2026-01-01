import React from 'react';
import './Shop.css';

class ShopLayout extends React.Component {
  renderFilters() {
    const { filters = [], currentFilter, onFilterChange } = this.props;
    return (
      <div className="filters" aria-label="Category filters">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`btn-label ${currentFilter === f.value ? 'active' : ''}`}
            aria-pressed={currentFilter === f.value}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
  }

  renderSearch() {
    const { searchPlaceholder, searchValue, onSearchChange } = this.props;
    return (
      <form className="site-search" action="#">
        <div className="search">
          <button type="submit" title="Search">
            <img className="img-fluid" src="/assets/icons/search.png" alt="search" width="24" height="24" />
          </button>
          <input
            type="text"
            className="form-control"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </form>
    );
  }

  render() {
    const { title, children } = this.props;
    return (
      <main className="container my-4 shop-main">
        <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
          <div>
            <h1 className="h3 mb-1">{title}</h1>
          </div>
          <div className="d-flex gap-2 align-items-center">{this.renderSearch()}</div>
        </header>
        {this.renderFilters()}
        {children}
      </main>
    );
  }
}

export default ShopLayout;