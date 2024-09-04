export type eventType = {
  id: string;
  name: string;
  type: string;
  description: string;
  club: string;
  display: string;
  image?: string;
  tagline: string;
  price: number;
  slots: slotType[] | null;
  startDate: string;
  teamSize: string;
  endDate: string;
};

export type slotType = {
  slotId: string;
  eventId: string;
  venue: string;
  totalEntries: number;
  isRegistrable: boolean;
  startDate: string;
  endDate: string;
};

export type merchType = {
  id: string;
  type: string;
  price: number;
  totalAvailable: number;
  description: string;
  images: string[];
  name: string;
  tagline: string;
  category: string;
  sizes: string[];
};
