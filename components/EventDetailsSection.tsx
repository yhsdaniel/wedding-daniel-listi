/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { EventCard } from "@/app/types";
import SectionHeader from "@/components/SectionHeader";

type EventDetailsProps = {
  events: EventCard[];
  dresscodeColors: string[];
  framePreview: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
};

export default function EventDetailsSection({
  events,
}: EventDetailsProps) {
  return (
    <>
      <section id="details" data-section className="snap-section">
        <div className="content-card">
          <SectionHeader eyebrow="EVENT DETAILS" />
          <div className="event-grid grid grid-cols-1 md:grid-cols-2 gap-8 p-4"> {/* Sesuaikan background induk jika perlu */}
            {events.map((eventCard, index) => (
              <motion.article
                key={eventCard.title}
                {...fadeUp}
                transition={{ duration: 0.75, delay: index * 0.12 }}
                className="event-card flex flex-col items-center text-center p-6 text-white max-w-md mx-auto"
              >
                {/* Judul Acara (Contoh: HOLY MATRIMONY) */}
                <h3 className="belgantFont text-white text-2xl md:text-3xl tracking-widest uppercase mb-6 font-semibold">
                  {eventCard.title}
                </h3>

                {/* === FORMAT TANGGAL BERGARIS (3 KOLOM) === */}
                <div className="w-full grid grid-cols-3 items-center justify-center text-sm md:text-base tracking-wide uppercase my-4 relative">

                  {/* Kolom Kiri: Hari (Contoh: SATURDAY) */}
                  <div className="flex items-center justify-center h-full border-b-2 border-t-2 border-white/60">
                    <span className="font-medium tracking-wider">{eventCard.day}</span>
                  </div>

                  {/* Kolom Tengah: Bulan, Tanggal, Tahun */}
                  <div className="flex flex-col items-center justify-center px-2 z-10">
                    <span className="text-xs md:text-sm tracking-widest text-white/80 font-light">
                      {eventCard.month}
                    </span>
                    <strong className="text-3xl md:text-4xl font-serif font-normal my-1">
                      {eventCard.date}
                    </strong>
                    <span className="text-xs md:text-sm tracking-widest text-white/80 font-light">
                      {eventCard.year}
                    </span>
                  </div>

                  {/* Kolom Kanan: Jam (Contoh: 08.00 - 10.00 WIB) */}
                  <div className="flex items-center justify-center h-full border-b-2 border-t-2 border-white/60">
                    <span className="font-medium tracking-wider">{eventCard.time}</span>
                  </div>

                  {/* Garis horizontal bawah tambahan untuk melengkapi frame kiri & kanan */}
                  <div className="absolute bottom-0 left-0 w-[33%] border-t border-white/60"></div>
                  <div className="absolute bottom-0 right-0 w-[33%] border-t border-white/60"></div>
                </div>

                {/* === DETAIL TEMPAT & ALAMAT === */}
                <div className="mt-6 space-y-2">
                  <p className="text-base md:text-lg font-bold tracking-wide text-white/90">
                    {eventCard.venue}
                  </p>
                  <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                    {eventCard.address}
                  </p>
                </div>

                {/* === TOMBOL GOOGLE MAPS (Pill-Button) === */}
                <a
                  className="mt-8 px-8 py-2.5 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full text-xs md:text-sm tracking-widest font-semibold uppercase transition-all duration-300 shadow-md backdrop-blur-sm"
                  href={eventCard.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GOOGLE MAPS
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
