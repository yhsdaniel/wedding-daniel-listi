import {
  EventCard,
  GalleryItem,
  ImageGalleryItem,
  MenuItem,
} from "@/app/types";

export const targetDate = new Date("2026-04-11T00:00:00+07:00");

export const heroImage =
  "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_28_1770794555.jpg";
export const coverImage =
  "https://wp.envelope.id/wp-content/uploads/2026/02/inv_787_x1mxpE7V.jpg";
export const storyImage =
  "https://wp.envelope.id/wp-content/uploads/2026/02/inv_787_ovXEMCwF-1024x683.jpg";
export const giftImage =
  "https://wp.envelope.id/wp-content/uploads/2025/11/inv_787_mqiDhs4a.jpg";
export const backgroundVideo =
  "https://s3.envelope.id/templates/prewed-1/hansen-kezia-720.mp4";
export const framePreview =
  "https://s3.envelope.id/wp/uploads/2026/02/frame-sample-1.webp";
export const playIcon =
  "https://s3.envelope.id/wp/uploads/2026/02/play-circle-thin-white.svg";
export const copyIcon = "https://s3.envelope.id/wp/uploads/2026/02/copy-white.svg";
export const giftIcon = "https://s3.envelope.id/wp/uploads/2026/02/gift-icon-white.svg";
export const bcaLogo = "https://wp.envelope.id/wp-content/uploads/2024/02/bca.png";
export const mandiriLogo =
  "https://wp.envelope.id/wp-content/uploads/2024/02/mandiri.png";

export const menuItems: MenuItem[] = [
  { id: "home", label: "Home" },
  { id: "couple", label: "Groom & Bride" },
  { id: "story", label: "Love Story" },
  { id: "details", label: "Event Details" },
  { id: "rsvp", label: "RSVP & Wishes" },
  { id: "gallery", label: "Gallery" },
  { id: "gift", label: "Wedding Gift" },
];

export const events: EventCard[] = [
  {
    title: "HOLY MATRIMONY",
    day: "SATURDAY",
    month: "APR",
    date: "18",
    year: "2026",
    time: "08.00 - 10.00 WIB",
    venue: "Balai Sartika Convention Hall",
    address: "Jl. Suryalaya Indah No. 1-3 Buah Batu, Cijagra, Bandung",
    mapsUrl: "https://maps.google.com/?q=Balai+Sartika+Convention+Hall+Bandung",
  },
  {
    title: "RECEPTION",
    day: "SATURDAY",
    month: "APR",
    date: "18",
    year: "2026",
    time: "11.00 - 13.00 WIB",
    venue: "Balai Sartika Convention Hall",
    address: "Jl. Suryalaya Indah No. 1-3 Buah Batu, Cijagra, Bandung",
    mapsUrl: "https://maps.google.com/?q=Balai+Sartika+Convention+Hall+Bandung",
  },
];

export const topGallery: ImageGalleryItem[] = [
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_18_1770794525.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_18_1770794525.jpg",
    alt: "Hansen and Kezia portrait one",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_16_1770794522.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_16_1770794522.jpg",
    alt: "Hansen and Kezia portrait two",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_31_1770794565.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_31_1770794565.jpg",
    alt: "Hansen and Kezia portrait three",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_20_1770794532.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_20_1770794532.jpg",
    alt: "Hansen and Kezia portrait four",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_17_1770794523.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_17_1770794523.jpg",
    alt: "Hansen and Kezia portrait five",
  },
];

export const bottomGallery: GalleryItem[] = [
  {
    type: "video",
    videoId: "FpJVl_iHvHk",
    alt: "Prewedding video",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_30_1770794561.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_30_1770794561.jpg",
    alt: "Hansen and Kezia portrait six",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_24_1770794542.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_24_1770794542.jpg",
    alt: "Hansen and Kezia portrait seven",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_29_1770794557.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_29_1770794557.jpg",
    alt: "Hansen and Kezia portrait eight",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_7_1770794487.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_7_1770794487.jpg",
    alt: "Hansen and Kezia portrait nine",
  },
  {
    type: "image",
    thumb:
      "https://envelope.id/cdn-cgi/image/height=300,fit=scale-down,format=auto/https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_6_1770794482.jpg",
    full: "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_6_1770794482.jpg",
    alt: "Hansen and Kezia portrait ten",
  },
];

export const dresscodeColors = ["#d3cab8", "#8b8378", "#2b2627"];

export const weddingGiftCards = [
  {
    kind: "bank",
    logo: bcaLogo,
    title: "Hansen Yap",
    detail: "123456789",
    copy: "123456789",
  },
  {
    kind: "bank",
    logo: mandiriLogo,
    title: "Kezia Aurelia",
    detail: "987654321",
    copy: "987654321",
  },
  {
    kind: "gift",
    logo: giftIcon,
    title: "Send Gift",
    detail:
      "Evan (08123456789)\nJl. Arcadia Raya No.9, Bojongsiang, Bandung Jawa Barat 40288",
    copy:
      "Evan (08123456789), Jl. Arcadia Raya No.9, Bojongsiang, Bandung Jawa Barat 40288",
  },
  {
    kind: "gift",
    logo: giftIcon,
    title: "Gift Registry",
    detail: "Open the registry through the original énvelope workflow.",
    copy: "https://envelope.id",
  },
];

export const calendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Hansen%20%26%20Kezia&dates=20260411T000000Z/20260411T060000Z&details=Join%20our%20celebration%20for%20Hansen%20%26%20Kezia&location=Balai%20Sartika%20Convention%20Hall";

export function getRemainingTime() {
  const distance = targetDate.getTime() - Date.now();

  if (distance <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}
