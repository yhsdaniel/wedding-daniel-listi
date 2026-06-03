"use client";
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useEffect, useRef, useState } from "react";
import { GalleryItem, Wish } from "@/app/types";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Pause, Play } from "lucide-react";
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
import CountdownCard from "@/components/CountdownCard";
import EventDetailsSection from "@/components/EventDetailsSection";
import RsvpSection from "@/components/RsvpSection";
import GallerySection from "@/components/GallerySection";
import GiftSection from "@/components/GiftSection";
import Lightbox from "@/components/Lightbox";
import { ChevronDown } from "lucide-react";
import QuotesSection from "@/components/QuotesSection";
import LeftSideSection from "@/components/LeftSideSection";
import LoveStorySection from "@/components/LoveStorySection";

import { Playfair_Display, Roboto } from 'next/font/google'
import { belgantFont } from "./fonts";
import CoupleSection from "@/components/CoupleSection";
import toast from "react-hot-toast";

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

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
      toast.error("Please enter your name first.");
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

    toast.success("Thank you. Your RSVP has been captured on this demo page.");
    scrollToSection("wishes")
    setGuestName("");
    setGuestCount(1);
    setAttendance(defaultAttendance);
    setWishesText("");
  };

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied to clipboard.");
    } catch {
      toast.error("Copy failed. Please copy it manually.");
    }
  };

  const toggleGiftOpen = () => setGiftOpen((s) => !s);
  const openLightbox = (item: GalleryItem) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="elixir-shell flex">
        {/* <HeroRail
          heroImage={heroImage}
          menuItems={menuItems}
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          onNavigate={scrollToSection}
          onToggleMobileMenu={() => setMobileMenuOpen((s) => !s)}
        /> */}
        {/* Add audio */}
        <audio autoPlay controls ref={audioRef} src={"/for_you_i_will.mp3"} className="hidden" onEnded={() => setIsPlaying(false)}>
        </audio>
        <button
          onClick={toggleAudio}
          className=" fixed bottom-2 left-2 z-50 flex items-center justify-center w-10 h-10 border border-white/50 rounded-full bg-black/50 text-white hover:bg-gray-800 transition"
        >
          {isPlaying ? (
            <Pause size={20} />
          ) : (
            <Play size={20} fill="currentColor" />
          )}
        </button>

        <LeftSideSection />

        <main className="content-column relative flex-1">
          <div className="elixir-background md:w-4/12 right-0 ml-auto" aria-hidden="true">
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
          <section id="home" data-section className="snap-section hero-card w-full">
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
            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <span>SCROLL</span>
              <div className="scroll-indicator-arrow">
                <ChevronDown size={14} strokeWidth={2} />
                <ChevronDown size={14} strokeWidth={2} className="-mt-1" />
              </div>
            </div>
          </section>

          <QuotesSection />

          <CoupleSection />

          <LoveStorySection storyImage={storyImage} />

          <CountdownCard countdown={countdown} calendarUrl={calendarUrl} />

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
              <h3 className="closing-names reanimate fade delay-3">Daniel &amp; Listi</h3>
            </div>
          </section>
        </main>
      </div>

      <AnimatePresence>
        {!invitationOpen && (
          <motion.div
            initial={{ opacity: 1, visibility: "visible" }}
            animate={{ opacity: 1, visibility: "visible" }}
            exit={{ opacity: 0, visibility: "hidden" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="fixed size-full z-50 overflow-hidden"
          >
            <div
              className="cover-media p-6 py-[10%] gap-6 hidden md:block"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.76)), url(${coverImage})`,
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <p className="text-white">THE WEDDING OF</p>
                <div className="cover-title-block text-left">
                  <h1 className={`${belgantFont.className}`}>Daniel</h1>
                  <h1 className={`${belgantFont.className} text-white/40 absolute -top-4 translate-y-[50%] -right-4`} style={{ fontSize: "6rem"}}>&</h1>
                  <h1 className={`${belgantFont.className}`}>Listi</h1>
                </div>
                <p className="text-white text-sm">SATURDAY, 30 / 01 / 2027</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-white">
                  Dear,
                </p>
                <div className="flex justify-center items-center text-white border-b border-white w-60 h-8">Saudara</div>
                <p className="text-white italic text-xs my-2">
                  We apologize if there is any misspelling of name or title.
                </p>
                <button
                  type="button"
                  className="pill-button cover-button"
                  onClick={() => {
                    setInvitationOpen(true);
                    audioRef.current?.play();
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  OPEN INVITATION
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {lightbox ? <Lightbox item={lightbox} onClose={closeLightbox} /> : null}
    </>
  );
}
