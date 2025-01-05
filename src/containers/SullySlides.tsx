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
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    doInterval();
  };

  useEffect(() => {
    if (play) {
      doInterval();
      return () => clearInterval(intervalRef.current || undefined);
    }
  }, [ref, play]);

  return (
    <div className="relative">
      <Button
        extraClassNames="top-0 left-0 absolute h-full w-1/5 opacity-0 hover:opacity-75"
        onClick={() => {
          scrollLeft();
          resetInterval();
        }}
      >
        <ChevronDoubleLeftIcon className="size-6" />
      </Button>
      <Button
        extraClassNames="top-0 right-0 absolute h-full w-1/5 opacity-0 hover:opacity-75"
        onClick={() => {
          scrollRight();
          resetInterval();
        }}
      >
        <ChevronDoubleRightIcon className="size-6" />
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
          intervalRef.current = null;
          setPlay(!play);
          setShowButton(true);
          setTimeout(() => {
            setShowButton(false);
          }, 500);
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
