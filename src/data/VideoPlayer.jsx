export default function VideoPlayer({ url }) {
  return (
    <div className="aspect-video">
      <iframe src={url} className="w-full h-full" allowFullScreen></iframe>
    </div>
  );
}
