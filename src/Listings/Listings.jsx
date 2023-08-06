import React from "react";
import "./listings.css";
import { useRef, useEffect } from "react";
import { FaKey } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
const Listings = () => {
  const btn1 = useRef("");
  const btn2 = useRef("");
  const btn3 = useRef("");

  const ls1 = useRef("");
  const ls2 = useRef("");
  const ls3 = useRef("");

  const row1 = useRef("");
  const row2 = useRef("");
  const row3 = useRef("");
  //   ls-row-4
  useEffect(() => {
    btn1.current = document.querySelectorAll(".ls-butn")[0];
    btn2.current = document.querySelectorAll(".ls-butn")[1];
    btn3.current = document.querySelectorAll(".ls-butn")[2];

    ls1.current = document.querySelectorAll(".listings-item")[0];
    ls2.current = document.querySelectorAll(".listings-item")[1];
    ls3.current = document.querySelectorAll(".listings-item")[2];

    row1.current = document.querySelectorAll(".ls-row-4")[0];
    row2.current = document.querySelectorAll(".ls-row-4")[1];
    row3.current = document.querySelectorAll(".ls-row-4")[2];

    btn1.current.addEventListener("click", () => {
      row1.current.classList.toggle("height-300");
    });

    btn2.current.addEventListener("click", () => {
      row2.current.classList.toggle("height-300");
    });

    btn3.current.addEventListener("click", () => {
      row3.current.classList.toggle("height-300");
    });
  });

  return (
    <div className="listings">
      <div className="listings-container">
        <div className="listings-main">
          <div className="listings-item">
            <div className="ls-row-1">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/Car-Rental-Image-26.jpg"
                alt=""
              />
            </div>
            <div className="ls-row-2">
              <h3>Divi Lead VB</h3>
              <p>Starting $44/day</p>
            </div>
            <div className="ls-row-3">
              <ul>
                <li>
                  <span>
                    <FaKey className="color" />
                  </span>
                  <span>Vehicle Type: Sedan</span>
                </li>

                <li>
                  <span>
                    {" "}
                    <BsPeople className="color" />
                  </span>
                  <span>4 Doors, 5 Seats</span>
                </li>

                <li>
                  <span>
                    <CiSettings className="color" />
                  </span>
                  <span>Transmission: Automatic</span>
                </li>
              </ul>
            </div>
            <div className="ls-row-4">
              <div className="ls-row-4-top">
                <p>More Details</p>
                <span className="ls-butn">&rarr;</span>
              </div>
              <div className="ls-row-4-bot">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  facilis dicta eum mollitia corporis unde nesciunt accusantium,
                  sit assumenda doloribus placeat, doloremque adipisci cumque
                </p>
              </div>
            </div>
            <div className="ls-button-box">
              <button type="button">RESERVE NOW</button>
            </div>
          </div>
          {/*  */}
          <div className="listings-item">
            <div className="ls-row-1">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/Car-Rental-Image-27.jpg"
                alt=""
              />
            </div>
            <div className="ls-row-2">
              <h3>Monarch Sport</h3>
              <p>Starting $44/day</p>
            </div>
            <div className="ls-row-3">
              <ul>
                <li>
                  <span>
                    <FaKey className="color" />
                  </span>
                  <span>Vehicle Type: SUV</span>
                </li>

                <li>
                  <span>
                    {" "}
                    <BsPeople className="color" />
                  </span>
                  <span>4 Doors, 7 Seats</span>
                </li>

                <li>
                  <span>
                    <CiSettings className="color" />
                  </span>
                  <span>Transmission: Automatic</span>
                </li>
              </ul>
            </div>
            <div className="ls-row-4">
              <div className="ls-row-4-top">
                <p>More Details</p>
                <span className="ls-butn">&rarr;</span>
              </div>
              <div className="ls-row-4-bot">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  facilis dicta eum mollitia corporis unde nesciunt accusantium,
                  sit assumenda doloribus placeat, doloremque adipisci cumque
                </p>
              </div>
            </div>
            <div className="ls-button-box">
              <button type="button">RESERVE NOW</button>
            </div>
          </div>
          {/*  */}
          <div className="listings-item">
            <div className="ls-row-1">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/Car-Rental-Image-28.jpg"
                alt=""
              />
            </div>
            <div className="ls-row-2">
              <h3>Nexus Passenger</h3>
              <p>Starting $44/day</p>
            </div>
            <div className="ls-row-3">
              <ul>
                <li>
                  <span>
                    <FaKey className="color" />
                  </span>
                  <span>Vehicle Type: Van</span>
                </li>

                <li>
                  <span>
                    {" "}
                    <BsPeople className="color" />
                  </span>
                  <span>4 Doors, 8 Seats</span>
                </li>

                <li>
                  <span>
                    <CiSettings className="color" />
                  </span>
                  <span>Transmission: Automatic</span>
                </li>
              </ul>
            </div>
            <div className="ls-row-4">
              <div className="ls-row-4-top">
                <p>More Details</p>
                <span className="ls-butn">&rarr;</span>
              </div>
              <div className="ls-row-4-bot">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  facilis dicta eum mollitia corporis unde nesciunt accusantium,
                  sit assumenda doloribus placeat, doloremque adipisci cumque
                </p>
              </div>
            </div>
            <div className="ls-button-box">
              <button type="button">RESERVE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
