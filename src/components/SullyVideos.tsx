import { VideoPlayer } from "./ui/VideoPlayer";

export function SullyVideos() {
  return (
    <div className="flex flex-wrap p-3 gap-2">
      <VideoPlayer width="300" height="200" />
      <VideoPlayer width="400" height="300" />
      <VideoPlayer width="300" height="200" />
    </div>
  );
}
