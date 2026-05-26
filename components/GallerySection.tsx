import { GalleryItem, ImageGalleryItem } from "@/app/types";
import Image from "next/image";

type GallerySectionProps = {
  topGallery: ImageGalleryItem[];
  bottomGallery: GalleryItem[];
  playIcon: string;
  onOpenLightbox: (item: GalleryItem) => void;
};

const getGridSpan = (index: number) => {
  switch (index) {
    case 0:
      return "span-2x2";
    case 1:
      return "span-1x2";
    case 2:
      return "span-2x1";
    case 3:
      return "span-1x1";
    case 4:
      return "span-3x1";
    default:
      return "span-1x1";
  }
};

export default function GallerySection({
  topGallery,
  bottomGallery,
  playIcon,
  onOpenLightbox,
}: GallerySectionProps) {
  const galleryItems = [...topGallery, ...bottomGallery];

  return (
    <section id="gallery" data-section className="snap-section">
      <div className="content-card gallery-card">
        <div className="gallery-title-block reanimate fade delay-2">
          <p className="card-eyebrow">GALLERY</p>
          <h2 className="section-heading large">Moments in Time</h2>
          <p className="gallery-helper">Tap image for slideshow view</p>
          <p className="gallery-helper muted">All images displayed in a modern grid</p>
        </div>

        <div className="gallery-grid reanimate fade delay-3">
          {galleryItems.map((item, index) => {
            const isVideo = item.type === "video";
            const key = isVideo ? `${item.videoId}-${index}` : item.full;
            return (
              <button
                key={key}
                type="button"
                className={`gallery-item ${getGridSpan(index)} ${isVideo ? "video-item" : ""}`}
                onClick={() => onOpenLightbox(item)}
              >
                <Image
                  src={isVideo ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.thumb}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {isVideo ? (
                  <span className="video-play">
                    <Image 
                      src={playIcon} 
                      alt="Play video" 
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <p className="quote reanimate up delay-5">
          &quot;To love and be loved is to feel the sun from both sides.&quot; - David
          Viscott
        </p>
      </div>
    </section>
  );
}
