interface SlideProps {
  imgLocation: string;
}

export function Slide({ imgLocation }: SlideProps) {
  return (
    <div className="carousel-item custom-h">
      <img src={imgLocation} alt="Slide" />
    </div>
  );
}
