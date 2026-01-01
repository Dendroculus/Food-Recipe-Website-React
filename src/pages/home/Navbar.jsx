import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const recipesItems = [
  { image: '/assets/main_course/main_course_pfp.jpg', alt: 'Main course', label: 'Main Course', href: '/five-course-meal/main-page/main-course' },
  { image: '/assets/appetizers/appetizers_pfp.jpg', alt: 'Appetizers', label: 'Appetizers', href: '/five-course-meal/main-page/appetizer' },
  { image: '/assets/salad/salad_pfp.jpg', alt: 'Salad', label: 'Salad', href: '/five-course-meal/main-page/salad' },
  { image: '/assets/desserts/desserts_pfp.jpg', alt: 'Desserts', label: 'Desserts', href: '/five-course-meal/main-page/dessert' },
  { image: '/assets/special_diets/special_diets_pfp.jpg', alt: 'Special Diets', label: 'Special Diets', href: '/five-course-meal/main-page/special-diets' },
];

const inspirationItems = [
  { image: '/assets/inspiration/stellar_tips_pfp.jpg', alt: 'Stellar Tips', label: 'Stellar Tips', href: '/inspiration/stellar-tips' },
  { image: '/assets/inspiration/seasonal_constellation_pfp.png', alt: 'Seasonal Constellations', label: 'Seasonal Constellations', href: '/inspiration/seasonal-constellations' },
  { image: '/assets/inspiration/kitchen_universe_pfp.png', alt: 'Kitchen Universe', label: 'Kitchen Universe', href: '/coming-soon/coming-soon' },
  { image: '/assets/inspiration/guiding_stars_pfp.png', alt: 'Guiding Stars', label: 'Guiding Stars', href: '/coming-soon/coming-soon' },
  { image: '/assets/inspiration/orbit_of_flavors_pfp.png', alt: 'Orbit Of Flavors', label: 'Orbit Of Flavors', href: '/coming-soon/coming-soon' },
];

const shopItems = [
  { image: '/assets/shop/Ingredients/ingredients_pfp.jpg', alt: 'Cooking Ingredients', label: 'Cooking Ingredients', href: '/shop/ingredients' },
  { image: '/assets/shop/Kitchen Tools/kitchen_tools_pfp.jpg', alt: 'Kitchen Tools', label: 'Kitchen Tools', href: '/shop/kitchen-tools' },
  { image: '/assets/shop/Recipe Themed/recipe_themed_merch_pfp.png', alt: 'Recipe Themed Merch', label: 'Recipe Themed Merch', href: '/shop/recipe-themed' },
  { image: '/assets/shop/Digital Products/digital_products_pfp.png', alt: 'Digital Products', label: 'Digital Products', href: '/shop/digital-products' },
];

const aboutItems = [
  { image: '/assets/about us/about_us_pfp.png', alt: 'Our Story', label: 'Our Story', href: '/about-us/AboutUs#our-story' },
  { image: '/assets/about us/meet_the_team_pfp.png', alt: 'Meet the Team', label: 'Meet the Team', href: '/about-us/AboutUs#meet-the-team' },
  { image: '/assets/about us/our_mission_pfp.png', alt: 'Our Mission', label: 'Our Mission', href: '/about-us/AboutUs#our-mission' },
  { image: '/assets/about us/contact_us_pfp.png', alt: 'Contact Us', label: 'Contact Us', href: '/about-us/AboutUs#contact-us' },
];

function NavbarWithLocation(props) {
  const location = useLocation();
  return <Navbar {...props} location={location} />;
}

class Dropdown extends React.Component {
  render() {
    const { label, items, extraClass } = this.props;

    return (
      <div className="dropdown-container">
        <button type="button" className={extraClass} aria-haspopup="true" aria-expanded="false">
          {label}
        </button>

        <ul className="navtop-dropdown">
          {items.map((item) => (
            <li key={item.href || item.label}>
              {item.href && item.href.startsWith('/') ? (
                <Link to={item.href}>
                  <img className="img-fluid" src={item.image} alt={item.alt} loading="lazy" width="120" height="80" />
                  <span>{item.label}</span>
                </Link>
              ) : (
                <a href={item.href}>
                  <img className="img-fluid" src={item.image} alt={item.alt} loading="lazy" width="120" height="80" />
                  <span>{item.label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';
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
            <Link to="/">CELESTIAL <span className="emoji">💫</span></Link>
          </li>

          <li className="right">
            {!isHomePage && (
            <Link to="/">
              <img className="img-fluid" src="/assets/icons/house.png" alt="home" width="32" height="32" />
            </Link>
            )}
            <Link to="/account">
              <img className="img-fluid" src="/assets/icons/user.png" alt="user" width="32" height="32" />
            </Link>
            <Link to="/payment/Payment">
              <img className="img-fluid" src="/assets/icons/shopping_cart.png" alt="shopping bag" width="32" height="32" />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarWithLocation;
