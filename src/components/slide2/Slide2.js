import React, { useRef, useEffect, useState } from "react";
import "../../App.css";
import "./Slide2.css";
import btnScrll from "../../assets/slide2/btnScrll.png";
import rectangle1 from "../../assets/slide2/Rectangle1.png";
import L3C6 from "../../assets/slide2/Layer3copy6.png";
import L3C5 from "../../assets/slide2/Layer3copy5.png";

export default function Slide2({ setIsDraggingScrollbar, isActive }) {
  const textContainerRef = useRef(null);
  const thumbRef = useRef(null);
  const trackRef = useRef(null);

  const [thumbPosition, setThumbPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSpermAnimation, setIsSpermAnimation] = useState(false);

  const handleScroll = () => {
    if (!textContainerRef.current || !trackRef.current || !thumbRef.current)
      return;

    const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current;
    const trackHeight = trackRef.current.clientHeight;
    const thumbHeight = thumbRef.current.clientHeight;

    const maxScroll = scrollHeight - clientHeight;
    const maxThumbOffset = trackHeight - thumbHeight;

    const newThumbPosition = (scrollTop / maxScroll) * maxThumbOffset;
    setThumbPosition(newThumbPosition);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    setIsDraggingScrollbar(true); // Уведомляем родителя о начале перетаскивания
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current || !textContainerRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const offsetY = e.clientY - trackRect.top;
    const trackHeight = trackRef.current.clientHeight;
    const thumbHeight = thumbRef.current.clientHeight;

    const maxThumbOffset = trackHeight - thumbHeight;
    const thumbPosition = Math.min(Math.max(0, offsetY), maxThumbOffset);

    setThumbPosition(thumbPosition);

    const scrollPercent = thumbPosition / maxThumbOffset;
    const maxScroll =
      textContainerRef.current.scrollHeight -
      textContainerRef.current.clientHeight;
    textContainerRef.current.scrollTop = scrollPercent * maxScroll;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsDraggingScrollbar(false); // Уведомляем родителя о завершении перетаскивания
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const textContainer = textContainerRef.current;

    if (textContainer) {
      textContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (textContainer) {
        textContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      console.log("привет");
      setIsSpermAnimation(true);
    } else {
      setIsSpermAnimation(false);
    }
  }, [isActive]);

  return (
    <div className="item item-2">
      <p className="title-Slide2">
        текст <br />
        сообщения
      </p>
      <div className="scroll-container">
        <div className="scroll-track" ref={trackRef}>
          <img src={rectangle1} className="Rectangle_1" draggable="false" />

          <img
            src={btnScrll}
            className="scroll-thumb-image"
            ref={thumbRef}
            style={{ top: `${thumbPosition}px` }}
            onMouseDown={handleMouseDown}
            draggable="false"
          />
        </div>
      </div>
      <div className="scroll-text" ref={textContainerRef}>
        <span className="Lorem-Bold">Lorem ipsum dolor sit amet,</span>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Duis ut diam quam nulla. Mauris in aliquam sem
        fringilla ut morbi tincidunt. Vitae aliquet nec ullamcorper sit amet
        risus nullam eget felis. Nulla pharetra diam sit amet nisl. Eget nulla
        facilisi etiam dignissim diam quis enim lobortis. Est sit amet facilisis
        magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
        ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
        porttitor leo a diam sollicitudin tempor id. Euismod quis viverra nibh
        cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit amet massa
        vitae tortor condimentum lacinia. Et malesuada fames ac turpis egestas
        integer eget. Elementum pulvinar etiam non quam lacus suspendisse
        faucibus interdum posuere.
        <br />
        Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies
        tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper
        morbi tincidunt ornare massa. Quis hendrerit dolor magna eget est lorem
        ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a cras.
        Ut enim blandit volutpat maecenas volutpat. Mauris sit amet massa vitae
        tortor condimentum lacinia quis vel.
      </div>

      <img
        src={L3C6}
        className={`Layer_3_copy_6 ${isSpermAnimation ? "play" : ""}`}
        alt="Animated Image"
        draggable="false"
      />
      <img
        src={L3C6}
        className={`Layer_3_copy_5 ${isSpermAnimation ? "play" : ""}`}
        alt="Animated Image"
        draggable="false"
      />

      <img
        src={L3C6}
        className={`Layer_3_copy_4 ${isSpermAnimation ? "play" : ""}`}
        alt="Animated Image"
        draggable="false"
      />

      <img
        src={L3C6}
        className={`Layer_3_copy_3 ${isSpermAnimation ? "play" : ""}`}
        alt="Animated Image"
        draggable="false"
      />
    </div>
  );
}
