
import { EventCard } from "@/app/types";
import SectionHeader from "@/components/SectionHeader";

type EventDetailsProps = {
  events: EventCard[];
  dresscodeColors: string[];
  framePreview: string;
};

export default function EventDetailsSection({
  events,
  dresscodeColors,
  framePreview,
}: EventDetailsProps) {
  return (
    <section id="details" data-section className="snap-section">
      <div className="content-card">
        <SectionHeader eyebrow="EVENT DETAILS" />
        <div className="event-grid">
          {events.map((eventCard, index) => (
            <article
              key={eventCard.title}
              className={`event-card reanimate ${
                index % 2 === 0 && `delay-${index + 2}`
              }`}
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
            </article>
          ))}
        </div>
      </div>

      <div className="content-card dresscode-card">
        <p className="card-eyebrow reanimate fade">DRESSCODE</p>
        <div className="divider short reanimate fade delay-2" />
        <p className="section-copy reanimate up delay-3">
          We kindly encourage our guests to wear tones from our selected color
          palette.
        </p>
        <div className="swatch-row reanimate fade delay-4">
          {dresscodeColors.map((color) => (
            <span
              key={color}
              className="swatch"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* <div className="content-card dual-card">
        <div className="split-card reanimate left delay-2">
          <p className="card-eyebrow">LIVE STREAMING</p>
          <div className="divider short" />
          <h2 className="section-heading">JOIN OUR EXCLUSIVE LIVE STREAMING EVENT</h2>
          <p className="section-copy">
            Saturday, 11 April 2026
            <br />
            11:00 - 13:00 WIB
          </p>
          <a
            className="pill-button"
            href="https://instagram.com/envelope.id"
            target="_blank"
            rel="noreferrer"
          >
            JOIN LIVE
          </a>
        </div>
        <div className="split-card reanimate right delay-3">
          <p className="card-eyebrow">WEDDING FRAME</p>
          <div className="divider short" />
          <p className="section-copy">
            If the frame doesn&apos;t open automatically, please swipe through the
            Instagram Highlights until you find the intended frame.
          </p>
          <img src={framePreview} alt="Wedding frame preview" className="frame-image" />
          <div className="button-row">
            <a
              className="pill-button"
              href="https://instagram.com/envelope.id"
              target="_blank"
              rel="noreferrer"
            >
              OPEN FRAME
            </a>
            <a
              className="pill-button secondary"
              href="https://envelope.id"
              target="_blank"
              rel="noreferrer"
            >
              UPLOAD PHOTOS
            </a>
          </div>
          <p className="frame-note">
            We recommend updating your Instagram app to the latest version.
          </p>
        </div>
      </div> */}
    </section>
  );
}
