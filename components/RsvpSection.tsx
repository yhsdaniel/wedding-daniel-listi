import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Wish } from "@/app/types";
import SectionHeader from "@/components/SectionHeader";

type RsvpProps = {
  guestName: string;
  attendance: string;
  guestCount: number;
  wishesText: string;
  wishes: Wish[];
  onNameChange: (value: string) => void;
  onAttendanceChange: (value: string) => void;
  onGuestCountChange: (delta: number) => void;
  onWishesTextChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
};

const SkeletonWish = () => (
  <article className="wish-item animate-pulse opacity-50">
    <div>
      <div style={{ height: "1.2rem", width: "30%", backgroundColor: "rgba(255, 255, 255, 0.15)", borderRadius: "4px", marginBottom: "0.5rem" }} />
    </div>
    <div style={{ height: "1rem", width: "80%", backgroundColor: "rgba(255, 255, 255, 0.08)", borderRadius: "4px" }} />
  </article>
);

export default function RsvpSection({
  guestName,
  attendance,
  guestCount,
  wishesText,
  wishes,
  onNameChange,
  onAttendanceChange,
  onGuestCountChange,
  onWishesTextChange,
  onSubmit,
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}: RsvpProps) {
  return (
    <>
      <section id="rsvp" data-section className="snap-section" style={{ alignItems: "start", paddingTop: "2rem" }}>
        <motion.div {...fadeUp} transition={{ duration: 0.75 }} className="content-card">
          <SectionHeader eyebrow="RSVP" />
          <h2 className="section-heading" style={{ margin: "1rem 0", fontSize: "2rem" }}>WILL YOU ATTEND?</h2>
          <p className="section-copy mt-4" style={{ fontSize: "0.8rem" }}>
            We kindly request your prompt response to confirm your attendance at our
            upcoming event. Alongside your RSVP, please take a moment to extend your
            warm regards and best wishes.
          </p>
          <form className="rsvp-form" onSubmit={onSubmit}>
            <label className="field">
              <span>NAME</span>
              <input
                value={guestName}
                onChange={(event) => onNameChange(event.target.value)}
                placeholder="Guest Name"
              />
            </label>

            <div className="field">
              <span>ATTENDANCE</span>
              <div className="radio-row">
                {["Attend", "Not Attend"].map((option) => (
                  <label key={option} className="radio-pill">
                    <input
                      type="radio"
                      checked={attendance === option}
                      onChange={() => onAttendanceChange(option)}
                    />
                    <span>{option.toUpperCase()}</span>
                  </label>
                ))}
              </div>
            </div>

            {attendance === "Attend" && (
              <div className="field">
                <span>NUMBER OF GUESTS</span>
                <div className="guest-stepper">
                  <button type="button" onClick={() => onGuestCountChange(-1)}>
                    -
                  </button>
                  <input value={guestCount} readOnly />
                  <button type="button" onClick={() => onGuestCountChange(1)}>
                    +
                  </button>
                </div>
              </div>
            )}

            <label className="field">
              <span>WISHES</span>
              <textarea
                rows={4}
                value={wishesText}
                onChange={(event) => onWishesTextChange(event.target.value)}
                placeholder="Write your wishes and blessings"
              />
            </label>

            <button className="pill-button form-submit" type="submit">
              SUBMIT
            </button>
          </form>
        </motion.div>
      </section>

      <section id="wishes" data-section className="snap-section" style={{ alignItems: "start" }}>
        <motion.div {...fadeUp} transition={{ duration: 0.75 }} className="content-card wishes-card">
          <div className="section-header">
            <p className="card-eyebrow">WISHES</p>
            <div className="divider" />
          </div>

          {isLoading ? (
            <div className="wishes-list max-h-[500px] overflow-y-auto">
              {[...Array(5)].map((_, i) => (
                <SkeletonWish key={i} />
              ))}
            </div>
          ) : wishes.length ? (
            <div className="wishes-list max-h-[500px] overflow-y-auto">
              {wishes.map((wish, index) => (
                <article key={`${wish.name}-${index}`} className="wish-item">
                  <div>
                    <p className="wish-name">{wish.name}</p>
                  </div>
                  <p className="wish-message">{wish.message}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="section-copy">
              Your blessings will appear here after submitting the RSVP form.
            </p>
          )}

          {!isLoading && totalPages > 1 && (
            <div className="pagination-row">
              <button
                type="button"
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                PREV
              </button>
              <span className="text-sm font-semibold text-white/75">
                {currentPage} / {totalPages}
              </span>
              <button
                type="button"
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                NEXT
              </button>
            </div>
          )}
        </motion.div>
      </section>
    </>
  );
}
