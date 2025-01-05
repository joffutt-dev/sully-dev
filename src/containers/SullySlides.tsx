import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const intervalRef = useRef<number | null>(null);
  const [play, setPlay] = useState(true);

  const widthToScroll = useMemo(() => (ref.current?.clientWidth ?? 1500) / 3, [ref]);

  const scrollLeft = useCallback(
    () =>
      ref.current?.scrollTo({
        left:
          ref.current?.scrollLeft === 0
            ? ref.current.scrollWidth
            : ref.current?.scrollLeft - widthToScroll, // Adjust the value to control the scroll distance
        behavior: "smooth", // For smooth scrolling
      }),
    [ref, widthToScroll],
  );

  const scrollRight = useCallback(
    () =>
      ref.current?.scrollTo({
        left:
          ref.current.clientWidth + ref.current?.scrollLeft >=
          ref.current?.scrollWidth - 10
            ? 0
            : ref.current?.scrollLeft + widthToScroll,
        behavior: "smooth",
      }),
    [ref, widthToScroll],
  );

  const doInterval = useCallback(() => {
    if (intervalRef.current) return; // Already running

    intervalRef.current = setInterval(() => {
      scrollRight();
    }, 3000);
  }, [intervalRef]);

  const resetInterval = () => {
    stopInterval();
    doInterval();
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current || undefined);
  }, [ref]);

  return (
    <div className="relative">
      <Button
        extraClassNames="top-0 left-0 absolute h-full w-1/5 opacity-0 hover:opacity-50 hover:bg-gray-700"
        onClick={() => {
          scrollLeft();
          resetInterval();
        }}
      >
        <ChevronDoubleLeftIcon className="size-20 fill-white" />
      </Button>
      <Button
        extraClassNames="top-0 right-0 absolute h-full w-1/5 opacity-0 hover:opacity-50 hover:bg-gray-700"
        onClick={() => {
          scrollRight();
          resetInterval();
        }}
      >
        <ChevronDoubleRightIcon className="size-20 fill-white" />
      </Button>
      {showButton && (
        <Button
          extraClassNames="bottom-1/2 right-1/2 absolute bg-gray-800 hover:bg-gray-900 h-16 rounded-full shadow-2xl"
          // onClick={() => setPlay(!play)}
        >
          {!play ? (
            <PauseIcon className="size-8 fill-white" />
          ) : (
            <PlayIcon className="size-8 fill-white" />
          )}
        </Button>
      )}
      <div
        ref={ref}
        className="carousel cursor-pointer border-black border-solid border-2"
        onClick={() => {
          if (play) {
            stopInterval();
          } else {
            resetInterval();
          }
          setPlay(!play);
          setShowButton(true);
          setTimeout(() => {
            setShowButton(false);
          }, 400);
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
