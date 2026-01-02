import React from "react";
import "../SeasonalConstellations.css";
import "./SeasonalSections.css";
import "../../stellar_tips/StellarSections/StellarSections.css"
import Spotlight from "../Spotlight/Spotlight";
import SeasonsGrid from "../SeasonsGrid/SeasonsGrid";
import Calendar from "../Calendar/Calendar";
import WhySeasonal from "../WhySeasonal/WhySeasonal";

export default class SeasonalSections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { seasons, calendar, benefits } = this.state;
    const currentSeason = this.getCurrentSeason();

    return (
      <>
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
      </>
    );
  }
}