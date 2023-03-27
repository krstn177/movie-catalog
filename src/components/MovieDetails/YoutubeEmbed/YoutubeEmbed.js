import './YoutubeEmbed.css';

export const YoutubeEmbed = ({embedId}) => (
  <div className="video-responsive">
    <iframe
      width="600"
      height="320"
      src={`https://www.youtube-nocookie.com/embed/${embedId}`}      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);


