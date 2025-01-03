import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/16/solid";
import { Slide } from "../components/Slide";
export function SullySlides() {
  const [showButton, setShowButton] = useState(false);
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
      }, 2000);
      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [ref, play]);

  return (
    <div className="relative">
      <Button extraClassNames="top-1/2 left-0 absolute" onClick={scrollLeft}>
        <ChevronDoubleLeftIcon className="size-6" />
      </Button>
      <Button extraClassNames="top-1/2 right-0 absolute" onClick={scrollRight}>
        <ChevronDoubleRightIcon className="size-6" />
      </Button>
      {showButton && (
        <Button
          onAnimationEnd={() => setShowButton(false)}
          extraClassNames="bottom-1/2 right-1/2 absolute"
          onClick={() => setPlay(!play)}
        >
          {!play ? <PauseIcon className="size-6" /> : <PlayIcon className="size-6" />}
        </Button>
      )}
      <div
        ref={ref}
        className="carousel cursor-pointer anim"
        onClick={() => {
          setPlay(!play);
          setShowButton(true);
        }}
      >
        <Slide imgLocation="/src/images/stretching.webp" />
        <Slide imgLocation="/src/images/eyecontact.webp" />
        <Slide imgLocation="/src/images/ball.webp" />
        <Slide imgLocation="/src/images/sullycone.webp" />
        <Slide imgLocation="/src/images/eyecontact.webp" />
        <Slide imgLocation="/src/images/stretching.webp" />
        <Slide imgLocation="/src/images/ball.webp" />
      </div>
    </div>
  );
}
