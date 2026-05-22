"use client";
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useEffect, useState } from "react";
import { GalleryItem, Wish } from "@/app/types";
import {
  backgroundVideo,
  calendarUrl,
  copyIcon,
  coverImage,
  dresscodeColors,
  events,
  framePreview,
  giftImage,
  heroImage,
  menuItems,
  playIcon,
  topGallery,
  bottomGallery,
  weddingGiftCards,
  getRemainingTime,
  storyImage,
} from "@/lib/invitationData";
import HeroRail from "@/components/HeroRail";
import CountdownCard from "@/components/CountdownCard";
import EventDetailsSection from "@/components/EventDetailsSection";
import RsvpSection from "@/components/RsvpSection";
import GallerySection from "@/components/GallerySection";
import GiftSection from "@/components/GiftSection";
import Lightbox from "@/components/Lightbox";

const defaultAttendance = "Attend";

export default function Home() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [countdown, setCountdown] = useState(getRemainingTime);
  const [attendance, setAttendance] = useState(defaultAttendance);
  const [guestCount, setGuestCount] = useState(1);
  const [guestName, setGuestName] = useState("");
  const [wishesText, setWishesText] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const tick = () => setCountdown(getRemainingTime());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const overflow = invitationOpen ? "auto" : "hidden";
    document.documentElement.style.overflow = overflow;
    document.body.style.overflow = overflow;

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [invitationOpen]);

  useEffect(() => {
    const animated = document.querySelectorAll<HTMLElement>(".reanimate");
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-15% 0px -25% 0px",
      },
    );

    animated.forEach((element) => animationObserver.observe(element));
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      animationObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    setMobileMenuOpen(false);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!guestName.trim()) {
      setSubmitMessage("Please enter your name first.");
      return;
    }

    if (wishesText.trim()) {
      setWishes((current) => [
        {
          name: guestName.trim(),
          attendance,
          guests: guestCount,
          message: wishesText.trim(),
        },
        ...current,
      ]);
    }

    setSubmitMessage("Thank you. Your RSVP has been captured on this demo page.");
    setGuestName("");
    setGuestCount(1);
    setAttendance(defaultAttendance);
    setWishesText("");
  };

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setSubmitMessage("Copied to clipboard.");
    } catch {
      setSubmitMessage("Copy failed. Please copy it manually.");
    }
  };

  const toggleGiftOpen = () => setGiftOpen((s) => !s);
  const openLightbox = (item: GalleryItem) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <div className="elixir-shell">
        <div className="elixir-background" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            className="background-video"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="background-overlay" />
        </div>

        <HeroRail
          heroImage={heroImage}
          menuItems={menuItems}
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          onNavigate={scrollToSection}
          onToggleMobileMenu={() => setMobileMenuOpen((s) => !s)}
        />

        <main className="content-column">
          <section id="home" data-section className="snap-section hero-card">
            <div className="content-card hero-card">
              <div className="card-eyebrow reanimate fade">THE WEDDING OF</div>
              <div className="cover-title-block">
                <span className="cover-ghost reanimate fade delay-2">D L</span>
                <h1 className="cover-title reanimate fade delay-3">Daniel</h1>
                <h1 className="cover-title reanimate fade delay-4">Listi</h1>
              </div>
              <p className="section-copy reanimate up delay-5">
                We&apos;re delighted to invite you to our celebration.
              </p>
            </div>
          </section>

          <section id="couple" data-section className="snap-section">
            <div className="content-card">
              <div className="section-header">
                <p className="card-eyebrow reanimate fade">GROOM &amp; BRIDE</p>
                <div className="divider reanimate fade delay-2" />
              </div>
              <div className="couple-grid">
                <article className="person-card reanimate left delay-2">
                  <p className="person-role">THE GROOM</p>
                  <h2 className="person-name">Daniel</h2>
                  <p className="person-full-name">Daniel Kristiawan</p>
                  <p className="section-copy">Son of</p>
                  <p className="section-copy">
                    Johan Andrianto (Father) &amp; Heri Pebruariningsih (Mother)
                  </p>
                  <a
                    className="inline-link"
                    href="https://instagram.com/yhskris"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @yhskris
                  </a>
                </article>
                <article className="person-card reanimate right delay-3">
                  <p className="person-role">THE BRIDE</p>
                  <h2 className="person-name">Listi</h2>
                  <p className="person-full-name">Listiany Sukmawaty</p>
                  <p className="section-copy">Daughter of</p>
                  <p className="section-copy">
                    Yoyong (Father) &amp; Mufliha (Mother)
                  </p>
                  <a
                    className="inline-link"
                    href="https://instagram.com/liz.lingz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @liz.lingz
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section id="story" data-section className="snap-section">
            <div className="content-card story-card">
              <div className="story-media reanimate fade delay-2">
                <img src={storyImage} alt="Story portrait" className="story-image" />
              </div>
              <div className="story-copy">
                <div className="section-header">
                  <p className="card-eyebrow reanimate fade">LOVE STORY</p>
                  <div className="divider reanimate fade delay-2" />
                </div>
                <h2 className="section-heading reanimate up delay-2">
                  The Path Where Two Hearts Unite
                </h2>
                <div className="story-chapter reanimate up delay-3">
                  <p className="story-label">The Beginning</p>
                  <p className="section-copy">
                    Our story began like a quiet song, unexpected yet
                    comforting. We met at just the right time, when life was
                    still figuring itself out. What started as casual
                    conversations turned into deep connections, shared dreams,
                    and a sense of home in each other&apos;s presence.
                  </p>
                </div>
                <div className="story-chapter reanimate up delay-4">
                  <p className="story-label">Growing Love</p>
                  <p className="section-copy">
                    As time passed, we grew not just as individuals, but as a
                    team. We&apos;ve celebrated wins, braved challenges, and
                    found countless reasons to laugh along the way.
                  </p>
                </div>
                <div className="story-chapter reanimate up delay-5">
                  <p className="story-label">A Promise for Forever</p>
                  <p className="section-copy">
                    Now, with joyful hearts and hopeful eyes, we&apos;re
                    stepping into the next chapter. This wedding isn&apos;t
                    just a celebration of a day, it&apos;s a celebration of a
                    journey, a promise, and the love we&apos;re lucky enough to
                    call our own.
                  </p>
                </div>
              </div>
            </div>

            <CountdownCard countdown={countdown} calendarUrl={calendarUrl} />
          </section>

          <EventDetailsSection
            events={events}
            dresscodeColors={dresscodeColors}
            framePreview={framePreview}
          />

          <RsvpSection
            guestName={guestName}
            attendance={attendance}
            guestCount={guestCount}
            wishesText={wishesText}
            submitMessage={submitMessage}
            wishes={wishes}
            onNameChange={setGuestName}
            onAttendanceChange={setAttendance}
            onGuestCountChange={(delta) => setGuestCount((c) => Math.max(1, Math.min(2, c + delta)))}
            onWishesTextChange={setWishesText}
            onSubmit={submitRsvp}
          />

          <GallerySection
            topGallery={topGallery}
            bottomGallery={bottomGallery}
            playIcon={playIcon}
            onOpenLightbox={openLightbox}
          />

          <GiftSection
            giftOpen={giftOpen}
            toggleGiftOpen={toggleGiftOpen}
            cards={weddingGiftCards}
            copyIcon={copyIcon}
            giftImage={giftImage}
            onCopy={copyText}
          />

          <section id="closing" data-section className="snap-section">
            <div className="content-card closing-card">
              <h2 className="section-heading reanimate fade">WITH HEARTFELT GRATITUDE FOR YOUR PRESENCE AND BLESSINGS</h2>
              <p className="section-copy reanimate up delay-2">
                We can&apos;t wait to share this special moment with you. Your
                presence will make our day even more meaningful.
              </p>
              <h3 className="closing-names reanimate fade delay-3">HANSEN &amp; KEZIA</h3>
              <p className="section-copy reanimate fade delay-4">
                Invitation by énvelope
              </p>
              <div className="footer-links reanimate fade delay-5">
                <a href="https://wa.me/6282211225002" target="_blank" rel="noreferrer">
                  0822-1122-5002
                </a>
                <a href="https://instagram.com/envelope.id" target="_blank" rel="noreferrer">
                  envelope.id
                </a>
                <a href="https://envelope.id" target="_blank" rel="noreferrer">
                  envelope.id
                </a>
              </div>
              <p className="copyright">© 2026 énvelope, All rights reserved.</p>
            </div>
          </section>
        </main>
      </div>

      <div className={`cover-screen ${invitationOpen ? "is-hidden" : ""}`}>
        <div
          className="cover-media"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.76)), url(${coverImage})`,
          }}
        >
          <p className="cover-kicker">THE WEDDING OF</p>
          <div className="cover-title-block">
            <span className="cover-ghost">H K</span>
            <h1>Hansen</h1>
            <h1>Kezia</h1>
          </div>
          <p className="cover-date">SATURDAY, 11 / 04 / 2026</p>
          <p className="cover-guest">Dear, Guest</p>
          <button
            type="button"
            className="pill-button cover-button"
            onClick={() => setInvitationOpen(true)}
          >
            OPEN INVITATION
          </button>
          <p className="cover-note">
            We apologize if there is any misspelling of name or title.
          </p>
        </div>
      </div>

      {lightbox ? <Lightbox item={lightbox} onClose={closeLightbox} /> : null}
    </>
  );
}
