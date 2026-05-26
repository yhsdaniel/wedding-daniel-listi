export type MenuItem = {
  id: string;
  label: string;
};

export type EventCard = {
  title: string;
  day: string;
  month: string;
  date: string;
  year: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
};

export type GalleryItem =
  | {
    type: "image";
    thumb: string;
    full: string;
    alt: string;
  }
  | {
    type: "video";
    videoId: string;
    alt: string;
  };

export type ImageGalleryItem = Extract<GalleryItem, { type: "image" }>;

export type Wish = {
  name: string;
  attendance: string;
  guests: number;
  message: string;
};
