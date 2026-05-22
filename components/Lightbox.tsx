import { GalleryItem } from "@/app/types";

type LightboxProps = {
  item: GalleryItem;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <div className="lightbox" onClick={onClose} role="presentation">
      <button type="button" className="lightbox-close" onClick={onClose}>
        CLOSE
      </button>
      <div className="lightbox-body" onClick={(event) => event.stopPropagation()}>
        {item.type === "video" ? (
          <div className="video-frame">
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
              title="Prewedding video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img src={item.full} alt={item.alt} className="lightbox-image" />
        )}
      </div>
    </div>
  );
}
