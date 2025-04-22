import React from "react";
import "./Slide1.css";
import "../../App.css";
import buttonImg from "../../assets/slide1/Button.png";
import spike from "../../assets/slide1/Layer8.png";
import bakti from "../../assets/slide1/Layer7.png";
import L4C2 from "../../assets/slide1/Layer4copy2.png";
import L4C from "../../assets/slide1/Layer4copy.png";
import pink_sperm from "../../assets/slide1/pink_sperm.png";
import pink_sperm_1 from "../../assets/slide1/pink_sperm_1.png";
import bakti_1 from "../../assets/slide1/bakti_1.png";
import L4 from "../../assets/slide1/Layer4.png";
import L5 from "../../assets/slide1/Layer5.png";

export default function Slide1({ goToNextSlide }) {
  return (
    <div className="item item-1">
      <p className="helo_txt">ПРИВЕТ,</p>
      <p className="title">
        ЭТО <span className="title_HE">не</span>
        <br /> коммерческое
        <br /> задание{" "}
        <img
          src={buttonImg}
          className="buttonNext animated-button"
          draggable="false"
          onClick={goToNextSlide}
        ></img>
      </p>
      <img src={spike} className="Layer_8" draggable="false"></img>
      <img src={bakti} className="Layer_7" draggable="false"></img>
      <img src={L4C2} className="Layer_4_copy_2" draggable="false"></img>
      <img src={L4C} className="Layer_4_copy" draggable="false"></img>
      <img src={pink_sperm} className="pink_sperm" draggable="false"></img>
      <img src={bakti_1} className="bakti_1" draggable="false"></img>
      <img src={L4} className="Layer_4" draggable="false"></img>
      <img src={pink_sperm_1} className="pink_sperm_1" draggable="false"></img>
      <img src={L5} className="Layer_5" draggable="false"></img>
    </div>
  );
}
