import React from "react";
import "../Inspiration.css";
import "./seasonal.css";
import "../../home/Home.css";
import Footer from "../../home/Footer";
import Modals from "../../home/Modals";

import InspirationNav from "../InspirationNav";
import SeasonsGrid from "./SeasonsGrid";
import Calendar from "./Calendar";
import WhySeasonal from "./WhySeasonal";
import Spotlight from "./Spotlight";

class SeasonalConstellations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navGroups: [
        {
          id: "recipes",
          label: "RECIPES",
          active: false,
          items: [
            { href: "/five-course-meal/main-page/main-course", img: "/assets/main_course/main_course_pfp.jpg", alt: "Main course", text: "Main Course" },
            { href: "/five-course-meal/main-page/appetizer", img: "/assets/appetizers/appetizers_pfp.jpg", alt: "Appetizers", text: "Appetizers" },
            { href: "/five-course-meal/main-page/salad", img: "/assets/salad/salad_pfp.jpg", alt: "Salad", text: "Salad" },
            { href: "/five-course-meal/main-page/dessert", img: "/assets/desserts/desserts_pfp.jpg", alt: "Desserts", text: "Desserts" },
            { href: "/five-course-meal/main-page/special-diets", img: "/assets/special_diets/special_diets_pfp.jpg", alt: "Special Diets", text: "Special Diets" },
          ],
        },
        {
          id: "inspiration",
          label: "INSPIRATION",
          active: true,
          items: [
            { href: "/inspiration/stellar-tips", img: "/assets/inspiration/stellar_tips_pfp.jpg", alt: "Stellar Tips", text: "Stellar Tips" },
            { href: "/inspiration/seasonal-constellations", img: "/assets/inspiration/seasonal_constellation_pfp.png", alt: "Seasonal Constellations", text: "Seasonal Constellations" },
            { href: "/coming_soon/soon.html", img: "/assets/inspiration/kitchen_universe_pfp.png", alt: "Kitchen Universe", text: "Kitchen Universe" },
            { href: "/coming_soon/soon.html", img: "/assets/inspiration/guiding_stars_pfp.png", alt: "Guiding Stars", text: "Guiding Stars" },
            { href: "/coming_soon/soon.html", img: "/assets/inspiration/orbit_of_flavors_pfp.png", alt: "Orbit Of Flavors", text: "Orbit Of Flavors" },
          ],
        },
        {
          id: "shop",
          label: "SHOP",
          active: false,
          items: [
            { href: "/shop/ingredients_shop.html", img: "/assets/shop/Ingredients/ingredients_pfp.jpg", alt: "Cooking Ingredients", text: "Cooking Ingredients" },
            { href: "/shop/kitchen_tools.html", img: "/assets/shop/Kitchen Tools/kitchen_tools_pfp.jpg", alt: "Kitchen Tools", text: "Kitchen Tools" },
            { href: "/shop/recipe_themed_merch.html", img: "/assets/shop/Recipe Themed/recipe_themed_merch_pfp.png", alt: "Recipe Themed Merch", text: "Recipe Themed Merch" },
            { href: "/shop/digital_products.html", img: "/assets/shop/Digital Products/digital_products_pfp.png", alt: "Digital Products", text: "Digital Products" },
          ],
        },
        {
          id: "about",
          label: "ABOUT US",
          active: false,
          items: [
            { href: "/about-us/about-us.html#our-story", img: "/assets/about us/about_us_pfp.png", alt: "Our Story", text: "Our Story" },
            { href: "/about-us/about-us.html#meet-the-team", img: "/assets/about us/meet_the_team_pfp.png", alt: "Meet the Team", text: "Meet the Team" },
            { href: "/about-us/about-us.html#our-mission", img: "/assets/about us/our_mission_pfp.png", alt: "Our Mission", text: "Our Mission" },
            { href: "/about-us/about-us.html#contact-us", img: "/assets/about us/contact_us_pfp.png", alt: "Contact Us", text: "Contact Us" },
          ],
        },
      ],
      seasons: [
        {
          className: "spring",
          emoji: "🌸",
          name: "Spring",
          months: "March - May",
          description: "Fresh greens, tender herbs, and vibrant vegetables celebrate renewal and growth.",
          ingredients: ["Asparagus", "Peas", "Strawberries", "Spring Onions", "Radishes"],
          recipes: ["🥗 Spring Vegetable Salad", "🍓 Strawberry Spinach Salad", "🥘 Asparagus Risotto"],
          img: "/assets/bg-image/SPRING.png",
          cta: "Explore Spring Recipes →",
          current: false,
        },
        {
          className: "summer",
          emoji: "☀️",
          name: "Summer",
          months: "June - August",
          description: "Bright, refreshing flavors with juicy fruits, ripe tomatoes, and grilled delights.",
          ingredients: ["Tomatoes", "Corn", "Berries", "Zucchini", "Peaches"],
          recipes: ["🍅 Caprese Salad", "🌽 Grilled Corn Salsa", "🍑 Peach Cobbler"],
          img: "/assets/bg-image/SUMMER.png",
          cta: "Explore Summer Recipes →",
          current: false,
        },
        {
          className: "autumn active-season",
          emoji: "🍂",
          name: "Autumn",
          months: "September - November",
          description: "Warming spices, root vegetables, and hearty comfort foods for cooler days.",
          ingredients: ["Pumpkin", "Squash", "Apples", "Sweet Potato", "Brussels Sprouts"],
          recipes: ["🎃 Pumpkin Soup", "🍎 Apple Pie", "🥧 Butternut Squash Risotto"],
          img: "/assets/bg-image/AUTUMN.png",
          cta: "Explore Autumn Recipes →",
          current: true,
        },
        {
          className: "winter",
          emoji: "❄️",
          name: "Winter",
          months: "December - February",
          description: "Rich stews, roasted meats, and warming dishes to comfort through the cold.",
          ingredients: ["Kale", "Citrus", "Root Vegetables", "Cabbage", "Pomegranate"],
          recipes: ["🍲 Beef Stew", "🥬 Kale Soup", "🍊 Citrus Salad"],
          img: "/assets/bg-image/WINTER.png",
          cta: "Explore Winter Recipes →",
          current: false,
        },
      ],
      calendar: [
        { month: "January", produce: ["🥬 Kale", "🍊 Oranges", "🥕 Carrots"] },
        { month: "February", produce: ["🥦 Broccoli", "🍋 Lemons", "🧄 Garlic"] },
        { month: "March", produce: ["🥬 Spinach", "🌱 Herbs", "🥕 Beets"] },
        { month: "April", produce: ["🥒 Asparagus", "🥬 Lettuce", "🌿 Peas"] },
        { month: "May", produce: ["🍓 Strawberries", "🥒 Cucumbers", "🌿 Mint"] },
        { month: "June", produce: ["🍅 Tomatoes", "🫐 Blueberries", "🌽 Corn"] },
        { month: "July", produce: ["🍑 Peaches", "🥒 Zucchini", "🌶️ Peppers"] },
        { month: "August", produce: ["🍉 Watermelon", "🍆 Eggplant", "🌽 Corn"] },
        { month: "September", produce: ["🍎 Apples", "🎃 Pumpkin", "🍇 Grapes"] },
        { month: "October", produce: ["🥔 Sweet Potato", "🌰 Squash", "🍐 Pears"] },
        { month: "November", produce: ["🥕 Carrots", "🍠 Yams", "🥔 Potatoes"] },
        { month: "December", produce: ["🥬 Kale", "🍊 Tangerines", "🌰 Chestnuts"] },
      ],
      benefits: [
        { icon: "🌍", title: "Better for Environment", text: "Reduce carbon footprint by choosing locally grown, in-season produce" },
        { icon: "💰", title: "Save Money", text: "Seasonal ingredients are abundant and more affordable" },
        { icon: "😋", title: "Maximum Flavor", text: "Enjoy produce at its peak ripeness and tastiness" },
        { icon: "💪", title: "More Nutrients", text: "Fresh, seasonal food retains more vitamins and minerals" },
      ],
    };
  }

  getCurrentSeason() {
    const { seasons } = this.state;

    if (this.props.currentSeasonName) {
      const override = seasons.find(
        (s) => s.name.toLowerCase() === this.props.currentSeasonName.toLowerCase()
      );
      if (override) return override;
    }

    const month = new Date().getMonth(); 
    let seasonName = "";
    if (month === 11 || month === 0 || month === 1) seasonName = "Winter";
    else if (month >= 2 && month <= 4) seasonName = "Spring";
    else if (month >= 5 && month <= 7) seasonName = "Summer";
    else if (month >= 8 && month <= 10) seasonName = "Autumn";

    const byMonth = seasons.find(
      (s) => s.name.toLowerCase() === seasonName.toLowerCase()
    );
    if (byMonth) return byMonth;

    const explicit = seasons.find((s) => s.current === true);
    if (explicit) return explicit;

    return seasons[0] || null;
  }

  render() {
    const { navGroups, seasons, calendar, benefits } = this.state;
    const currentSeason = this.getCurrentSeason();

    return (
      <>
        <InspirationNav navGroups={navGroups} />

        <header className="stellar-hero">
          <div className="container">
            <h1 className="main-title">Seasonal Constellation</h1>
            <p className="hero-subtitle">Discover recipes that celebrate the flavors of each season</p>
          </div>
        </header>

        <main>
          <Spotlight season={currentSeason} />

          <SeasonsGrid seasons={seasons} />

          <Calendar months={calendar} />

          <WhySeasonal benefits={benefits} />
        </main>

        <Modals />
        <Footer />
      </>
    );
  }
}

export default SeasonalConstellations;