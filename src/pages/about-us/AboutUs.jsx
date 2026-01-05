import React from "react";
import { useLocation } from "react-router-dom";
import "../home/Home.css";
import "./AboutUs.css";
import Navbar from "../../components/navigations/Navbar";
import Footer from "../../components/footer/Footer";
import Modals from "../../components/modals/Modals";

function withLocation(Component) {
  /**
   * Higher-order component to inject router location into a component's props.
   * @param {object} props - Props passed to the wrapped component.
   * @returns {JSX.Element} Wrapped component with an added `location` prop.
   */
  return function Wrapped(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

/**
 * AboutUs page component.
 * Renders the About Us content, team members, mission, contact section, and includes navigation, modals, and footer.
 * Handles scrolling to hash fragments on mount and update.
 * @extends React.Component
 */
class AboutUs extends React.Component {
  /**
   * Lifecycle method called after the component is mounted.
   * Triggers scrolling to any hash in the URL.
   * @returns {void}
   */
  componentDidMount() {
    this.scrollToHash();
  }

  /**
   * Lifecycle method called after component updates.
   * Checks for location changes and scrolls to the new hash if necessary.
   * @param {object} prevProps - Previous props before the update.
   * @returns {void}
   */
  componentDidUpdate(prevProps) {
    const prevPath = prevProps.location?.pathname;
    const currPath = this.props.location?.pathname;
    const prevHash = prevProps.location?.hash;
    const currHash = this.props.location?.hash;

    if (prevPath !== currPath || prevHash !== currHash) {
      this.scrollToHash();
    }
  }

  /**
   * Scrolls smoothly to the element referenced by the current URL hash (if present).
   * Uses requestAnimationFrame to ensure DOM is ready.
   * @returns {void}
   */
  scrollToHash() {
    const hash = this.props.location?.hash || window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  /**
   * Render a team member block.
   * @param {object} member - Team member data object.
   * @param {string} member.img - Image URL for the member.
   * @param {string} member.name - Member's name.
   * @param {string} member.role - Member's role/title.
   * @param {string} member.bio - Short biography or description.
   * @param {boolean} [reverse=false] - If true, reverses layout for alternating rows.
   * @returns {JSX.Element} JSX for a team member row.
   */
  renderTeamMember({ img, name, role, bio }, reverse = false) {
    return (
      <div className={`row align-items-center team-member ${reverse ? "flex-md-row-reverse" : ""} mb-5`}>
        <div className="col-md-4 text-center">
          <div className="team-pfp">
            <img src={img} alt={name} className="img-fluid rounded-circle" loading="lazy" />
          </div>
        </div>

        <div className="col-md-8">
          <div className={`team-info ${reverse ? "text-md-end" : ""}`}>
            <h3 className="team-name">{name}</h3>
            <p className="team-role">{role}</p>
            <p className="team-bio">{bio}</p>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Main render method for the AboutUs page.
   * Assembles the team data and renders the full page content.
   * @returns {JSX.Element} The About Us page JSX.
   */
  render() {
    const team = [
      {
        img: "https://avatars.githubusercontent.com/u/167067576?v=4",
        name: "Jessica Gunawan",
        role: "Founder & Head Chef",
        bio:
          "With 15 years of professional kitchen experience spanning Michelin-starred restaurants and cozy neighborhood bistros, Jessica is the creative force behind our recipes. She has a special talent for taking complex culinary techniques and making them approachable for home cooks. Jessica's passion lies in seasonal ingredients and bold, unexpected flavor combinations that elevate everyday meals into memorable experiences. When she's not in the kitchen, you'll find her at local farmers' markets or teaching cooking classes to aspiring chefs.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/224712928?v=4",
        name: "Hans Valerie",
        role: "Pastry Expert & Photographer",
        bio:
          "Hans is a master pastry chef trained in Paris and Tokyo, bringing a unique blend of French precision and Japanese artistry to our desserts. Beyond his incredible baking skills, Hans is the eye behind every beautiful food photograph you see on our site. He believes that we eat with our eyes first, and his stunning imagery makes every dish look as delicious as it tastes. Hans has a special gift for transforming simple ingredients into elegant desserts that both look and taste extraordinary.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/230555205?v=4",
        name: "Kindy Lim",
        role: "Recipe Tester & Community Manager",
        bio:
          "Kindy is the heart and soul of our community. As our lead recipe tester, they ensure every single recipe works flawlessly in real home kitchens—not just professional test kitchens. Kindy tests each recipe at least three times using everyday equipment and ingredients you can find at your local grocery store. Beyond testing, Kindy manages our thriving online community, responding to questions, sharing cooking tips, and celebrating our members' culinary victories.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/160008363?v=4",
        name: "Edbert Chandra",
        role: "Content Strategist & Food Writer",
        bio:
          "Edbert is a storyteller at heart who believes every recipe has a narrative worth sharing. With a background in cultural anthropology and food journalism, he crafts compelling stories around food traditions, ingredient origins, and the cultural significance of dishes from around the world.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/235623182?v=4",
        name: "Steven Lienardi",
        role: "Culinary Consultant & Innovation Lead",
        bio:
          "Steven brings global flavors and cutting-edge techniques to our kitchen. With experience in molecular gastronomy, plant-based cuisine, and traditional cooking methods from six continents, Steven constantly pushes the boundaries of what's possible in a home kitchen.",
      },
    ];

    return (
      <div className="about-page">
        <Navbar />

        <main>
          <div className="container">
            <h1 className="main-title">About Us</h1>

            <section className="about-section-box" id="our-story">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="dessert-summary-content text-center">
                    <img
                      src="/assets/bg-image/cooking-bg.jpg"
                      alt="Chef preparing dishes in a warm kitchen"
                      loading="lazy"
                    />
                    <h2 className="head-title">Our Story</h2>

                    <p>
                      Our story begins not in a fancy professional kitchen, but at a humble kitchen table, cluttered with flour and filled with laughter. It all started on a rainy Saturday afternoon when five friends gathered to bake bread together. What began as a simple hobby soon turned into a passionate journey to bring people together through the universal language of food.
                    </p>

                    <p>
                      We quickly realized that cooking isn't just about following recipes—it's about creating memories, sharing culture, and building connections. From those early weekend gatherings, we started sharing our favorite recipes via text message and hosting monthly cooking nights. Before we knew it, our little group had grown into a vibrant community of home cooks, professional chefs, and food enthusiasts from all walks of life.
                    </p>

                    <p>
                      Today, Celestial Recipe Book is the culmination of countless hours spent perfecting recipes, testing techniques, and listening to what our community loves. We believe that everyone deserves access to delicious, reliable, and inspiring recipes—whether you're cooking your first meal or your thousandth. Our mission is simple: to make cooking joyful, accessible, and a little bit magical for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="team-section-wrapper" id="meet-the-team">
              <div className="container">
                <h2 className="head-title text-center">Meet the Team</h2>

                <div className="team-list">
                  {team.map((member, idx) =>
                    this.renderTeamMember(member, idx % 2 === 1)
                  )}
                </div>
              </div>
            </section>

            <section className="about-section-box" id="our-mission">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="dessert-summary-content text-center">
                    <h2 className="head-title">Our Mission</h2>
                    <p>
                      Welcome to <strong>Celestial Recipe Book</strong>! We believe that cooking should be a joyful, creative, and accessible experience for everyone—from complete beginners taking their first steps in the kitchen to experienced home cooks looking for new inspiration. Our mission is to share delicious, reliable, and inspiring recipes that empower you to create amazing meals in your own kitchen, regardless of your skill level or the equipment you have available.
                    </p>
                    <p>
                      We're passionate about fresh, seasonal ingredients and believe that the best meals start with quality produce. But we also understand that cooking is about more than just ingredients—it's about the techniques you use, the love you put into your food, and the memories you create around the table. That's why we focus on teaching simple, foundational techniques that unlock a world of culinary possibilities, while also celebrating the magic that happens when people come together over a good meal.
                    </p>
                    <p>
                      From quick weeknight dinners that get food on the table in 30 minutes to elaborate holiday feasts that bring the whole family together, we're here to guide you every step of the way. We test every recipe multiple times, provide clear step-by-step instructions, and offer helpful tips and variations so you can make each dish your own. Our goal is to build your confidence in the kitchen and inspire you to experiment, explore new flavors, and discover the joy of cooking for yourself and the people you love.
                    </p>
                    <p>
                      We also believe in building a supportive, inclusive community where home cooks can learn from each other, share their successes (and occasional kitchen disasters!), and celebrate the universal language of food. Whether you're here to master the basics, explore new cuisines, or simply find tonight's dinner inspiration, we're honored to be part of your culinary journey. Welcome to our kitchen—let's cook something amazing together!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-section-box contact-section-box" id="contact-us">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="dessert-summary-content text-center">
                    <h3 className="head-title">Contact Us</h3>
                    <p>We’d love to hear from you! Whether you have questions, feedback, or collaboration ideas — our inbox is always open.</p>

                    <p className="contact-email-text">
                      Email us at <a href="mailto:hello@celestialrecipes.com" className="contact-email-link">hello@celestialrecipes.com</a>
                    </p>

                    <p className="contact-email-text mt-3">
                      You can also reach us through our <a href="#footer-socials" className="contact-us-socials">socials</a> to share your message directly.
                    </p>

                    <p className="contact-email-text mt-3">
                      We usually respond within 48 hours. Thank you for being part of the Celestial community!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Modals />
        <Footer />
      </div>
    );
  }
}

export default withLocation(AboutUs);