import React from "react";
import { useLocation } from "react-router-dom";
import "../home/Home.css";
import "./styles/main.css";

class RecipeNavbar extends React.Component {
  getMenuItems() {
    return [
      {
        key: "main-course",
        label: "Main Course",
        img: "/assets/main_course/main_course_pfp.jpg",
        href: "/five-course-meal/main-page/main-course",
        match: "main-course",
      },
      {
        key: "dessert",
        label: "Dessert",
        img: "/assets/desserts/desserts_pfp.jpg",
        href: "/five-course-meal/main-page/dessert",
        match: "dessert",
      },
      {
        key: "salad",
        label: "Salad",
        img: "/assets/salad/salad_pfp.jpg",
        href: "/five-course-meal/main-page/salad",
        match: "salad",
      },
      {
        key: "appetizer",
        label: "Appetizer",
        img: "/assets/appetizers/appetizers_pfp.jpg",
        href: "/five-course-meal/main-page/appetizer",
        match: "appetizer",
      },
      {
        key: "special-diets",
        label: "Special Diets",
        img: "/assets/special_diets/vegan/Vegan BG.jpg",
        href: "/five-course-meal/main-page/special-diets",
        match: "special-diets",
      },
    ];
  }

  renderMenuItems() {
    const { location } = this.props;
    const currentPath = (location?.pathname || "").toLowerCase();

    const itemsToShow = this.getMenuItems().filter(
      (item) => !currentPath.includes(item.match.toLowerCase())
    );

    return itemsToShow.map((item) => (
      <div id={item.key} className="border-bottom" key={item.key}>
        <img src={item.img} alt={`${item.label} Profile`} />
        <a href={item.href}>{item.label}</a>
      </div>
    ));
  }

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
              <a href="/about-us/about-us.html">CELESTIAL 💫</a>
            </li>

            <li className="other-logo">
              <a href="/" id="home" className="other" rel="noreferrer">
                <img src="/assets/icons/house.png" alt="home" width="32" height="32" />
              </a>
              <a href="/forms/index.html" className="other" target="_blank" rel="noreferrer">
                <img src="/assets/icons/user.png" alt="user" width="32" height="32" />
              </a>
              <a href="/payment/payment" className="other" target="_blank" rel="noreferrer">
                <img src="/assets/icons/shopping_cart.png" alt="shopping bag" width="32" height="32" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

function withLocation(Component) {
  return function Wrapped(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

export default withLocation(RecipeNavbar);