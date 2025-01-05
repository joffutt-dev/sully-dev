interface SlideProps {
  imgLocation: string;
}

export function Slide({ imgLocation }: SlideProps) {
  return (
    <div className="carousel-item custom-h">
      <img className="aspect-auto" src={imgLocation} alt="Slide" />
    </div>
  );
}
