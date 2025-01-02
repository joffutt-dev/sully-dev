import Stretching from "../images/stretching.webp";
import Cone from "../images/sullycone.webp";
import Ball from "../images/ball.webp";
import EyeContact from "../images/eyecontact.webp";
export function SullySlides() {
  return (
    <div className="carousel">
      <div className="carousel-item custom-h">
        <img src={Stretching} alt="sully cute" />
        <img src={Cone} alt="sully cute" />
        <img src={Ball} alt="sully cute" />
        <img src={EyeContact} alt="sully cute" />
      </div>
    </div>
  );
}
