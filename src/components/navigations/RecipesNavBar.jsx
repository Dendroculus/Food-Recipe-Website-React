import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./RecipesNavBar.css";

/**
 * RecipeNavbar component renders a responsive header navigation for recipe categories.
 * It includes a hamburger menu that reveals recipe categories, a brand link, and auxiliary icons.
 * @extends React.Component
 */
class RecipeNavbar extends React.Component {
  /**
   * Get the static list of menu items for the recipe menu.
   * Each item includes keys: key, label, img, href, match.
   * @returns {Array<Object>} Array of menu item objects.
   */
  getMenuItems() {
    return [
      {
        key: "main-course",
        label: "Main Course",
        img: "/assets/main_course/main_course_pfp.jpg",
        href: "/recipes/main-page/main-course",
        match: "main-course",
      },
      {
        key: "dessert",
        label: "Dessert",
        img: "/assets/desserts/desserts_pfp.jpg",
        href: "/recipes/main-page/dessert",
        match: "dessert",
      },
      {
        key: "salad",
        label: "Salad",
        img: "/assets/salad/salad_pfp.jpg",
        href: "/recipes/main-page/salad",
        match: "salad",
      },
      {
        key: "appetizer",
        label: "Appetizer",
        img: "/assets/appetizers/appetizers_pfp.jpg",
        href: "/recipes/main-page/appetizer",
        match: "appetizer",
      },
      {
        key: "special-diets",
        label: "Special Diets",
        img: "/assets/special_diets/vegan/Vegan BG.jpg",
        href: "/recipes/main-page/special-diets",
        match: "special-diets",
      },
    ];
  }

  /**
   * Render the menu items as JSX elements for the slide-in recipe menu.
   * @returns {Array<JSX.Element>} Array of JSX div elements for each menu item.
   */
  renderMenuItems() {
    return this.getMenuItems().map((item) => (
      <div id={item.key} className="border-bottom" key={item.key}>
        <img src={item.img} alt={`${item.label} Profile`} />
        <a href={item.href}>{item.label}</a>
      </div>
    ));
  }

  /**
   * Render method for the RecipeNavbar component.
   * Outputs header markup including the hamburger menu, brand link, and auxiliary links.
   * @returns {JSX.Element} Header and navigation JSX.
   */
  render() {
    return (
      <header>
        <nav className="header-navigation">
          <ul>
            <li className="hamburger-menu">
              <nav className="menu">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                  <i className="bars"></i>
                </label>

                <div className="recipe-menu">
                  <h3>Recipes</h3>
                  {this.renderMenuItems()}
                </div>
              </nav>
            </li>

            <li className="celestial-logo">
              {/* change to Link to */}
              <Link to="/">CELESTIAL 💫</Link>
            </li>

            <li className="other-logo">
              <Link to="/" id="home" className="other" rel="noreferrer">
                <img src="/assets/icons/house.png" alt="home" width="32" height="32" />
              </Link>
              <Link to="/form" className="other" target="_blank" rel="noreferrer">
                <img src="/assets/icons/user.png" alt="user" width="32" height="32" />
              </Link>
              <Link to="/payment/payment" className="other" target="_blank" rel="noreferrer">
                <img src="/assets/icons/shopping_cart.png" alt="shopping bag" width="32" height="32" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

/**
 * Higher-order component that injects the router location into the wrapped component's props.
 * @param {React.ComponentType} Component - The component to wrap.
 * @returns {React.ComponentType} Wrapped component that receives a `location` prop.
 */
function withLocation(Component) {
  return function Wrapped(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

export default withLocation(RecipeNavbar);