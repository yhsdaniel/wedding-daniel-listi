'use client'

import { GalleryItem, ImageGalleryItem } from "@/app/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";
import { rionaldoFont } from "@/app/fonts";
import { ImageLoaderProps } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (src.includes('res.cloudinary.com')) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
    return src.replace('/upload/', `/upload/${params.join(',')}/`);
  }
  return src;
};

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
  const firstRowItemsRaw = galleryItems.slice(0, Math.ceil(galleryItems.length / 2));
  const firstRowItems = [
    ...firstRowItemsRaw.filter(item => item.type === "video"),
    ...firstRowItemsRaw.filter(item => item.type !== "video")
  ];
  const secondRowItems = galleryItems.slice(Math.ceil(galleryItems.length / 2));

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const [scroll1, setScroll1] = useState({ left: false, right: true });
  const [scroll2, setScroll2] = useState({ left: false, right: true });

  const [isDesktop, setIsDesktop] = useState(false)

  const checkScroll = (ref: React.RefObject<HTMLDivElement | null>, setScroll: (val: any) => void) => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setScroll({
      left: scrollLeft > 0,
      right: scrollLeft < scrollWidth - clientWidth - 1 // -1 for rounding tolerance
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
      checkScroll(row1Ref, setScroll1);
      checkScroll(row2Ref, setScroll2);
    };
    // Initial check (delay slightly to allow images to layout)
    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollRow = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (!ref.current) return;
    const amount = 300;
    ref.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="gallery" data-section className="snap-section w-full overflow-hidden text-white">
      <div className="w-full min-h-screen flex flex-col justify-between relative py-28">
        {/* ================= BARIS 1 (ROW ATAS) ================= */}
        <div className="gallery-title-block relative w-full mb-12">
          <OpeningHeading className="relative group w-full" delay={0.6}>
            {(scroll1.left && isDesktop) && (
              <button
                onClick={() => scrollRow(row1Ref, 'left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20 backdrop-blur-md transition hover:bg-black/80 flex items-center justify-center"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div
              ref={row1Ref}
              onScroll={() => checkScroll(row1Ref, setScroll1)}
              className="gallery-row flex flex-nowrap gap-4 overflow-x-auto no-scrollbar scroll-smooth relative z-10"
            >
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
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                        <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                          <span className="text-white text-xl ml-1">▶</span>
                        </div>
                      </div>
                    )}
                    <Image
                      src={item.type === "video" ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.thumb}
                      alt={"Gallery image"}
                      style={{ objectFit: "cover" }}
                      width={300}
                      height={200}
                      loader={item.type === "image" && item.thumb.includes('res.cloudinary.com') ? cloudinaryLoader : undefined}
                    />
                  </button>
                );
              })}
            </div>

            {(scroll1.right && isDesktop) && (
              <button
                onClick={() => scrollRow(row1Ref, 'right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20 backdrop-blur-md transition hover:bg-black/80 flex items-center justify-center"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </OpeningHeading>

          {/* JUDUL UTAMA */}
          <OpeningHeading className="absolute left-6 bottom-0 translate-y-10 z-30 pointer-events-none max-w-[50%]" delay={0.2}>
            <h2 className="belgantFont text-white text-4xl md:text-5xl font-normal leading-none tracking-wide drop-shadow-md">
              Moments <br /> <span className="italic font-serif">in</span> Time
            </h2>
          </OpeningHeading>

          {/* Petunjuk Geser */}
          <OpeningHeading className="text-right pr-6 mt-2 flex items-center justify-end gap-2 text-xs italic tracking-wider" delay={0.6}>
            <span>Swipe to see more</span>
            <span>⟶</span>
          </OpeningHeading>
        </div>

        {/* ================= BARIS 2 (ROW BAWAH) ================= */}
        <div className="gallery-title-block w-full mt-4">
          <OpeningHeading className="relative group w-full" delay={0.6}>
            {(scroll2.left && isDesktop) && (
              <button
                onClick={() => scrollRow(row2Ref, 'left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20 backdrop-blur-md transition hover:bg-black/80 flex items-center justify-center"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div
              ref={row2Ref}
              onScroll={() => checkScroll(row2Ref, setScroll2)}
              className="gallery-row flex flex-nowrap gap-4 overflow-x-auto no-scrollbar scroll-smooth relative z-10"
            >
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
                      src={item.type === "video" ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` : item.thumb}
                      alt={item.alt || "Gallery image"}
                      style={{ objectFit: "cover" }}
                      width={300}
                      height={200}
                      loader={item.type === "image" && item.thumb.includes('res.cloudinary.com') ? cloudinaryLoader : undefined}
                    />
                  </button>
                );
              })}
            </div>

            {(scroll2.right && isDesktop) && (
              <button
                onClick={() => scrollRow(row2Ref, 'right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20 backdrop-blur-md transition hover:bg-black/80 flex items-center justify-center"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </OpeningHeading>

          <OpeningHeading className="pl-6 mt-3 text-xs opacity-60 tracking-wide font-light" delay={0.6}>
            <span>Tap Image for slideshow view</span>
          </OpeningHeading>
        </div>
      </div>
    </section>
  );
}
