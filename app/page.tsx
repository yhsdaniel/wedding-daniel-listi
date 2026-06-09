"use client";
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
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
  closingImage,
} from "@/lib/invitationData";
import CountdownCard from "@/components/CountdownCard";
import EventDetailsSection from "@/components/EventDetailsSection";
import RsvpSection from "@/components/RsvpSection";
import { createClient } from "@/utils/supabase/client";
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
import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

const defaultAttendance = "Attend";
const wishesPerPage = 5;

const supabase = createClient();

type RsvpRow = {
  name: string;
  attendance: boolean;
  guest: number | null;
  note: string | null;
};

const mapRsvpToWish = (item: RsvpRow): Wish => ({
  name: item.name,
  attendance: item.attendance ? "Attend" : "Not Attend",
  guests: item.guest || 1,
  message: item.note || "",
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [countdown, setCountdown] = useState(getRemainingTime);
  const [attendance, setAttendance] = useState(defaultAttendance);
  const [guestCount, setGuestCount] = useState(1);
  const [guestName, setGuestName] = useState("");
  const [wishesText, setWishesText] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingWishes, setIsLoadingWishes] = useState(false);

  const fetchWishes = useCallback(async (page: number) => {
    setIsLoadingWishes(true);

    try {
      const from = (page - 1) * wishesPerPage;
      const to = from + wishesPerPage - 1;

      const { data, count, error } = await supabase
        .from("RSVP")
        .select("*", { count: "exact" })
        .neq("note", "")
        .not("note", "is", null)
        .order("created_at", { ascending: false })
        .range(from, to);

      if (error) {
        console.error("Error fetching RSVPs:", error);
        toast.error("Failed to load wishes.");
        return;
      }

      if (data) {
        setWishes(data.map((item) => mapRsvpToWish(item as RsvpRow)));
      }

      if (count !== null) {
        setTotalPages(Math.ceil(count / wishesPerPage) || 1);
      }
    } catch (err) {
      console.error("Error in fetchWishes:", err);
      toast.error("Failed to load wishes.");
    } finally {
      setIsLoadingWishes(false);
    }
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => fetchWishes(currentPage));
  }, [currentPage, fetchWishes]);

  useEffect(() => {
    const channel = supabase
      .channel("rsvp-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "RSVP" },
        (payload) => {
          const newRow = payload.new as Partial<RsvpRow> | null;

          if (payload.eventType === "INSERT" && newRow?.note && currentPage !== 1) {
            setCurrentPage(1);
            return;
          }

          fetchWishes(currentPage);
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [currentPage, fetchWishes]);

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

  const submitRsvp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!guestName.trim()) {
      toast.error("Please enter your name first.");
      return;
    }

    const newRsvp = {
      name: guestName.trim(),
      attendance: attendance === "Attend",
      guest: attendance === "Attend" ? guestCount : 0,
      note: wishesText.trim(),
    };

    const loadingToast = toast.loading("Submitting your RSVP...");

    try {
      const { error } = await supabase
        .from("RSVP")
        .insert([newRsvp])
        .select();

      if (error) {
        console.error("Error inserting RSVP:", error);
        toast.dismiss(loadingToast);
        if (error.code === "42501") {
          toast.error("Row-Level Security violation. Public insert must be enabled on Supabase.");
        } else {
          toast.error(`Failed to submit RSVP: ${error.message}`);
        }
        return;
      }

      toast.dismiss(loadingToast);
      toast.success("Thank you! Your RSVP has been submitted.");

      setGuestName("");
      setGuestCount(1);
      setAttendance(defaultAttendance);
      setWishesText("");

      if (currentPage === 1) {
        await fetchWishes(1);
      } else {
        setCurrentPage(1);
      }

      scrollToSection("wishes");
    } catch (err) {
      toast.dismiss(loadingToast);
      console.error("Exception in submitRsvp:", err);
      toast.error("An error occurred. Please try again.");
    }
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
        <audio autoPlay loop controls ref={audioRef} src={"/Thank God I Found You.mp3"} className="hidden" onEnded={() => setIsPlaying(false)}>
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
          <Preloader isVisible={isVisible} setIsVisible={setIsVisible} />
          <div className="elixir-background xl:w-4/12 right-0 ml-auto" aria-hidden="true">
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
          <section id="home" data-section className="snap-section hero-card w-full flex justify-between items-center">
            <div className="content-card hero-card text-center">
              <div className="card-eyebrow reanimate fade">THE WEDDING OF</div>
              <div className="cover-title-block">
                <span className="cover-ghost reanimate fade delay-2">D L</span>
                <h1 className="cover-title reanimate fade delay-3">Daniel</h1>
                <h1 className="cover-title reanimate fade delay-4">Listi</h1>
              </div>
              <p className="section-copy text-sm reanimate up delay-5">
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
            wishes={wishes}
            onNameChange={setGuestName}
            onAttendanceChange={setAttendance}
            onGuestCountChange={(delta) => setGuestCount((c) => Math.max(1, Math.min(2, c + delta)))}
            onWishesTextChange={setWishesText}
            onSubmit={submitRsvp}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            isLoading={isLoadingWishes}
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

          <section id="closing" data-section className="snap-section bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.42)), url(${closingImage})`,
          }}>
            <div className="content-card closing-card h-full flex flex-col justify-between" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="section-heading reanimate fade">WITH HEARTFELT GRATITUDE FOR YOUR PRESENCE AND BLESSINGS
              </motion.h2>
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.75, delay: 0.4 }}
                  className="closing-names my-4" style={{ fontSize: "2rem" }}>
                  Daniel &amp; Listi
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.75, delay: 0.6 }}
                  className="my-4 text-sm text-white/80">
                  We can&apos;t wait to share this special moment with you. Your
                  presence will make our day even more meaningful.
                </motion.p>
              </div>
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
              className="cover-media p-6 py-[25%] md:py-20 gap-6 hidden md:block"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.18) 60%, rgba(0, 0, 0, 0.76)), url(${coverImage})`,
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <p className="text-white">THE WEDDING OF</p>
                <div className="cover-title-block text-left">
                  <h1 className={`${belgantFont.className}`}>Daniel</h1>
                  <h1 className={`${belgantFont.className} text-white/40 absolute -top-4 translate-y-[50%] -right-4`} style={{ fontSize: "6rem" }}>&</h1>
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
                    setIsVisible(true);
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
