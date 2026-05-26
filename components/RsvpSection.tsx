import { FormEvent } from "react";
import { Wish } from "@/app/types";
import SectionHeader from "@/components/SectionHeader";

type RsvpProps = {
  guestName: string;
  attendance: string;
  guestCount: number;
  wishesText: string;
  submitMessage: string;
  wishes: Wish[];
  onNameChange: (value: string) => void;
  onAttendanceChange: (value: string) => void;
  onGuestCountChange: (delta: number) => void;
  onWishesTextChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function RsvpSection({
  guestName,
  attendance,
  guestCount,
  wishesText,
  submitMessage,
  wishes,
  onNameChange,
  onAttendanceChange,
  onGuestCountChange,
  onWishesTextChange,
  onSubmit,
}: RsvpProps) {
  return (
    <section id="rsvp" data-section className="snap-section">
      <div className="content-card">
        <SectionHeader eyebrow="RSVP" />
        <h2 className="section-heading reanimate up delay-2">WILL YOU ATTEND?</h2>
        <p className="section-copy reanimate up delay-3">
          We kindly request your prompt response to confirm your attendance at our
          upcoming event. Alongside your RSVP, please take a moment to extend your
          warm regards and best wishes.
        </p>
        <form className="rsvp-form reanimate fade delay-4" onSubmit={onSubmit}>
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
              {['Attend', 'Not Attend'].map((option) => (
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

          {/* <label className="field">
            <span>ATTENDANCE</span>
            <select
              value={attendance}
              onChange={(event) => onAttendanceChange(event.target.value)}
            >
              <option value="Attend">ATTEND</option>
              <option value="Not Attend">NOT ATTEND</option>
            </select>
          </label> */}

          {'Attend' === attendance && (
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
        {/* {submitMessage ? <p className="form-message">{submitMessage}</p> : null} */}
      </div>

      <div className="content-card wishes-card">
        <div className="section-header">
          <p className="card-eyebrow">WISHES</p>
          <div className="divider" />
        </div>

        {wishes.length ? (
          <div className="wishes-list max-h-[500px] overflow-y-auto">
            {wishes.map((wish, index) => (
              <article key={`${wish.name}-${index}`} className="wish-item">
                <div>
                  <p className="wish-name">{wish.name}</p>
                  <p className="wish-meta">
                    {wish.attendance} • {wish.guests} guest{wish.guests > 1 ? "s" : ""}
                  </p>
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
      </div>
    </section>
  );
}
