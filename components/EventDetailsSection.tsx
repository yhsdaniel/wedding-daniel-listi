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
          <div className="event-grid">
            {events.map((eventCard, index) => (
              <motion.article
                key={eventCard.title}
                {...fadeUp}
                transition={{ duration: 0.75, delay: index * 0.12 }}
                className="event-card"
              >
                <p className="event-title">{eventCard.title}</p>
                <p className="event-day">{eventCard.day}</p>
                <div className="event-date">
                  <span>{eventCard.month}</span>
                  <strong>{eventCard.date}</strong>
                  <span>{eventCard.year}</span>
                </div>
                <p className="section-copy">{eventCard.time}</p>
                <p className="section-copy strong">{eventCard.venue}</p>
                <p className="section-copy">{eventCard.address}</p>
                <a
                  className="pill-button"
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
