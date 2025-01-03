import Stretching from "../images/stretching.webp";
import Cone from "../images/sullycone.webp";
import Ball from "../images/ball.webp";
import EyeContact from "../images/eyecontact.webp";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/Button";
export function SullySlides() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(true);

  const scrollLeft = useCallback(
    () =>
      ref.current?.scrollTo({
        left:
          ref.current?.scrollLeft === 0
            ? ref.current.scrollWidth
            : ref.current?.scrollLeft - 500, // Adjust the value to control the scroll distance
        behavior: "smooth", // For smooth scrolling
      }),
    [ref],
  );

  const scrollRight = useCallback(
    () =>
      ref.current?.scrollTo({
        left:
          ref.current.clientWidth + ref.current?.scrollLeft >=
          ref.current?.scrollWidth - 10
            ? 0
            : ref.current?.scrollLeft + 500,
        behavior: "smooth",
      }),
    [ref],
  );

  useEffect(() => {
    //Implementing the setInterval method
    if (play) {
      const interval = setInterval(() => {
        scrollRight();
      }, 1000);
      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [ref, play]);

  return (
    <div className="relative">
      <Button extraClassNames="top-1/2 left-0 absolute" onClick={scrollLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </Button>
      <Button extraClassNames="top-1/2 right-0 absolute" onClick={scrollRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Button>
      <Button
        extraClassNames="bottom-0 right-1/2 absolute"
        onClick={() => setPlay(!play)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z"
          />
        </svg>
      </Button>
      <div ref={ref} className="carousel">
        <div className="carousel-item custom-h">
          <img src={Stretching} alt="sully cute" />
        </div>
        <div className="carousel-item custom-h">
          <img src={Cone} alt="sully cute" />
        </div>
        <div className="carousel-item custom-h">
          <img src={Ball} alt="sully cute" />
        </div>
        <div className="carousel-item custom-h">
          <img src={EyeContact} alt="sully cute" />
        </div>
      </div>
    </div>
  );
}
