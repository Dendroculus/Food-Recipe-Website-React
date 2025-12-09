import React from 'react';
import '../../index.css';
import './Home.css';
import TodayPicks from './TodayPicks';
import Navbar from './Navbar';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="hero-search-container">
          <div className="hero-text-and-desc">
            <div className="hero">
              <h1>Cook like a star - quick, seasonal recipes</h1>
            </div>
            <p className="herodesc">
              Discover a universe of easy-to-make, seasonal recipes that bring the flavors of the cosmos to your kitchen. Whether you're a novice cook or a seasoned chef, our collection of stellar dishes will inspire you to create meals that are out of this world.
            </p>
            <div className="more">
              <button type="button" className="explore">
                EXPLORE RECIPES
              </button>
              <a href="#quick-recipes-form" className="subscribe">
                SUBSCRIBE
              </a>
            </div>

            <TodayPicks />
          </div>

          <form className="site-search" action="#">
            <div className="search">
              <button type="submit" title="Search">
                <img
                  className="img-fluid"
                  src="/assets/icons/search.png"
                  alt="search"
                  width="24"
                  height="24"
                />
              </button>
              <input
                type="text"
                id="site-search"
                className="form-control"
                placeholder="Start searching..."
              />
            </div>
          </form>
        </div>

        <section className="before-footer-features container my-4" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="section-title">
            Featured — Recipe of the Week & Kitchen Tips
          </h2>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <article
                className="card feature-card h-100 text-decoration-none"
                aria-labelledby="weekly-recipe-title"
              >
                <div className="row g-0 h-100 align-items-stretch">
                  <div className="col-4 col-sm-4 col-md-4">
                    <div className="media-wrap">
                      <img
                        src="/assets/main_course/Pork Chops Charcutiere Sauce.png"
                        alt="Recipe of the Week"
                        className="img-fluid rounded-start"
                      />
                      <span className="tag-badge" aria-hidden="true">
                        Weekly Pick
                      </span>
                    </div>
                  </div>
                  <div className="col-8 col-sm-8 col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Recipe of the Week</h3>
                      <h4 id="weekly-recipe-title" className="mb-1">
                        Pork Chops Charcutiere
                      </h4>
                      <p className="small text-muted mb-2">30 min • Medium • ★ 4.8</p>
                      <p className="card-text">
                        A quick star-worthy main that balances savory and bright flavors — perfect for weeknight dinners.
                      </p>
                      <div className="d-flex gap-2 mt-2">
                        <a
                          href="./five-course-meal/recipes-html/main-course-recipes.html#pork-chops"
                          className="btn btn-sm btn-success"
                        >
                          View Recipe
                        </a>
                        {/* Save is an action, so use button */}
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6">
              <div className="card h-100 spotlight-card">
                <div className="card-body">
                  <h3 className="card-title">Kitchen Tips & Pantry Checklist</h3>
                  <ul className="tips-list">
                    <li>Use seasonal produce for better flavor and lower cost.</li>
                    <li>Rest meat 5–10 minutes before slicing for juicier results.</li>
                    <li>Keep a simple pantry: olive oil, vinegar, garlic, canned tomatoes, and dried herbs.</li>
                  </ul>
                  <details className="mt-2 nutrition-details">
                    <summary className="summary-btn">Quick Compare (click to open)</summary>
                    <div className="table-responsive">
                      <table className="table table-sm align-middle nutrition-table mb-0">
                        <caption className="visually-hidden">
                          Quick comparison of featured recipes
                        </caption>
                        <colgroup>
                          <col style={{ width: '46%' }} />
                          <col style={{ width: '18%' }} />
                          <col style={{ width: '18%' }} />
                          <col style={{ width: '18%' }} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">Recipe</th>
                            <th scope="col">Prep</th>
                            <th scope="col">Difficulty</th>
                            <th scope="col">Calories</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Pork Chops Charcutiere</th>
                            <td data-label="Prep">30 min</td>
                            <td data-label="Difficulty">Medium</td>
                            <td className="num" data-label="Calories">
                              520 kcal
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Panacotta</th>
                            <td data-label="Prep">2 hr</td>
                            <td data-label="Difficulty">Medium</td>
                            <td className="num" data-label="Calories">
                              350 kcal
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Provino Salad</th>
                            <td data-label="Prep">10 min</td>
                            <td data-label="Difficulty">Easy</td>
                            <td className="num" data-label="Calories">
                              210 kcal
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </details>
                  <p className="small text-muted mt-3 mb-0">
                    Want more? Use the search above or subscribe to get weekly recipes in your inbox.
                  </p>
                  <div className="spotlight-cta">
                    <a href="#site-search" className="btn-ghost">
                      Get the checklist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="main-footer">
          <h1 className="footer-title">Socials</h1>
          <div className="socials-logo">
            <a href="https://github.com/Dendroculus/Food-Recipe-Website">
              <img className="img-fluid" src="/assets/logo/Github.png" alt="Github" />
            </a>
            <a href="https://www.instagram.com/">
              <img className="img-fluid" src="/assets/logo/Instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/">
              <img className="img-fluid Facebook" src="/assets/logo/Facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/">
              <img className="img-fluid" src="/assets/logo/X.png" alt="X" />
            </a>
            <a href="https://www.linkedin.com/">
              <img className="img-fluid" src="/assets/logo/LinkedIn.jpg" alt="LinkedIn" />
            </a>
          </div>
          <nav className="footer-policy-links">
            <a href="#terms-modal">Terms of Use</a>
            <a href="#privacy-modal">Privacy Policy</a>
            <a href="#cookies-modal">Cookies</a>
            <a href="#disclaimer-modal">Disclaimer</a>
          </nav>
          <p className="footer-note">© 2024 Celestial. All rights reserved.</p>
        </footer>

        {/* Modals (unchanged structurally, still use anchors for hash-target behavior) */}
        <div id="terms-modal" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">
              ×
            </a>
            <h2>Terms of Use</h2>
            <p>
              This project is created for educational purposes only. All content, images, and code included are for study and
              demonstration.
            </p>
            <p>
              Images used in this project are sourced randomly for learning purposes and are not intended for redistribution or
              commercial use.
            </p>
            <p>
              The code is released under the MIT License. You are free to study, modify, and use it for personal learning or
              academic projects.
            </p>
          </div>
        </div>

        <div id="privacy-modal" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">
              ×
            </a>
            <h2>Privacy Policy</h2>
            <p>
              No personal data is collected in this project. Any email inputs (e.g., in forms) are purely for demonstration and
              do not send or store real data.
            </p>
            <p>This project is meant only to show functionality and interface design for learning purposes.</p>
          </div>
        </div>

        <div id="cookies-modal" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">
              ×
            </a>
            <h2>Cookies</h2>
            <p>
              This project does not use cookies. Any references to cookies are for interface demonstration purposes only.
            </p>
            <button className="accept btn">ACCEPT ALL</button>
            <button className="reject btn">REJECT ALL</button>
            <a href="#customize-modal" className="customize btn">
              CUSTOMIZE COOKIES
            </a>
          </div>
        </div>

        <div id="customize-modal" className="modal">
          <div className="modal-content cookie-modal">
            <a href="#!" className="close" aria-label="Close">
              ×
            </a>

            <header className="cookie-header">
              <h2>Manage Cookie Preferences</h2>
              <p className="cookie-intro">
                We use cookies and similar technologies to deliver, maintain, and improve our services, and to provide a personalised
                web experience. You can review how this information is used and customise your preferences below. You may change
                your choices at any time as described in our <a href="#privacy-modal">Privacy Policy</a>.
              </p>
              <nav className="cookie-actions-top">
                <a href="#!" className="ghost-action">
                  Reject all
                </a>
                <a href="#!" className="ghost-action">
                  Accept all
                </a>
              </nav>
            </header>

            <div className="cookie-body">
              <section className="cookie-group">
                <details open>
                  <summary>
                    <div className="sum-text">
                      <div className="title">Essential cookies</div>
                      <div className="desc">
                        Required for the website to function. This includes security, network management, and accessibility.
                      </div>
                    </div>
                    <span className="badge locked">Required</span>
                  </summary>
                  <ul className="list">
                    <li>Load balancing and session management</li>
                    <li>Fraud prevention and security</li>
                    <li>Basic preferences like language</li>
                  </ul>
                </details>

                <details>
                  <summary>
                    <div className="sum-text">
                      <div className="title">Analytics cookies</div>
                      <div className="desc">Help us understand site usage so we can improve recipes and features.</div>
                    </div>
                    <label className="switch" aria-label="Toggle analytics cookies">
                      <input type="checkbox" />
                      <span className="track"></span>
                      <span className="switch-text" aria-hidden="true"></span>
                    </label>
                  </summary>
                  <ul className="list">
                    <li>Aggregate traffic insights (pages visited, time on page)</li>
                    <li>Error tracking to fix broken pages</li>
                  </ul>
                </details>

                <details>
                  <summary>
                    <div className="sum-text">
                      <div className="title">Preference cookies</div>
                      <div className="desc">Remember your choices like theme, language, or favourite recipes.</div>
                    </div>
                    <label className="switch" aria-label="Toggle preference cookies">
                      <input type="checkbox" defaultChecked />
                      <span className="track"></span>
                      <span className="switch-text" aria-hidden="true"></span>
                    </label>
                  </summary>
                  <ul className="list">
                    <li>Stores display preferences (e.g., dark mode)</li>
                    <li>Keeps items saved to your recipe list</li>
                  </ul>
                </details>

                <details>
                  <summary>
                    <div className="sum-text">
                      <div className="title">Marketing cookies</div>
                      <div className="desc">Used to show you relevant content and offers based on your interests.</div>
                    </div>
                    <label className="switch" aria-label="Toggle marketing cookies">
                      <input type="checkbox" />
                      <span className="track"></span>
                      <span className="switch-text" aria-hidden="true"></span>
                    </label>
                  </summary>
                  <ul className="list">
                    <li>Limits how often you see the same promo</li>
                    <li>Measures campaign performance</li>
                  </ul>
                </details>

                <details>
                  <summary>
                    <div className="sum-text">
                      <div className="title">
                        Precise geolocation data, and identification through device scanning
                      </div>
                      <div className="desc">
                        Allow us to use accurate location and device signals to deliver localised content.
                      </div>
                    </div>
                    <label className="switch" aria-label="Toggle precise geolocation">
                      <input type="checkbox" />
                      <span className="track"></span>
                      <span className="switch-text" aria-hidden="true"></span>
                    </label>
                  </summary>
                  <ul className="list">
                    <li>Use exact location to tailor nearby seasonal ingredients</li>
                    <li>Identify device characteristics for fraud prevention</li>
                  </ul>
                </details>
              </section>

              <a href="#!" className="partners-link">
                Partners
              </a>
            </div>

            <footer className="cookie-footer">
              <small className="legal">
                You can update your choices at any time. See our <a href="#privacy-modal">Privacy Policy</a> and{' '}
                <a href="#cookies-modal">Cookies</a>.
              </small>
              <a href="#!" className="btn-cta">
                Save &amp; Exit
              </a>
            </footer>
          </div>
        </div>

        <div id="disclaimer-modal" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">
              ×
            </a>
            <h2>Disclaimer</h2>
            <p>
              This website and its cookie settings are for educational purposes only as part of a school project. No actual data is
              collected or stored.
            </p>
            <p>
              Some images used in this project are sourced from Google Images and are for educational and demonstration purposes only.
              All rights belong to their respective owners
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;