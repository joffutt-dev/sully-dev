import { useQuery } from "@tanstack/react-query";
import { getActualImage } from "../helpers/ImageFetching";

interface SlideProps {
  imgId: string;
}

export function SlideFromServer({ imgId }: SlideProps) {
  const { data } = useQuery({
    queryKey: ["imageId", imgId],
    queryFn: () => getActualImage(imgId),
    ...{ enabled: !!imgId },
  });

  return (
    <div className="carousel-item">
      {data && (
        <img
          className="aspect-auto custom-max-h"
          src={URL.createObjectURL(data)}
          alt="Slide"
        />
      )}
    </div>
  );
}
