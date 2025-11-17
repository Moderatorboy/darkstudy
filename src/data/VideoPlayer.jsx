export default function VideoPlayer({ url }) {
  if (!url) {
    return (
      <div className="w-full p-4 text-center text-red-500">
        Video URL missing hai!
      </div>
    );
  }

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
      <iframe
        src={url}
        className="w-full h-full"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>
    </div>
  );
}
