import "./App.css";
import { Carousel } from "./components/carousel/Carousel.js";
import Slide1 from "./components/slide1/Slide1.js";
import Slide2 from "./components/slide2/Slide2.js";
import Slide3 from "./components/slide3/Slide3.js";

export default function App() {
  return (
    <Carousel>
      <Slide1/>
      <Slide2/>
      <Slide3/>
    </Carousel>
  );
}

