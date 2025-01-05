interface SlideProps {
  imgLocation: string;
}

export function Slide({ imgLocation }: SlideProps) {
  return (
    <div className="carousel-item">
      <img className="aspect-auto custom-max-h" src={imgLocation} alt="Slide" />
    </div>
  );
}
