import React from "react";
import "../feature.css";
import helmet from "../images/helmet.png";
import secure from "../images/credit-card.png";
import dealer from "../images/drug-dealer.png";
import moneyback from "../images/moneyback.jpg";

export const Specification = ({ image, heading, description }) => {
  return (
    <div>
      <div id="specification">
        <div className="flexx">
          <div className="features">
            <div className="image-container">
              <img src={helmet} alt="Helmet" />
            </div>
            <div className="heading">
              <h3>Free Helmet</h3>
            </div>
            <div className="description">
              <h5>Helmet Available for Your Safety</h5>
            </div>
          </div>


          <div className="features">
            <div className="image-container">
              <img src={secure} alt="Helmet" />
            </div>
            <div className="heading">
              <h3>Secure Payment</h3>
            </div>
            <div className="description">
              <h5>Our Payment Partners are Industry Leaders</h5>
            </div>
          </div>


          <div className="features">
            <div className="image-container">
              <img src={dealer} alt="Helmet" />
            </div>
            <div className="heading">
              <h3>Verified Dealer</h3>
            </div>
            <div className="description">
              <h5>Every Single Dealer is Committed to Quality Service.</h5>
            </div>
          </div>


          <div className="features">
            <div className="image-container">
              <img src={moneyback} alt="Helmet" />
            </div>
            <div className="heading">
              <h3>100% Moneyback</h3>
            </div>
            <div className="description">
              <h5>Not Happy With Service, Take Your Money Back.</h5>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
