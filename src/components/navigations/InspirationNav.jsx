import React from "react";
import { Link } from "react-router-dom";
import "./styles/InspirationNav.css";

/**
 * InspirationNav component - a navigation bar with grouped dropdowns and right-side icon links.
 * Provides default nav groups and right links, and renders dropdowns, brand, and icons.
 * @extends React.Component
 */
export default class InspirationNav extends React.Component {
  /**
   * Default navigation groups with items for dropdowns.
   * @type {Array<Object>}
   */
  defaultNavGroups = [
    {
      id: "recipes",
      label: "RECIPES",
      active: false,
      items: [
        { href: "/recipes/main-page/main-course", img: "/assets/main_course/main_course_pfp.jpg", alt: "Main course", text: "Main Course" },
        { href: "/recipes/main-page/appetizer", img: "/assets/appetizers/appetizers_pfp.jpg", alt: "Appetizers", text: "Appetizers" },
        { href: "/recipes/main-page/salad", img: "/assets/salad/salad_pfp.jpg", alt: "Salad", text: "Salad" },
        { href: "/recipes/main-page/dessert", img: "/assets/desserts/desserts_pfp.jpg", alt: "Desserts", text: "Desserts" },
        { href: "/recipes/main-page/special-diets", img: "/assets/special_diets/special_diets_pfp.jpg", alt: "Special Diets", text: "Special Diets" },
      ]
    },
    {
      id: "inspiration",
      label: "INSPIRATION",
      active: true,
      items: [
        { href: "/inspiration/stellar-tips", img: "/assets/inspiration/stellar_tips_pfp.jpg", alt: "Stellar Tips", text: "Stellar Tips" },
        { href: "/inspiration/seasonal-constellations", img: "/assets/inspiration/seasonal_constellation_pfp.png", alt: "Seasonal Constellations", text: "Seasonal Constellations" },
        { href: "/coming-soon/coming-soon", img: "/assets/inspiration/kitchen_universe_pfp.png", alt: "Kitchen Universe", text: "Kitchen Universe" },
        { href: "/coming-soon/coming-soon", img: "/assets/inspiration/guiding_stars_pfp.png", alt: "Guiding Stars", text: "Guiding Stars" },
        { href: "/coming-soon/coming-soon", img: "/assets/inspiration/orbit_of_flavors_pfp.png", alt: "Orbit Of Flavors", text: "Orbit Of Flavors" }
      ]
    },
    {
      id: "shop",
      label: "SHOP",
      active: false,
      items: [
        { href: "/shop/ingredients", img: "/assets/shop/Ingredients/ingredients_pfp.jpg", alt: "Cooking Ingredients", text: "Cooking Ingredients" },
        { href: "/shop/kitchen-tools", img: "/assets/shop/Kitchen Tools/kitchen_tools_pfp.jpg", alt: "Kitchen Tools", text: "Kitchen Tools" },
        { href: "/shop/recipe-themed-merch", img: "/assets/shop/Recipe Themed/recipe_themed_merch_pfp.png", alt: "Recipe Themed Merch", text: "Recipe Themed Merch" },
        { href: "/shop/digital-products", img: "/assets/shop/Digital Products/digital_products_pfp.png", alt: "Digital Products", text: "Digital Products" }
      ]
    },
    {
      id: "about",
      label: "ABOUT US",
      active: false,
      items: [
        { href: "/about-us/about-us.html#our-story", img: "/assets/about us/about_us_pfp.png", alt: "Our Story", text: "Our Story" },
        { href: "/about-us/about-us.html#meet-the-team", img: "/assets/about us/meet_the_team_pfp.png", alt: "Meet the Team", text: "Meet the Team" },
        { href: "/about-us/about-us.html#our-mission", img: "/assets/about us/our_mission_pfp.png", alt: "Our Mission", text: "Our Mission" },
        { href: "/about-us/about-us.html#contact-us", img: "/assets/about us/contact_us_pfp.png", alt: "Contact Us", text: "Contact Us" }
      ]
    }
  ];

  /**
   * Default right-side icon links displayed if none provided via props.
   * @type {Array<Object>}
   */
  defaultRightLinks = [
    { to: "/", img: "/assets/icons/house.png", alt: "home", title: "Home" },
    { href: "/form", img: "/assets/icons/user.png", alt: "user", title: "Account" },
    { href: "/payment/Payment", img: "/assets/icons/shopping_cart.png", alt: "cart", title: "Cart" }
  ];

  /**
   * Render a dropdown menu for a nav group.
   * @param {Object} group - Group configuration object.
   * @returns {JSX.Element} Dropdown JSX.
   */
  renderDropdown(group) {
    return (
      <div key={group.id} className="stellar-dropdown">
        <input type="checkbox" id={`toggle-${group.id}`} className="stellar-submenu-toggle" hidden />
        <label htmlFor={`toggle-${group.id}`} className={`stellar-link toggle-label${group.active ? " active" : ""}`}>
          {group.label}
        </label>
        <a href="/" onClick={(e) => e.preventDefault()} className={`stellar-link${group.active ? " active" : ""} desktop-trigger`}>
          {group.label}
        </a>
        <div className="stellar-dropdown-menu">
          {group.items && group.items.map((item, idx) => (
            <a key={idx} href={item.href}>
              {item.img && <img src={item.img} alt={item.alt || item.text} loading="lazy" />}
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  /**
   * Render the brand element. Uses router Link when useRouterLinks and brandTo are provided.
   * @returns {JSX.Element} Brand link JSX.
   */
  renderBrand() {
    const { brandHref = "/", brandTo, useRouterLinks = true } = this.props;
    if (useRouterLinks && brandTo) {
      return (
        <Link to={brandTo} className="stellar-brand">
          <span className="brand-text">CELESTIAL</span>
          <span className="brand-icon">💫</span>
          <div className="brand-glow"></div>
        </Link>
      );
    }
    return (
      <a href={brandHref} className="stellar-brand">
        <span className="brand-text">CELESTIAL</span>
        <span className="brand-icon">💫</span>
        <div className="brand-glow"></div>
      </a>
    );
  }

  /**
   * Render the right-side icon links, using router Link for items with `to` when useRouterLinks is true.
   * @returns {Array<JSX.Element>} Array of link/icon elements.
   */
  renderRightLinks() {
    const { rightLinks, useRouterLinks = true } = this.props;
    const links = rightLinks && rightLinks.length ? rightLinks : this.defaultRightLinks;
    return links.map((link, idx) => {
      const { href, to, img, alt, title } = link;
      if (useRouterLinks && to) {
        return (
          <Link key={idx} to={to} className="stellar-icon-link" title={title || alt}>
            <img src={img} alt={alt || title || ""} />
          </Link>
        );
      }
      return (
        <a key={idx} href={href || "#"} className="stellar-icon-link" title={title || alt}>
          <img src={img} alt={alt || title || ""} />
        </a>
      );
    });
  }

  /**
   * Main render method for the navigation component.
   * Chooses nav groups from props or defaults and assembles the nav structure.
   * @returns {JSX.Element} Navigation JSX.
   */
  render() {
    const { navGroups } = this.props;
    const groups = navGroups && navGroups.length ? navGroups : this.defaultNavGroups;
    return (
      <nav className="stellar-nav">
        <input type="checkbox" id="stellar-menu-toggle" className="stellar-menu-toggle" hidden />
        <div className="stellar-nav-container">
          <div className="stellar-nav-left-wrapper">
            <label htmlFor="stellar-menu-toggle" className="stellar-menu-btn">
              <span></span><span></span><span></span>
            </label>
            <div className="stellar-nav-left" id="stellar-nav-left">
              {groups.map((g) => this.renderDropdown(g))}
            </div>
          </div>
          {this.renderBrand()}
          <div className="stellar-nav-right">{this.renderRightLinks()}</div>
        </div>
      </nav>
    );
  }
}