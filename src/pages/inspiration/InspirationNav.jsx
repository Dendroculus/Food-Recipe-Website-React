import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Inspiration.css';

class StellarNav extends React.Component {
  render() {
    return (
      <nav className="stellar-nav">
        <input type="checkbox" id="stellar-menu-toggle" className="stellar-menu-toggle" hidden />

        <div className="stellar-nav-container">
          <div className="stellar-nav-left-wrapper">
            <label htmlFor="stellar-menu-toggle" className="stellar-menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <div className="stellar-nav-left" id="stellar-nav-left">
              <div className="stellar-dropdown">
                <input type="checkbox" id="toggle-recipes" className="stellar-submenu-toggle" hidden />
                <label htmlFor="toggle-recipes" className="stellar-link toggle-label">
                  RECIPES
                </label>

                <button
                  type="button"
                  className="stellar-link desktop-trigger"
                  aria-expanded="false"
                  aria-controls="recipes-menu"
                >
                  RECIPES
                </button>

                <div className="stellar-dropdown-menu" id="recipes-menu">
                  <a href="/five-course-meal/main-page-html/main-course.html">
                    <img src="/assets/main_course/main_course_pfp.jpg" alt="Main course" loading="lazy" />
                    <span>Main Course</span>
                  </a>
                  <a href="/five-course-meal/main-page-html/appetizer.html">
                    <img src="/assets/appetizers/appetizers_pfp.jpg" alt="Appetizers" loading="lazy" />
                    <span>Appetizers</span>
                  </a>
                  <a href="/five-course-meal/main-page-html/salad.html">
                    <img src="/assets/salad/salad_pfp.jpg" alt="Salad" loading="lazy" />
                    <span>Salad</span>
                  </a>
                  <a href="/five-course-meal/main-page-html/dessert.html">
                    <img src="/assets/desserts/desserts_pfp.jpg" alt="Desserts" loading="lazy" />
                    <span>Desserts</span>
                  </a>
                </div>
              </div>

              <div className="stellar-dropdown">
                <input type="checkbox" id="toggle-inspiration" className="stellar-submenu-toggle" hidden />
                <label htmlFor="toggle-inspiration" className="stellar-link toggle-label active">
                  INSPIRATION
                </label>

                <button
                  type="button"
                  className="stellar-link active desktop-trigger"
                  aria-expanded="true"
                  aria-controls="inspiration-menu"
                >
                  INSPIRATION
                </button>

                <div className="stellar-dropdown-menu" id="inspiration-menu">
                  {/*
                    Option A (hard reload navigation): use a plain <a href="...">.
                    Clicking this will perform a full page navigation / reload.
                  */}
                  <a href="/inspiration/stellar-tips" className="dropdown-item">
                    <img src="/assets/inspiration/stellar_tips_pfp.jpg" alt="Stellar Tips" loading="lazy" />
                    <span>Stellar Tips</span>
                  </a>

                  {/*
                    The other submenu items can remain client-side links (NavLink)
                    or be anchors too depending on whether you want a full reload.
                  */}
                  <NavLink to="/inspiration/seasonal-constellation" className="dropdown-item">
                    <img
                      src="/assets/inspiration/seasonal_constellation_pfp.png"
                      alt="Seasonal Constellations"
                      loading="lazy"
                    />
                    <span>Seasonal Constellations</span>
                  </NavLink>

                  <NavLink to="/coming-soon" className="dropdown-item">
                    <img src="/assets/inspiration/kitchen_universe_pfp.png" alt="Kitchen Universe" loading="lazy" />
                    <span>Kitchen Universe</span>
                  </NavLink>

                  <NavLink to="/coming-soon" className="dropdown-item">
                    <img src="/assets/inspiration/guiding_stars_pfp.png" alt="Guiding Stars" loading="lazy" />
                    <span>Guiding Stars</span>
                  </NavLink>

                  <NavLink to="/coming-soon" className="dropdown-item">
                    <img src="/assets/inspiration/orbit_of_flavors_pfp.png" alt="Orbit Of Flavors" loading="lazy" />
                    <span>Orbit Of Flavors</span>
                  </NavLink>
                </div>
              </div>

              <div className="stellar-dropdown">
                <input type="checkbox" id="toggle-shop" className="stellar-submenu-toggle" hidden />
                <label htmlFor="toggle-shop" className="stellar-link toggle-label">
                  SHOP
                </label>

                <button
                  type="button"
                  className="stellar-link desktop-trigger"
                  aria-expanded="false"
                  aria-controls="shop-menu"
                >
                  SHOP
                </button>

                <div className="stellar-dropdown-menu" id="shop-menu">
                  <a href="/shop/ingredients_shop.html">
                    <img
                      src="/assets/shop/Ingredients/ingredients_pfp.jpg"
                      alt="Cooking Ingredients"
                      loading="lazy"
                    />
                    <span>Cooking Ingredients</span>
                  </a>
                  <a href="/shop/kitchen_tools.html">
                    <img
                      src="/assets/shop/Kitchen Tools/kitchen_tools_pfp.jpg"
                      alt="Kitchen Tools"
                      loading="lazy"
                    />
                    <span>Kitchen Tools</span>
                  </a>
                  <a href="/shop/recipe_themed_merch.html">
                    <img
                      src="/assets/shop/Recipe Themed/recipe_themed_merch_pfp.png"
                      alt="Recipe Themed Merch"
                      loading="lazy"
                    />
                    <span>Recipe Themed Merch</span>
                  </a>
                  <a href="/shop/digital_products.html">
                    <img
                      src="/assets/shop/Digital Products/digital_products_pfp.png"
                      alt="Digital Products"
                      loading="lazy"
                    />
                    <span>Digital Products</span>
                  </a>
                </div>
              </div>

              <div className="stellar-dropdown">
                <input type="checkbox" id="toggle-about" className="stellar-submenu-toggle" hidden />
                <label htmlFor="toggle-about" className="stellar-link toggle-label">
                  ABOUT US
                </label>

                <button
                  type="button"
                  className="stellar-link desktop-trigger"
                  aria-expanded="false"
                  aria-controls="about-menu"
                >
                  ABOUT US
                </button>

                <div className="stellar-dropdown-menu" id="about-menu">
                  <a href="/about-us/about-us.html#our-story">
                    <img src="/assets/about us/about_us_pfp.png" alt="Our Story" loading="lazy" />
                    <span>Our Story</span>
                  </a>
                  <a href="/about-us/about-us.html#meet-the-team">
                    <img src="/assets/about us/meet_the_team_pfp.png" alt="Meet the Team" loading="lazy" />
                    <span>Meet the Team</span>
                  </a>
                  <a href="/about-us/about-us.html#our-mission">
                    <img src="/assets/about us/our_mission_pfp.png" alt="Our Mission" loading="lazy" />
                    <span>Our Mission</span>
                  </a>
                  <a href="/about-us/about-us.html#contact-us">
                    <img src="/assets/about us/contact_us_pfp.png" alt="Contact Us" loading="lazy" />
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Link to="/" className="stellar-brand">
            <span className="brand-text">CELESTIAL</span>
            <span className="brand-icon">💫</span>
            <div className="brand-glow"></div>
          </Link>

          <div className="stellar-nav-right">
            <Link to="/" id="home" className="stellar-icon-link" title="Home">
              <img src="/assets/icons/house.png" alt="home" />
            </Link>
            <a href="/forms/index.html" className="stellar-icon-link" title="Account">
              <img src="/assets/icons/user.png" alt="user" />
            </a>
            <a href="/shop/ingredients_shop.html" className="stellar-icon-link" title="Cart">
              <img src="/assets/icons/shopping_cart.png" alt="shopping bag" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default StellarNav;