'use client'

import {
  EventCard,
  GalleryItem,
  ImageGalleryItem,
  MenuItem,
} from "@/app/types";

export const targetDate = new Date("2027-01-30T12:00:00+02:00");

// export const heroImage =
//   "https://s3.envelope.id/wp/uploads/2026/02/hansenkezia_28_1770794555.jpg";
// export const coverImage =
//   "https://wp.envelope.id/wp-content/uploads/2026/02/inv_787_x1mxpE7V.jpg";
export const coverImage = "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/sampul.jpg"
export const coverImage2 = "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/sampul2.jpg"
export const storyImage =
  "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/story.jpg";
export const groomImage =
  "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/groom.jpg";
export const brideImage =
  "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/bride.jpg";
export const giftImage =
  "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/wedding-gift.jpg";
export const closingImage =
  "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/penutup.jpg";
// export const backgroundVideo =
//   "https://s3.envelope.id/templates/prewed-1/hansen-kezia-720.mp4";
export const backgroundPage =
  "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/background.jpg"
// export const framePreview =
//   "https://s3.envelope.id/wp/uploads/2026/02/frame-sample-1.webp";
export const playIcon =
  "https://s3.envelope.id/wp/uploads/2026/02/play-circle-thin-white.svg";
export const copyIcon = "https://s3.envelope.id/wp/uploads/2026/02/copy-white.svg";
export const giftIcon = "https://s3.envelope.id/wp/uploads/2026/02/gift-icon-white.svg";
export const bcaLogo = "https://wp.envelope.id/wp-content/uploads/2024/02/bca.png";

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
    month: "JAN",
    date: "30",
    year: "2027",
    time: "12.00 - 14.00 WIB",
    venue: "Maria Bunda Karmel Church",
    address: "Jl. Karmel Raya No.2, RT.9/RW.4, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
    mapsUrl: "https://maps.google.com/?q=Maria+Bunda+Karmel+Church",
  },
];

export const topGallery: ImageGalleryItem[] = [
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_1.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_1.jpg",
    alt: "Daniel and Listi portrait one",
  },
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_2.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_2.jpg",
    alt: "Daniel and Listi portrait two",
  },
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_3.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_3.jpg",
    alt: "Daniel and Listi portrait three",
  },
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_4.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_4.jpg",
    alt: "Daniel and Listi portrait four",
  },
  // {
  //   type: "image",
  //   thumb:
  //     "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/v1789628292/gallery_5.jpg",
  //   full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/v1789628292/gallery_5.jpg",
  //   alt: "Daniel and Listi portrait five",
  // },
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
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_6.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_6.jpg",
    alt: "Daniel and Listi portrait six",
  },
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_7.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_7.jpg",
    alt: "Daniel and Listi portrait seven",
  },
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_8.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_8.jpg",
    alt: "Daniel and Listi portrait eight",
  },
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_9.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_9.jpg",
    alt: "Daniel and Listi portrait nine",
  },
  {
    type: "image",
    thumb:
      "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_10.jpg",
    full: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/gallery_10.jpg",
    alt: "Daniel and Listi portrait ten",
  },
];

export const dresscodeColors = ["#d3cab8", "#8b8378", "#2b2627"];

export const weddingGiftCards = [
  {
    kind: "bank",
    logo: bcaLogo,
    title: "Daniel Kristiawan",
    detail: "6320435089",
    copy: "6320435089",
  },
  {
    kind: "bank",
    logo: bcaLogo,
    title: "Listiany Sukmawaty",
    detail: "6510350535",
    copy: "6510350535",
  },
];

export const calendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Daniel%20%26%20Listi&dates=20270130T050000Z/20270130T070000Z&details=Join%20our%20celebration%20for%20Daniel%20%26%20Listi&location=Maria%20Bunda%20Karmel%20Church";

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
