import React from "react";
import "./advice.css";
const Advice = () => {
  return (
    <div className="advice">
      <div className="advice-bg-top"></div>
      <div className="advice-main">
        <div className="advice-main-top-bg"></div>
        <div className="advice-container">
          <div className="advice-name">
            <h1>
              Things To Do on Your Trip <br />
              To San Francisco
            </h1>
          </div>
          <div className="advice-boxes">
            <div className="advice-boxes-item ad-box-1">
              <a href="#">Drive Across the Golden Gate Bridge</a>
              <p>
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus. Donec
                rutrum congue leo eget malesuada.
              </p>
            </div>
            {/*  */}
            <div className="advice-boxes-item ad-box-2">
              <a href="#">Drive Across the Golden Gate Bridge</a>
              <p>
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus. Donec
                rutrum congue leo eget malesuada.
              </p>
            </div>
          </div>
          <div className="advice-btn">
            <button type="button">MORE ABOUT SAN FRANCISCO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advice;
