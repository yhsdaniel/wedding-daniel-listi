import { GalleryItem, ImageGalleryItem } from "@/app/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { rionaldoFont } from "@/app/fonts";

type GallerySectionProps = {
  topGallery: ImageGalleryItem[];
  bottomGallery: GalleryItem[];
  playIcon: string;
  onOpenLightbox: (item: GalleryItem) => void;
};

type OpeningHeadingProps = {
  children: ReactNode;
  className?: string;
  delay: number;
};

function OpeningHeading({ children, className = "", delay }: OpeningHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.25 }}
      transition={{ duration: 0.75, delay }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function GallerySection({
  topGallery,
  bottomGallery,
  onOpenLightbox,
}: GallerySectionProps) {
  const galleryItems = [...topGallery, ...bottomGallery];

  // Membagi item galeri menjadi dua kelompok baris
  const firstRowItems = galleryItems.slice(0, Math.ceil(galleryItems.length / 2));
  const secondRowItems = galleryItems.slice(Math.ceil(galleryItems.length / 2));

  return (
    <section id="gallery" data-section className="snap-section w-full overflow-hidden text-white">
      <div className="w-full min-h-screen flex flex-col justify-between relative py-28">
        {/* ================= BARIS 1 (ROW ATAS) ================= */}
        <div className="gallery-title-block relative w-full mb-12">

          <OpeningHeading className="gallery-row flex flex-nowrap gap-4 overflow-x-auto no-scrollbar" delay={0.6}>
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
                  <Image
                    src={isVideo ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.thumb}
                    alt={"Gallery image"}
                    style={{ objectFit: "cover" }}
                    width={300}
                    height={200}
                  />
                </button>
              );
            })}
          </OpeningHeading>

          {/* JUDUL UTAMA: Diposisikan absolute menimpa awal geseran gambar kiri */}
          <OpeningHeading className="absolute left-6 bottom-0 translate-y-10 z-30 pointer-events-none max-w-[50%]" delay={0.2}>
            <h2 className="belgantFont text-white text-4xl md:text-5xl font-normal leading-none tracking-wide drop-shadow-md">
              Moments <br /> <span className="italic font-serif">in</span> Time
            </h2>
          </OpeningHeading>

          {/* Petunjuk Geser (Swipe Hint) di bawah gambar baris pertama */}
          <OpeningHeading className="text-right pr-6 mt-2 flex items-center justify-end gap-2 text-xs italic tracking-wider" delay={0.6}>
            <span>Swipe to see more</span>
            <span>⟶</span>
          </OpeningHeading>
        </div>

        {/* ================= BARIS 2 (ROW BAWAH) ================= */}
        <div className="gallery-title-block w-full mt-4">
          {/* <OpeningHeading className="absolute -top-25 right-0 -rotate-20 w-64" delay={0.2}>
            <div className={`${rionaldoFont.className} gallery-quote`}>"To love and be loved is to feel the sun from both sides." - David Viscott</div>
          </OpeningHeading> */}
          <OpeningHeading className="gallery-row flex flex-nowrap gap-4 overflow-x-auto no-scrollbar" delay={0.6}>
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
                  <Image
                    src={isVideo ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.thumb}
                    alt={item.alt || "Gallery image"}
                    style={{ objectFit: "cover" }}
                    width={300}
                    height={200}
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
          </OpeningHeading>

          {/* Petunjuk Tambahan di Bawah */}
          <OpeningHeading className="pl-6 mt-3 text-xs opacity-60 tracking-wide font-light" delay={0.6}>
            <span>Tap Image for slideshow view</span>
          </OpeningHeading>
        </div>

      </div>
    </section>
  );
}
