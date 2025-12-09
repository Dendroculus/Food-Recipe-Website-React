import React from 'react';

const recipesItems = [
  { image: '/assets/main_course/main_course_pfp.jpg', alt: 'Main course', label: 'Main Course', href: './five-course-meal/main-page-html/main-course.html' },
  { image: '/assets/appetizers/appetizers_pfp.jpg', alt: 'Appetizers', label: 'Appetizers', href: './five-course-meal/main-page-html/appetizer.html' },
  { image: '/assets/salad/salad_pfp.jpg', alt: 'Salad', label: 'Salad', href: './five-course-meal/main-page-html/salad.html' },
  { image: '/assets/desserts/desserts_pfp.jpg', alt: 'Desserts', label: 'Desserts', href: './five-course-meal/main-page-html/dessert.html' },
  { image: '/assets/special_diets/special_diets_pfp.jpg', alt: 'Special Diets', label: 'Special Diets', href: '/five-course-meal/special-diets/index.html' },
];

const inspirationItems = [
  { image: '/assets/inspiration/stellar_tips_pfp.jpg', alt: 'Stellar Tips', label: 'Stellar Tips', href: './inspiration/stellar_tips/stellar_tips.html' },
  { image: '/assets/inspiration/seasonal_constellation_pfp.png', alt: 'Seasonal Constellations', label: 'Seasonal Constellations', href: './inspiration/seasonal_constellation/seasonal_constellation.html' },
  { image: '/assets/inspiration/kitchen_universe_pfp.png', alt: 'Kitchen Universe', label: 'Kitchen Universe', href: './coming_soon/soon.html' },
  { image: '/assets/inspiration/guiding_stars_pfp.png', alt: 'Guiding Stars', label: 'Guiding Stars', href: './coming_soon/soon.html' },
  { image: '/assets/inspiration/orbit_of_flavors_pfp.png', alt: 'Orbit Of Flavors', label: 'Orbit Of Flavors', href: './coming_soon/soon.html' },
];

const shopItems = [
  { image: '/assets/shop/Ingredients/ingredients_pfp.jpg', alt: 'Cooking Ingredients', label: 'Cooking Ingredients', href: './shop/ingredients_shop.html' },
  { image: '/assets/shop/Kitchen Tools/kitchen_tools_pfp.jpg', alt: 'Kitchen Tools', label: 'Kitchen Tools', href: '/shop/kitchen_tools.html' },
  { image: '/assets/shop/Recipe Themed/recipe_themed_merch_pfp.png', alt: 'Recipe Themed Merch', label: 'Recipe Themed Merch', href: '/shop/recipe_themed_merch.html' },
  { image: '/assets/shop/Digital Products/digital_products_pfp.png', alt: 'Digital Products', label: 'Digital Products', href: '/shop/digital_products.html' },
];

const aboutItems = [
  { image: '/assets/about us/about_us_pfp.png', alt: 'Our Story', label: 'Our Story', href: './about-us/about-us.html#our-story' },
  { image: '/assets/about us/meet_the_team_pfp.png', alt: 'Meet the Team', label: 'Meet the Team', href: './about-us/about-us.html#meet-the-team' },
  { image: '/assets/about us/our_mission_pfp.png', alt: 'Our Mission', label: 'Our Mission', href: './about-us/about-us.html#our-mission' },
  { image: '/assets/about us/contact_us_pfp.png', alt: 'Contact Us', label: 'Contact Us', href: './about-us/about-us.html#contact-us' },
];

class Dropdown extends React.Component {
  render() {
    const { label, items, extraClass } = this.props;

    return (
      <div className="dropdown-container">
        <button
          type="button"
          className={extraClass}
          aria-haspopup="true"
          aria-expanded="false"
        >
          {label}
        </button>

        <ul className="navtop-dropdown">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <img className="img-fluid" src={item.image} alt={item.alt} loading="lazy" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navtop container-fluid">
        <ul className="list-unstyled">
          <li className="left">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" hidden />
            <label htmlFor="menu-toggle" className="menu-button" title="Menu">☰</label>

            <div id="primary-nav" className="nav-left">
              <Dropdown label="RECIPES" items={recipesItems} extraClass="recipes-link" />
              <Dropdown label="INSPIRATION" items={inspirationItems} />
              <Dropdown label="SHOP" items={shopItems} />
              <Dropdown label="ABOUT US" items={aboutItems} />
            </div>
          </li>

          <li className="celestial">
            <a href="/">CELESTIAL <span className="emoji">💫</span></a>
          </li>

          <li className="right">
            <a href="forms/index.html">
              <img className="img-fluid" src="/assets/icons/user.png" alt="user" width="32" height="32" />
            </a>
            <a href="./payment/payment.html">
              <img className="img-fluid" src="/assets/icons/shopping_cart.png" alt="shopping bag" width="32" height="32" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;