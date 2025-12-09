import React from 'react';
import TodayPickCard from './TodayPickCard';

class TodayPicks extends React.Component {
  constructor(props) {
    super(props);
    this.picks = [
      {
        image: '/assets/main_course/Pork Chops Charcutiere Sauce.png',
        title: 'Pork Chops Charcutiere',
        href: './five-course-meal/recipes-html/main-course-recipes.html#pork-chops',
        meta: '30 min • Medium • ★ 4.8',
      },
      {
        image: '/assets/desserts/Panacotta.png',
        title: 'Panacotta',
        href: './five-course-meal/recipes-html/dessert-recipes.html#panacotta',
        meta: '2 hr • Medium • ★ 4.7',
      },
      {
        image: '/assets/salad/Italian Salad.png',
        title: 'Italian Salad',
        href: './five-course-meal/recipes-html/salad-recipes.html#italian-salad',
        meta: '10 min • Easy • ★ 4.5',
      },
      {
        image: '/assets/desserts/Oreo Tiramisu Trifle.webp',
        title: 'Oreo Tiramisu Trifle',
        href: './five-course-meal/recipes-html/dessert-recipes.html#oreo-tiramisu-trifle',
        meta: '24 min • Easy • ★ 4.4',
      },
      {
        image: '/assets/appetizers/Fried Prosciutto Tortellini.jpg',
        title: 'Fried Prosciutto Tortellini',
        href: './five-course-meal/recipes-html/appetizer-recipes.html#fried-prosciutto-tortellini',
        meta: '15 min • Medium • ★ 4.9',
      },
      {
        image: '/assets/salad/Mediterranean Salad.jpg',
        title: 'Mediterranean Salad',
        href: './five-course-meal/recipes-html/salad-recipes.html#mediterranean-salad',
        meta: '10 min • Medium • ★ 4.5',
      },
    ];
  }

  render() {
    const firstRow = this.picks.slice(0, 3);
    const secondRow = this.picks.slice(3, 6);

    return (
      <div className="today-picks">
        <h1>Today's Picks</h1>

        <div className="today-picks-fyp">
          {firstRow.map((item, index) => (
            <TodayPickCard
              key={index}
              image={item.image}
              title={item.title}
              href={item.href}
              meta={item.meta}
            />
          ))}
        </div>

        <div className="today-picks-fyp">
          {secondRow.map((item, index) => (
            <TodayPickCard
              key={index + 3}
              image={item.image}
              title={item.title}
              href={item.href}
              meta={item.meta}
            />
          ))}
        </div>

        <div className="quick-recipes">
          <form id="quick-recipes-form" action="quick-recipe-subscribe">
            <label htmlFor="quick-subscribe">
              Get 5 quick recipes delivered to your inbox for free
            </label>
            <div className="input-group">
              <input
                type="email"
                id="quick-subscribe"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TodayPicks;