import video from "../../videos/test.mp4";
interface VideoPlayerProps {
  width: string;
  height: string;
}
export function VideoPlayer({ width = "500", height = "300" }: VideoPlayerProps) {
  return (
    <div className="shadow-md">
      <video width={width} height={height} controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
