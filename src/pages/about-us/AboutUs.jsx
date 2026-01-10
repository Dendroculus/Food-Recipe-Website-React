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
        img: "https://avatars.githubusercontent.com/u/224712928?v=4",
        name: "Hans Valerie",
        role: "Team Lead & Software Architect",
        bio:
          "As the team lead, Hans ensures the codebase remains clean, maintainable, and scalable. He manages the repository, enforces architectural standards, and aggressively refactors code to adhere to DRY principles. Driven by the belief that every piece of code must have documentation, he maintains rigorous technical docs to ensure the project's long-term success.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/167067576?v=4",
        name: "Jessica Gunawan",
        role: "Full Stack Developer",
        bio:
          "Jessica bridges the gap between the server and the browser. She implements core features and ensures the application logic connects seamlessly with the user interface. She loves solving complex logic puzzles and bringing designs to life.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/230555205?v=4",
        name: "Kindy Lim",
        role: "QA & User Experience",
        bio:
          "Kindy is responsible for breaking the app so you don't have to. They handle quality assurance testing and ensure the user journey is smooth and intuitive. If there is a bug or a confusing button, Kindy finds it first.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/160008363?v=4",
        name: "Edbert Chandra",
        role: "Backend & Data Management",
        bio:
          "Edbert structures the data that powers the application. He manages the content databases and ensures that recipes and user data are stored efficiently and retrieved quickly.",
      },
      {
        img: "https://avatars.githubusercontent.com/u/235623182?v=4",
        name: "Steven Lienardi",
        role: "UI/UX Designer & Frontend",
        bio:
          "Steven focuses on the look and feel of the application. He explores new library features and visual styles to make sure the application isn't just functional, but also visually engaging for the user.",
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