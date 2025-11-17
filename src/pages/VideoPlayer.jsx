import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { video } = useParams();

  return (
    <div className="p-4">
      <iframe
        src={`https://rumble.com/embed/${video}`}
        className="w-full h-[70vh] rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Rumble Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
