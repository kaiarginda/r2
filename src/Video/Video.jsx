import React from "react";

import { useEffect, useRef } from "react";
import "./video.css";
const Video = () => {
  const count = useRef("");
  const button = useRef("");
  const dropdown = useRef("");

  const count1 = useRef("");
  const button1 = useRef("");
  const dropdown1 = useRef("");

  const count2 = useRef("");
  const button2 = useRef("");
  const dropdown2 = useRef("");

  const count3 = useRef("");
  const button3 = useRef("");
  const dropdown3 = useRef("");
  useEffect(() => {
    button.current = document.querySelectorAll(".d-btn")[0];
    dropdown.current = document.querySelectorAll(".dropdown-item")[0];
    count.current = false;
    button.current.addEventListener("click", () => {
      count.current = !count.current;
      if (count.current) {
        dropdown.current.classList.add("h-1");
      } else {
        dropdown.current.classList.remove("h-1");
      }
    });

    //

    button1.current = document.querySelectorAll(".d-btn")[1];
    dropdown1.current = document.querySelectorAll(".dropdown-item")[1];
    count1.current = false;
    button1.current.addEventListener("click", () => {
      count1.current = !count1.current;
      if (count1.current) {
        dropdown1.current.classList.add("h-1");
      } else {
        dropdown1.current.classList.remove("h-1");
      }
    });

    //

    button2.current = document.querySelectorAll(".d-btn")[2];
    dropdown2.current = document.querySelectorAll(".dropdown-item")[2];
    count2.current = false;
    button2.current.addEventListener("click", () => {
      count2.current = !count2.current;
      if (count2.current) {
        dropdown2.current.classList.add("h-1");
      } else {
        dropdown2.current.classList.remove("h-1");
      }
    });

    //

    button3.current = document.querySelectorAll(".d-btn")[3];
    dropdown3.current = document.querySelectorAll(".dropdown-item")[3];
    count3.current = false;
    button3.current.addEventListener("click", () => {
      count3.current = !count3.current;
      if (count3.current) {
        dropdown3.current.classList.add("h-1");
      } else {
        dropdown3.current.classList.remove("h-1");
      }
    });
  });

  return (
    <div className="video">
      <div className="flex-2">
        <div className="vid-left">
          <div className="v-l-1">
            <h3>Get Into Gear</h3>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula.
            </p>
          </div>

          <div className="v-l-2">
            <iframe
              width="700"
              height="608"
              src="https://www.youtube.com/embed/FkQuawiGWUw"
              title="Divi. The Ultimate WordPress Theme And Visual Page Builder"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="v-l-3">
            <div className="v-l-3-l">
              <h4>We Got You Covered with Roadside Assistance</h4>
              <p>
                Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices
              </p>
            </div>
            <div className="v-l-3-r">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/car_repair_shop-05.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="vid-right">
          <ul>
            <li>
              <div className="v-r-icon">
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
              </div>
              <div className="v-r-content">
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
                <h5>Jone Doe</h5>
              </div>
            </li>

            {/*  */}

            <li>
              <div className="v-r-icon">
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
              </div>
              <div className="v-r-content">
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
                <h5>Jone Doe</h5>
              </div>
            </li>

            {/*  */}

            <li>
              <div className="v-r-icon">
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
                <div className="v-r-icon-i">⭐</div>
              </div>
              <div className="v-r-content">
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
                <h5>Jone Doe</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="dropdown-anime">
        <div className="dropdown-main">
          <div className="dropdown-item">
            <div className="dropdown-item-top">
              <h4>Praesent sapien massa convallis a pellentesque?</h4>
              <p className="d-btn">&rarr;</p>
            </div>
            <div className="dropdown-item-bot">
              <p>
                Your content goes here. Edit or remove this text inline or in
                the module Content settings. You can also style every aspect of
                this content in the module Design settings and even apply custom
                CSS to this text in the module Advanced settings
              </p>
            </div>
          </div>
          <div className="dropdown--bg"></div>

          <div className="dropdown-item">
            <div className="dropdown-item-top">
              <h4>Praesent sapien massa convallis a pellentesque?</h4>
              <p className="d-btn">&rarr;</p>
            </div>
            <div className="dropdown-item-bot">
              <p>
                Your content goes here. Edit or remove this text inline or in
                the module Content settings. You can also style every aspect of
                this content in the module Design settings and even apply custom
                CSS to this text in the module Advanced settings
              </p>
            </div>
          </div>
          <div className="dropdown--bg"></div>

          <div className="dropdown-item">
            <div className="dropdown-item-top">
              <h4>Praesent sapien massa convallis a pellentesque?</h4>
              <p className="d-btn">&rarr;</p>
            </div>
            <div className="dropdown-item-bot">
              <p>
                Your content goes here. Edit or remove this text inline or in
                the module Content settings. You can also style every aspect of
                this content in the module Design settings and even apply custom
                CSS to this text in the module Advanced settings
              </p>
            </div>
          </div>
          <div className="dropdown--bg"></div>

          <div className="dropdown-item">
            <div className="dropdown-item-top">
              <h4>Praesent sapien massa convallis a pellentesque?</h4>
              <p className="d-btn">&rarr;</p>
            </div>
            <div className="dropdown-item-bot">
              <p>
                Your content goes here. Edit or remove this text inline or in
                the module Content settings. You can also style every aspect of
                this content in the module Design settings and even apply custom
                CSS to this text in the module Advanced settings
              </p>
            </div>
          </div>
          <div className="dropdown--bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Video;
/* 


<iframe width="853" height="480" src="https://www.youtube.com/embed/bzBRhzCdbNM" title="პირველად ვამზადებთ ბლინებს ერთობლივად, რა გამოგვივიდა?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



*/
