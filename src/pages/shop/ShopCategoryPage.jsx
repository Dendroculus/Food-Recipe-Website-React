import React from 'react';
import PropTypes from 'prop-types';
import ShopLayout from './ShopLayout'; 
import Shop from './Shop'; 
import ShopProductCard from '../../components/shop/ShopProductCard';
import ShopDetailsModal from '../../components/shop/ShopDetailsModal';
import ShopAddModal from '../../components/shop/ShopAddModal';
import { specialDates } from './specialDates';

/**
 * ShopCategoryPage
 *
 * A reusable page component that displays a list of products for a specific shop category.
 * * Features:
 * - Displays products in a responsive grid.
 * - Filters products by category and search terms.
 * - Manages "Add to Cart" and "Product Details" modals.
 * - **Daily Promos**: Randomly applies discounts to a subset of products on specific dates.
 * Promotions persist for the day (via localStorage) to ensure consistency across reloads.
 * * @augments React.Component
 */
class ShopCategoryPage extends React.Component {
  /**
   * Create the ShopCategoryPage.
   * Initializes state with synchronized stock from the cart and applies daily promos.
   * @param {Object} props - The component props.
   */
  constructor(props) {
    super(props);

    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');

    // 1. Sync initial stock based on what is currently in the cart
    let syncedProducts = props.products.map(product => {
      const cartItem = savedCart.find(item => item.id === product.id);
      
      if (cartItem && typeof product.stock === 'number') {
        const remainingStock = Math.max(0, product.stock - cartItem.quantity);
        return { ...product, stock: remainingStock };
      }
      
      return { ...product };
    });

    // 2. Apply persistent daily promotion logic
    syncedProducts = this.applyDailyPromos(syncedProducts);
    
    this.state = {
      localProducts: syncedProducts,
      filter: 'all',
      search: '',
      selected: null, // Product selected for Details Modal
      addItem: null,  // Product selected for Add Modal
      quantity: 1,
    };
  }

  /**
   * Applies random discounts to products if today is a configured "Special Date".
   * * Logic:
   * 1. Checks if today's date (MM-DD) matches a predefined list.
   * 2. Generates a unique storage key based on the page title (e.g., 'daily_promos_DigitalProducts').
   * 3. Checks localStorage for existing promos for this specific category and date.
   * 4. If no data exists, selects a random subset of products (at least `promoCount`) 
   * and saves the selection to localStorage.
   * 5. Maps over the product list and injects `isPromo`, `discountPercent`, and `promoPrice`.
   * * @param {Array<Object>} productList - The initial list of products.
   * @returns {Array<Object>} The product list with promo data attached to selected items.
   */
  applyDailyPromos(productList) {
    const today = new Date();
    const currentMonthDay = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    const specialDateStrings = specialDates.map(d => d.date);
    
    // Create a unique namespace for localStorage based on the Page Title
    // Example: "Cooking Ingredients" -> "daily_promos_CookingIngredients"
    const safeTitle = this.props.title.replace(/[^a-zA-Z0-9]/g, '');
    const storageKey = `daily_promos_${safeTitle}`;

    // If today is not a special day, clear old data and return original list
    if (!specialDateStrings.includes(currentMonthDay)) {
      localStorage.removeItem(storageKey);
      return productList;
    }
    
    // 1. Try to retrieve existing promos for today/category
    let promoData = null;
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey));
      if (stored && stored.date === currentMonthDay) {
        promoData = stored.items;
      }
    } catch (e) {
      // Ignore parse errors
    }

    // 2. If no data found, generate NEW random promos
    if (!promoData) {
       // Determine how many items to discount
       const minCount = this.props.promoCount || 3; 
       // Add variance: Select between minCount and minCount + 2 items
       const maxCount = Math.min(productList.length, minCount + 2); 
       const finalCount = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;

       // Shuffle and select
       const shuffled = [...productList].sort(() => 0.5 - Math.random());
       const selected = shuffled.slice(0, finalCount);
       
       // Assign random discount percentages
       promoData = selected.map(p => ({
         id: p.id,
         percent: [10, 20, 30][Math.floor(Math.random() * 3)]
       }));

       // Save to storage
       localStorage.setItem(storageKey, JSON.stringify({
         date: currentMonthDay,
         items: promoData
       }));
    }

    // 3. Create Map for faster lookup
    const promoMap = {};
    promoData.forEach(item => {
        promoMap[item.id] = item.percent;
    });

    // 4. Apply discounts to product objects
    return productList.map(product => {
      if (promoMap[product.id]) {
        const discountPercent = promoMap[product.id];
        
        // Parse currency string to number (assumes format "Rp 27.000")
        const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''), 10);
        const discountedValue = numericPrice - (numericPrice * (discountPercent / 100));
        const formattedPrice = `Rp ${discountedValue.toLocaleString('id-ID')}`;

        return {
          ...product,
          isPromo: true,
          discountPercent: discountPercent,
          promoPrice: formattedPrice,
          originalPrice: product.price 
        };
      }
      return product;
    });
  }

  /**
   * Handle filter button click.
   * @param {string} filter - The filter value to activate (e.g., 'all', 'spices').
   */
  handleFilterChange = (filter) => this.setState({ filter });

  /**
   * Handle search input change.
   * @param {string} search - The new search string.
   */
  handleSearchChange = (search) => this.setState({ search });

  /**
   * Open the Add to Cart modal for a specific product.
   * Resets quantity to 1.
   * @param {Object} product - The product object to add.
   */
  handleAddClick = (product) => this.setState({ addItem: product, quantity: 1 });

  /**
   * Close the Add to Cart modal and reset selection.
   */
  closeAddModal = () => this.setState({ addItem: null, quantity: 1 });

  /**
   * Increment the quantity in the Add Modal.
   * Respects maximum stock limits.
   */
  incQty = () => {
    this.setState((state) => {
      const { addItem, quantity } = state;
      if (!addItem) return null;
      const maxStock = typeof addItem.stock === 'number' ? addItem.stock : 99;
      return { quantity: Math.min(maxStock, quantity + 1) };
    });
  };

  /**
   * Decrement the quantity in the Add Modal.
   * Minimum value is 1.
   */
  decQty = () => this.setState((s) => ({ quantity: Math.max(1, s.quantity - 1) }));
  
  /**
   * Handle manual quantity input.
   * Validates input to ensure it is between 1 and maxStock.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  handleQtyChange = (e) => {
    const { addItem } = this.state;
    if (!addItem) return;
    const maxStock = typeof addItem.stock === 'number' ? addItem.stock : 99;
    const val = parseInt(e.target.value, 10);
    const validQuantity = Math.max(1, Math.min(maxStock, val || 1));
    this.setState({ quantity: validQuantity });
  };

  /**
   * Commit the selected item and quantity to the global cart (localStorage).
   * Updates local stock state and dispatches 'cart-updated' event.
   * Uses the promo price if applicable.
   */
  saveToCart = () => {
    const { addItem, quantity } = this.state;
    if (!addItem) return;

    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = stored.find((i) => i.id === addItem.id);
    
    // Use promo price if the item is currently on sale
    const finalPrice = addItem.isPromo ? addItem.promoPrice : addItem.price;

    if (existing) {
      existing.quantity += quantity;
    } else {
      stored.push({
        id: addItem.id,
        title: addItem.title,
        price: finalPrice,
        quantity,
      });
    }
    localStorage.setItem('cart', JSON.stringify(stored));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: stored }));
    this.closeAddModal();

    // Update local stock display immediately
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

  /**
   * Filters the local product list based on the active category filter and search term.
   * @returns {Array<Object>} The filtered list of products.
   */
  filteredProducts() {
    const { localProducts, filter, search } = this.state; 
    const term = search.trim().toLowerCase();
    
    return localProducts.filter((p) => {
      const byFilter = filter === 'all' || p.category === filter;
      const bySearch = !term || p.title.toLowerCase().includes(term) || p.meta.toLowerCase().includes(term);
      return byFilter && bySearch;
    });
  }

  render() {
    const { title, searchPlaceholder, filters } = this.props; 
    const { search, filter, selected, addItem, quantity } = this.state;
    const items = this.filteredProducts();

    return (
      <Shop>
        <ShopLayout
          title={title}
          searchPlaceholder={searchPlaceholder}
          searchValue={search}
          onSearchChange={this.handleSearchChange}
          filters={filters}
          currentFilter={filter}
          onFilterChange={this.handleFilterChange}
        >
          <section id="products" className="row g-3" aria-live="polite">
            {items.map((p) => (
              <ShopProductCard 
                key={p.id} 
                product={p} 
                onDetailsClick={(product) => this.setState({ selected: product })}
                onAddClick={this.handleAddClick}
              />
            ))}
          </section>
        </ShopLayout>
        
        <ShopDetailsModal 
          product={selected} 
          onClose={() => this.setState({ selected: null })} 
        />
        
        <ShopAddModal 
          product={addItem} 
          quantity={quantity}
          onClose={this.closeAddModal}
          onSave={this.saveToCart}
          onInc={this.incQty}
          onDec={this.decQty}
          onQtyChange={this.handleQtyChange}
        />
      </Shop>
    );
  }
}

/**
 * Prop types definition.
 * @property {string} title - Page title displayed in header.
 * @property {string} searchPlaceholder - Placeholder text for search bar.
 * @property {Array<Object>} products - Initial list of products.
 * @property {Array<Object>} filters - List of category filters ({value, label}).
 * @property {number} [promoCount=3] - Minimum number of items to select for daily promo (default: 3).
 */
ShopCategoryPage.propTypes = {
  title: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  promoCount: PropTypes.number,
};

export default ShopCategoryPage;