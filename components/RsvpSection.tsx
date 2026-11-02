import { FormEvent, useState } from "react";
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
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  isLoading: boolean;
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
};

const WISHES_PER_PAGE = 3;

const SkeletonWish = () => (
  <article className="wish-item animate-pulse relative overflow-hidden rounded-2xl bg-linear-to-br from-white/10 to-white/5 p-6 border border-white/10 shadow-lg backdrop-blur-md">
    <div className="flex items-center gap-4 mb-3">
      <div className="shrink-0 w-12 h-12 rounded-full border border-white/20 bg-white/10"></div>
      <div className="flex-1">
        <div className="h-4 w-32 bg-white/15 rounded-md"></div>
        <div className="h-px w-12 bg-white/10 mt-2"></div>
      </div>
    </div>
    <div className="pl-16 space-y-2">
      <div className="h-3 w-full bg-white/10 rounded-md"></div>
      <div className="h-3 w-4/5 bg-white/10 rounded-md"></div>
    </div>
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
  onPageChange,
  isLoading,
}: RsvpProps) {
  const [localPage, setLocalPage] = useState(1);

  const totalLocalPages = Math.max(1, Math.ceil((wishes?.length || 0) / WISHES_PER_PAGE));
  const activePage = Math.min(currentPage || localPage, totalLocalPages);

  const handlePageChange = (newPage: number) => {
    setLocalPage(newPage);
    onPageChange?.(newPage);
  };

  const startIndex = (activePage - 1) * WISHES_PER_PAGE;
  const currentWishes = (wishes || []).slice(startIndex, startIndex + WISHES_PER_PAGE);

  return (
    <>
      <section id="rsvp" data-section className="snap-section" style={{ alignItems: "start", paddingTop: "2rem" }}>
        <motion.div {...fadeUp} transition={{ duration: 0.75 }} className="content-card h-screen">
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
                style={{ height: '2.5rem' }}
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
            <div className="wishes-list h-auto flex flex-col gap-4">
              {[...Array(WISHES_PER_PAGE)].map((_, i) => (
                <SkeletonWish key={i} />
              ))}
            </div>
          ) : wishes.length ? (
            <div className="wishes-list h-auto flex flex-col gap-4">
              {currentWishes.map((wish, index) => (
                <motion.article
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
                  key={`${wish.name}-${index}`}
                  className="wish-item relative overflow-hidden rounded-2xl bg-linear-to-br from-white/10 to-white/5 p-6 border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-3 h-full bg-linear-to-r from-white/40 to-transparent transition-colors duration-300" />
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 size-10 rounded-full border border-white/20 flex items-center justify-center bg-black/50 transition-transform duration-300">
                      <span className="text-md text-white/90">{wish.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="flex-1">
                      <p className="wish-name text-base font-medium text-white tracking-[0.112rem]">{wish.name}</p>
                      <div className="h-px w-full bg-white/50 mt-3" />
                    </div>
                  </div>
                  <p className="wish-message text-[1rem] text-white/80 tracking-[0.112rem] font-light pl-14">
                    {wish.message}
                  </p>
                </motion.article>
              ))}
            </div>
          ) : (
            <p className="section-copy">
              Your blessings will appear here after submitting the RSVP form.
            </p>
          )}

          {!isLoading && totalLocalPages > 1 && (
            <div className="pagination-row">
              <button
                type="button"
                className="pagination-btn"
                disabled={activePage === 1}
                onClick={() => handlePageChange(activePage - 1)}
              >
                PREV
              </button>
              <span className="text-sm font-semibold text-white/75">
                {activePage} / {totalLocalPages}
              </span>
              <button
                type="button"
                className="pagination-btn"
                disabled={activePage === totalLocalPages}
                onClick={() => handlePageChange(activePage + 1)}
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
