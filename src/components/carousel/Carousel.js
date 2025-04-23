import React, { useState, useEffect, Children, cloneElement } from "react";
import "./Carousel.css";
import shape from "../../assets/global/shape-1.png";
import homeIcon from "../../assets/global/HomeIcon.png";
import stick from "../../assets/global/Stick.png";

const PAGE_WIDTH = 1024;
const MAX_OVERSCROLL = 30;

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {});
      })
    );
  }, [children]);

  const handleStart = (clientX) => {
    if (isDraggingScrollbar) return;
    setIsDragging(true);
    setStartX(clientX);

    const slider = document.querySelector(".all-pages-container");
    if (slider) {
      slider.style.transition = "none";
    }
  };

  const handleMove = (clientX) => {
    if (!isDragging || isDraggingScrollbar) return; 

    const deltaX = clientX - startX;
    const totalPages = pages.length;
    const maxOffset = -(totalPages - 1) * PAGE_WIDTH;

    let newOffset = offset + deltaX;

    if (newOffset > 0) {
      newOffset = Math.min(newOffset, MAX_OVERSCROLL);
    }

    if (newOffset < maxOffset) {
      newOffset = Math.max(newOffset, maxOffset - MAX_OVERSCROLL);
    }

    setOffset(newOffset);
    setStartX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const totalPages = pages.length;
    const maxOffset = -(totalPages - 1) * PAGE_WIDTH;

    let newOffset = offset;

    if (offset > 0) {
      newOffset = 0;
    } else if (offset < maxOffset) {
      newOffset = maxOffset;
    } else {
      const pageIndex = Math.round(-offset / PAGE_WIDTH);
      newOffset = -pageIndex * PAGE_WIDTH;
    }

    const slider = document.querySelector(".all-pages-container");
    if (slider) {
      slider.style.transition = "transform 0.3s ease-in-out";
    }

    setOffset(newOffset);
  };

  const handleHomeIconClick = () => {
    setOffset(0);

    const slider = document.querySelector(".all-pages-container");
    if (slider) {
      slider.style.transition = "transform 0.3s ease-in-out";
    }
  };

  const goToNextSlide = () => {
    const totalPages = pages.length;
    const maxOffset = -(totalPages - 1) * PAGE_WIDTH;

    let newOffset = offset - PAGE_WIDTH;

    if (newOffset < maxOffset) {
      newOffset = 0;
    }

    setOffset(newOffset);
  };


  return (
    <div className="main-container">
      <div className="window">
        <img
          src={homeIcon}
          className="homeIcon"
          onClick={handleHomeIconClick}
        ></img>
        <img src={stick} className="stick"></img>
        <p className="projectTitle">PROJECT</p>
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          {React.Children.map(pages, (page, index) =>
            React.cloneElement(page, {
              isActive: Math.abs(Math.round(offset / PAGE_WIDTH)) === index,
              goToNextSlide,
              setIsDraggingScrollbar,
            })
          )}
        </div>

        <img src={shape} className="Shape_1"></img>
      </div>
    </div>
  );
};