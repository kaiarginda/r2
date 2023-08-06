import React from "react";
import "./details.css";
import { AiFillCheckCircle } from "react-icons/ai";
const Details = () => {
  return (
    <div className="details">
      <div className="details-bg-top"></div>
      <div className="details-name">
        <h1>Satisfaction Guaranteed</h1>
      </div>
      <div className="details-main">
        <div className="details-row">
          <div className="details-item">
            <AiFillCheckCircle />{" "}
            <p>Curabitur arcu erat, accumsan id imperdiet et</p>
          </div>
          <div className="details-item">
            <AiFillCheckCircle />{" "}
            <p>Curabitur arcu erat, accumsan id imperdiet et</p>
          </div>
          <div className="details-item">
            <AiFillCheckCircle />{" "}
            <p>Curabitur arcu erat, accumsan id imperdiet et</p>
          </div>
        </div>
        <div className="details-row">
          <div className="details-item">
            <AiFillCheckCircle />{" "}
            <p>Curabitur arcu erat, accumsan id imperdiet et</p>
          </div>
          <div className="details-item">
            <AiFillCheckCircle />{" "}
            <p>Curabitur arcu erat, accumsan id imperdiet et</p>
          </div>
          <div className="details-item">
            <AiFillCheckCircle />{" "}
            <p>Curabitur arcu erat, accumsan id imperdiet et</p>
          </div>
        </div>
      </div>
      <div className="details-btn">
        <button type="button">RESERVE CALL</button>
      </div>
      <div className="details-bg-bot"></div>
    </div>
  );
};

export default Details;
