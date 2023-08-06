import React from "react";
import "./card.css";
import { BsFillTelephoneFill } from "react-icons/bs";
const Card = () => {
  return (
    <div className="card">
      <div className="card-cont">
        <div className="card-name">
          Renting A Car Has Never <br /> Been Easier
        </div>
        <div className="card-row">
          <div className="card-item">
            <BsFillTelephoneFill className="card-item-icon" />
            <h3>Reserve by Phone</h3>
            <p>Call Us 24/7</p>
            <button type="button">+1 (234) 596-7439</button>
          </div>
          {/*  */}
          <div className="card-item">
            <BsFillTelephoneFill className="card-item-icon" />
            <h3>Reserve by Phone</h3>
            <p>Call Us 24/7</p>
            <button type="button">+1 (234) 596-7439</button>
          </div>
          {/*  */}
          <div className="card-item">
            <BsFillTelephoneFill className="card-item-icon" />
            <h3>Reserve by Phone</h3>
            <p>Call Us 24/7</p>
            <button type="button">+1 (234) 596-7439</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
