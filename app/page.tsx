"use client";
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useCallback, useEffect, useRef, useState, Suspense } from "react";
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
import CoupleSection from "@/components/CoupleSection";
import toast from "react-hot-toast";
import Preloader from "@/components/Preloader";
import LastSection from "@/components/LastSection";
import Cover from "@/components/Cover";
import FirstSection from "@/components/FirstSection";

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
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [attendance, setAttendance] = useState(defaultAttendance);
  const [guestCount, setGuestCount] = useState(1);
  const [guestName, setGuestName] = useState("");
  const [wishesText, setWishesText] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingWishes, setIsLoadingWishes] = useState(false);

  const fetchWishes = useCallback(async () => {
    setIsLoadingWishes(true);

    try {
      const { data, count, error } = await supabase
        .from("RSVP")
        .select("*", { count: "exact" })
        .neq("note", "")
        .not("note", "is", null)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching RSVPs:", error);
        toast.error("Failed to load wishes.");
        return;
      }

      if (data) {
        setWishes(data.map((item) => mapRsvpToWish(item as RsvpRow)));
      }
    } catch (err) {
      console.error("Error in fetchWishes:", err);
      toast.error("Failed to load wishes.");
    } finally {
      setIsLoadingWishes(false);
    }
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => fetchWishes());
  }, [fetchWishes]);

  useEffect(() => {
    const channel = supabase
      .channel("rsvp-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "RSVP" },
        (payload) => {
          fetchWishes();
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [fetchWishes]);

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

      await fetchWishes();

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
        <audio loop controls ref={audioRef} src={"/Thank God I Found You.mp3"} className="hidden" onEnded={() => setIsPlaying(false)}>
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
          <div className="elixir-background xl:w-4/12" style={{ marginLeft: 'auto' }} aria-hidden="true">
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

          <FirstSection />

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

          <GiftSection
            giftOpen={giftOpen}
            toggleGiftOpen={toggleGiftOpen}
            cards={weddingGiftCards}
            copyIcon={copyIcon}
            giftImage={giftImage}
            onCopy={copyText}
          />

          <GallerySection
            topGallery={topGallery}
            bottomGallery={bottomGallery}
            playIcon={playIcon}
            onOpenLightbox={openLightbox}
          />


          <LastSection />
        </main>
      </div>

      <AnimatePresence>
        <Suspense fallback={null}>
          <Cover
            invitationOpen={invitationOpen}
            setInvitationOpen={setInvitationOpen}
            audioRef={audioRef}
            setIsVisible={setIsVisible}
          />
        </Suspense>
      </AnimatePresence>

      {lightbox ? <Lightbox item={lightbox} onClose={closeLightbox} /> : null}
    </>
  );
}
