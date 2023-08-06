import React from "react";
import "./services.css";
import { HiKey } from "react-icons/hi";

const Services = () => {
  return (
    <div className="services">
      <div className="services-bg-top"></div>
      <div className="services-container">
        <div className="services-item">
          <div className="se-i-icon">
            {" "}
            <HiKey />
          </div>
          <div className="se-i-text">
            <h2>The Lowest Rates</h2>
            <p>
              Nulla quis lorem ut libero malesuada feugiat. Arcu erat, accumsan
              id imperdiet et, porttitor
            </p>
          </div>
        </div>
        {/*  */}
        <div className="services-item">
          <div className="se-i-icon">
            <HiKey />
          </div>
          <div className="se-i-text">
            <h2>Unlimited Gas & Miles</h2>
            <p>
              Nulla quis lorem ut libero malesuada feugiat. Arcu erat, accumsan
              id imperdiet et, porttitor
            </p>
          </div>
        </div>
        <div className="services-item">
          <div className="se-i-icon">
            {" "}
            <HiKey />
          </div>
          <div className="se-i-text">
            <h2>24/7 Access</h2>
            <p>
              Nulla quis lorem ut libero malesuada feugiat. Arcu erat, accumsan
              id imperdiet et, porttitor
            </p>
          </div>
        </div>{" "}
        <div className="services-item">
          <div className="se-i-icon">
            {" "}
            <HiKey />
          </div>
          <div className="se-i-text">
            <h2>Multiple Drop-Off Locations</h2>
            <p>
              Nulla quis lorem ut libero malesuada feugiat. Arcu erat, accumsan
              id imperdiet et, porttitor
            </p>
          </div>
        </div>
      </div>
      <div className="services-bg-bot"></div>
    </div>
  );
};

export default Services;
