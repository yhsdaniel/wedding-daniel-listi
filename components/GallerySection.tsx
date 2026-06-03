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

  // Membagi item galeri menjadi dua kelompok baris
  const firstRowItems = galleryItems.slice(0, Math.ceil(galleryItems.length / 2));
  const secondRowItems = galleryItems.slice(Math.ceil(galleryItems.length / 2));

  return (
    <section id="gallery" data-section className="snap-section w-full overflow-hidden text-white">
      <div className="gallery-card w-full min-h-screen flex flex-col justify-center pt-20 relative px-0">
        {/* ================= BARIS 1 (ROW ATAS) ================= */}
        {/* Menggunakan relative agar judul absolute mengacu pada blok kontainer atas ini */}
        <div className="gallery-title-block relative w-full mb-12">

          <div className="gallery-row flex flex-nowrap gap-4 overflow-x-auto no-scrollbar">
            {firstRowItems.map((item, index) => {
              const isVideo = item.type === "video";
              const key = isVideo ? `${item.videoId}-row1-${index}` : `${item.full}-row1-${index}`;
              return (
                <button
                  key={key}
                  type="button"
                  className={`gallery-pill-item ${isVideo ? "video-item" : ""}`}
                  onClick={() => onOpenLightbox(item)}
                >
                  <img
                    src={isVideo ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.thumb}
                    alt={"Gallery image"}
                    style={{ objectFit: "cover" }}
                  />
                </button>
              );
            })}
          </div>

          {/* JUDUL UTAMA: Diposisikan absolute menimpa awal geseran gambar kiri */}
          <div className="absolute left-6 top-0 -translate-y-5 z-30 pointer-events-none max-w-[50%]">
            <h2 className="belgantFont text-white text-4xl md:text-6xl font-normal leading-none tracking-wide drop-shadow-md">
              Moments <br /> <span className="italic font-serif">in</span> Time
            </h2>
          </div>

          {/* Petunjuk Geser (Swipe Hint) di bawah gambar baris pertama */}
          <div className="text-right pr-6 mt-2 flex items-center justify-end gap-2 text-xs italic tracking-wider">
            <span>Swipe to see more</span>
            <span>⟶</span>
          </div>
        </div>

        {/* ================= BARIS 2 (ROW BAWAH) ================= */}
        <div className="gallery-title-block w-full mt-4">
          <div className="gallery-row flex flex-nowrap gap-4 overflow-x-auto no-scrollbar">
            {secondRowItems.map((item, index) => {
              const isVideo = item.type === "video";
              const key = isVideo ? `${item.videoId}-row2-${index}` : `${item.full}-row2-${index}`;
              return (
                <button
                  key={key}
                  type="button"
                  className={`gallery-pill-item ${isVideo ? "video-item" : ""}`}
                  onClick={() => onOpenLightbox(item)}
                >
                  <img
                    src={isVideo ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.thumb}
                    alt={item.alt || "Gallery image"}
                    style={{ objectFit: "cover" }}
                  />

                  {/* Overlay Tombol Play Video */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                      <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                        <span className="text-white text-xl ml-1">▶</span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Petunjuk Tambahan di Bawah */}
          <div className="pl-6 mt-3 text-xs opacity-60 tracking-wide font-light">
            <span>Tap Image for slideshow view</span>
          </div>
        </div>

      </div>
    </section>
  );
}
