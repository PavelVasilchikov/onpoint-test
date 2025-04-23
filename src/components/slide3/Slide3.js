import React, { useState } from "react";
import "./Slide3.css";
import "../../App.css";
import bottle from "../../assets/slide3/bottle.png";
import R2C2 from "../../assets/slide3/Rectangle2copy2.png";
import R2C3 from "../../assets/slide3/Rectangle2copy3.png";
import icon1 from "../../assets/slide3/icon1.png";
import icon2 from "../../assets/slide3/icon2.png";
import btn from "../../assets/slide3/btn.png";
import R9 from "../../assets/slide3/Rectangle9.png";
import body from "../../assets/slide3/body.png";
import btn_close from "../../assets/slide3/btn_close.png";
import b1 from "../../assets/slide3/bubbles/1.png";
import b2 from "../../assets/slide3/bubbles/2.png";
import b3 from "../../assets/slide3/bubbles/3.png";
import b4 from "../../assets/slide3/bubbles/4.png";

export default function Slide3() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Faucibus pulvinar elementum integer enim",
    "Faucibus pulvinar elementum integer enim",
    "Quisque vel eros a diam pharetra ultricies",
    "Nulla facilisi. Nullam euismod, nisl eget luctus tincidunt",
    "Sed id dui ut odio mollis eleifend",
  ];

  const maxItemsPerPage = 3;

  const totalPages = Math.ceil(items.length / maxItemsPerPage);

  const handleNext = () => {
    if (activeIndex + maxItemsPerPage < items.length) {
      setActiveIndex(activeIndex + maxItemsPerPage);
    }
  };

  const handlePrev = () => {
    if (activeIndex >= maxItemsPerPage) {
      setActiveIndex(activeIndex - maxItemsPerPage);
    }
  };

  const handleDotClick = (page) => {
    setActiveIndex(page * maxItemsPerPage);
  };

  return (
    <div className="item item-3">
      {!isDetailsVisible && (
        <>
          <img src={b1} className="b1" draggable="false" alt="B1" />
          <img src={b2} className="b2" draggable="false" alt="B2" />
          <img src={b3} className="b3" draggable="false" alt="B3" />
          <img src={b4} className="b4" draggable="false" alt="B4" />

          <img src={bottle} className="bottle" draggable="false" alt="Bottle" />
          <p className="key-message">ключевое сообщение</p>
          <p className="brend">
            brend<span className="brend-bold">xy</span>
          </p>
          <img src={R2C2} className="box-1" alt="Box 1" />
          <img src={R2C3} className="box-2" alt="Box 2" />
          <img src={icon1} className="icon1" alt="Icon 1" />
          <img src={icon2} className="icon2" alt="Icon 2" />
          <p className="box-2-text">A arcu cursus vitae</p>
          <p className="box-1-text">
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </p>
          <img
            src={btn}
            className="button"
            onClick={() => setIsDetailsVisible(true)}
            alt="Подробнее"
          />
        </>
      )}

      {isDetailsVisible && (
        <div className="item item-3">
          <img src={b1} className="b1" draggable="false" alt="B1" />
          <img src={b2} className="b2" draggable="false" alt="B2" />
          <img src={b3} className="b3" draggable="false" alt="B3" />
          <img src={b4} className="b4" draggable="false" alt="B4" />
          <img src={R9} className="R-9" draggable="false" />
          <img src={body} className="body" />
          <img src={bottle} className="bottle" draggable="false" alt="Bottle" />
          <img
            src={btn_close}
            className="btn_close"
            onClick={() => setIsDetailsVisible(false)}
          />
          <p className="key-message">ключевое сообщение</p>
          <p className="brend">
            brend<span className="brend-bold">xy</span>
          </p>

          <ul className="list-text">
            {items
              .slice(activeIndex, activeIndex + maxItemsPerPage)
              .map((item, index) => (
                <li key={index}>
                  <span className="list-text-bold">{`0${
                    activeIndex + index + 1
                  }.`}</span>
                  <br />
                  {item}
                </li>
              ))}
          </ul>

          <div className="navigation">
            <button
              className="nav-button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              &lt;
            </button>
            <div className="dots">
              {[...Array(totalPages)].map((_, page) => (
                <span
                  key={page}
                  className={`dot ${
                    page === Math.floor(activeIndex / maxItemsPerPage)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleDotClick(page)}
                ></span>
              ))}
            </div>
            <button
              className="nav-button"
              onClick={handleNext}
              disabled={activeIndex + maxItemsPerPage >= items.length}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
