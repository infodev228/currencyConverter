import React from "react";
import "./style.css";

export default function Financing() {
  return (
    <>
      <div className="container">
        <div className="heading-wrapper">
          <h1>Affordable Financing for Your Boat or Off-Road Vehicle</h1>
          <div className="financing-options">
            <div className="finance-tile" tabIndex={0} role="button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a332311db90b1acc1b25058659649daabd4d1fd823747355ebac92e8d2ae5e"
                className="finance-icon"
                alt="Credit Application Icon"
              />
              <div className="finance-label">Credit Application</div>
            </div>
            <div className="calculator-tile" role="button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d609722dcaf730032d63c3044297e462751f0988aa3d591653ef9e8c443ddf"
                className="calculator-icon"
                alt="Loan Calculator Icon"
              />
              <div className="calculator-label">Loan Calculator</div>
            </div>
            <div className="offers-tile" role="button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea694c555e3ead06763e05130de7344a3db23e7576419e65c16218038193661"
                className="offers-icon"
                alt="Financing Offers Icon"
              />
              <div className="offers-label">Financing Offers</div>
            </div>
            <div className="coverage-tile" role="button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/593117b13aeec42b2c1e72e9b6df8567b92c7fb210cf1c0b771d7e6df730e0ad"
                className="coverage-icon"
                alt="Insurance Coverage Icon"
              />
              <div className="coverage-label">Get Covered</div>
            </div>
          </div>
        </div>
        {/* financing section */}
        <section className="financing-steps">
          <div className="content-title">
            <div className="title-wrapper">
              <h1 id="financing-title" className="main-title">
                EASY FINANCING —FROM START TO FINISH
              </h1>
              <p className="subtitle">How it works</p>
            </div>
          </div>
          <div className="steps-container">
            <article className="step-item">
              <span className="step-number" aria-label="Step 1">
                1
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6977f4462847fae4f1837de3512054c7d5e08d45e61fd2a24f1d32c47d364e?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                alt="Online application icon"
                width="78"
                height="78"
                loading="lazy"
              />
              <div className="step-content">
                <h2 className="step-title">Online Credit Application</h2>
                <p className="step-description">
                  Click the "<span className="highlight">Apply Now</span>"
                  button to fill out the online credit application or call us at{" "}
                  <a href="tel:8888851003" className="phone-link">
                    888.885.1003
                  </a>{" "}
                  to speak to an online sales team member.
                </p>
              </div>
            </article>

            <article className="step-item">
              <span className="step-number">2</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f19820b976e9e2c2479ddab36893cb939ca13f253e233556269b1718103ff5cf?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                alt="Budget options icon"
                width="78"
                height="78"
                loading="lazy"
              />

              <div className="step-content">
                <h2 className="step-title">Online Credit APplication</h2>
                <p className="step-description">
                  Click the “Apply Now” button to fill out the online credit
                  application or call us at 888.885.1003 to speak to an online
                  sales team member.
                </p>
              </div>
            </article>
            <article className="step-item">
              <span className="step-number">3</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aea957dbee9e5912326a5a0462818f5827979ef1b67cc449cce05951649f143b?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                alt="Vehicle selection icon"
                width="78"
                height="78"
                loading="lazy"
              />

              <div className="step-content">
                <h2 className="step-title">Online Credit APplication</h2>
                <p className="step-description">
                  Click the “Apply Now” button to fill out the online credit
                  application or call us at 888.885.1003 to speak to an online
                  sales team member.
                </p>
              </div>
            </article>
            <article className="step-item">
              <span className="step-number">4</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a03b90e5483fea0958ac74b00034bfe6576def75e13b202c43fc9b43460f7ef0?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                alt="Pickup icon"
                width="78"
                height="78"
                loading="lazy"
              />

              <div className="step-content">
                <h2 className="step-title">Online Credit APplication</h2>
                <p className="step-description">
                  Click the “Apply Now” button to fill out the online credit
                  application or call us at 888.885.1003 to speak to an online
                  sales team member.
                </p>
              </div>
            </article>
          </div>
          <div className="cta-container">
            <a
              href="/apply"
              className="apply-button"
              aria-label="Apply now for financing"
            >
              Apply Now
            </a>
          </div>
        </section>
        <div className="financing-carousel">
          <div className="section-header">
            <div className="header-wrapper">
              <h2 className="section-title">financing offers & other deals</h2>
            </div>
          </div>
          <div className="carousel-container">
            <div className="card-grid">
              <article className="offer-card">
                <div className="card-image-wrapper">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff25038edb40017f0b311cfba48404eb54b5582e0a55279480369c2398387e47?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                    className="card-image"
                    alt="Model Year-End Clearance Sale promotion"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Shop MOdel Year-End Clearance</h3>
                  <p className="card-description">
                    Our biggest savings of the year are happening now during
                    Model Year-End Clearance at Bass Pro Shops & Cabela's
                    Boating Centers! Shop select 2024 or prior model year boats,
                    atvs, or side by sides for big savings -while supplies last!
                  </p>
                  <div className="card-button-wrapper">
                    <button className="action-button">Shop By Brand</button>
                  </div>
                </div>
              </article>
              <article className="offer-card">
                <div className="card-image-wrapper">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddbb7318955ebf39bb1817e677ba9da7076275a740c0bdcc384695ed6839273?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                    className="card-image"
                    alt="VIP Owner Discount Card benefits"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">VIP Owner Discount Card</h3>
                  <p className="card-description">
                    When you buy any qualifying new boat or off-road vehicle,
                    you'll receive a FREE VIP Owner's Discount Card, which gives
                    you 10% off leading Bass Pro Shops and Cabela's brands–plus
                    10% off many other items–for up to two years! Members of our
                    military receive an additional year of savings.
                  </p>
                  <div className="card-button-wrapper">
                    <button className="action-button">Learn more</button>
                  </div>
                </div>
              </article>
              <article className="offer-card">
                <div className="card-image-wrapper">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddbb7318955ebf39bb1817e677ba9da7076275a740c0bdcc384695ed6839273?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                    className="card-image"
                    alt="Bass Pro Shops CLUB membership benefits"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Join The CLUB Made For You</h3>
                  <p className="card-description">
                    The Bass Pro Shops CLUB card gets you on the fast track to
                    earning free gear. Each purchase earns you points that will
                    help you save on the gear you love the most. Plus, it opens
                    the door to a host of exclusive opportunities only available
                    to CLUB Members.
                  </p>
                  <div className="card-button-wrapper">
                    <button className="action-button">Apply Now</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="adventure-section">
          <img
            src="./FooterLifestyleBanner.png"
            alt=""
            className="background-image"
          />
          <div className="adventure-content-wrapper">
            <h1 className="adventure-title">READY TO START YOUR ADVENTURE?</h1>
            <div className="button-group">
              <button className="primary-button">
                <span className="button-label-primary">explore boats</span>
              </button>
              <button className="secondary-button">
                <span className="button-label-secondary">
                  explore off road vehicles
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Trade value section  */}
        <div className="trade-section">
          <div className="left-column">
            <div className="preview-box"></div>
          </div>
          <div className="right-column">
            <img src="./trade.png" alt="" className="trade-value-img" />
            <div className="trade-content-wrapper">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/14c3d268eddce3b917c08b191253d6bd99eba63e73924c03a5ddbb0768e3798c?placeholderIfAbsent=true&apiKey=3f9c581b15804c2e8e47015b414d9b04"
                alt="Trade-in value icon"
                className="icon"
              />
              <div className="text-content">
                <h2 className="trade-title">value your trade in</h2>
                <p className="trade-description">
                  Yes, we take trades! We offer a simple process for quickly
                  providing you a good faith trade-in value on your current boat
                  and off-road vehicle. Just click the link below and submit
                  photos and information to get started.
                </p>
              </div>
              <div className="button-wrapper">
                <button className="action-button">
                  <span className="button-label">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
