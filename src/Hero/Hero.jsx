import React from "react";
import "./hero.css";
import { BsBookmarkFill } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-top-left">
          Rental Cars From <br /> Just $25/Day
        </div>
        <div className="hero-top-right">
          <div className="hero-top-right-left">
            <BsBookmarkFill className="hero-icon" />
          </div>
          <div className="hero-top-right-right">
            <h3>15% Off</h3>
            <p>
              First Time <br /> Reservations
            </p>
            <button type="button" className="bg-trans">
              REDEEM
            </button>
          </div>
        </div>
      </div>
      <div className="hero-bot">
        <div className="hero-bot-left">
          <form action="#">
            <select name="languages" id="lang">
              <option value="javascript">JavaScript</option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
              <option value="C++">C++</option>
              <option value="erlang">Erlang</option>
            </select>
          </form>
          <input
            type="text"
            placeholder="Pick Up Location"
            className="inp-location"
          />
          <div className="input-pickup">
            <input type="text" placeholder="Pick Up Date" />
            <input type="text" placeholder="Pick Up Time" />
          </div>
          <div className="input-dropoff">
            <input type="text" placeholder="Drop Off Date" />
            <input type="text" placeholder="Drop Off Time" />
          </div>

          <div className="input-btn">
            <button
              type="
          button"
            >
              REQUEST NOW
            </button>
          </div>
        </div>
        <div className="hero-bot-right">
          <img
            src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/Car-Rental-Image-25.png"
            alt=""
          />
        </div>
      </div>
      <div className="hero-bot-bcg"></div>
    </div>
  );
};

export default Hero;
