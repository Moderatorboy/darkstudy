import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { video } = useParams();

  return (
    <div className="p-4">
      <iframe
        src={`https://rumble.com/embed/${video}`}
        className="w-full h-[70vh]"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
