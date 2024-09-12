export type eventType = {
  id: string;
  name: string;
  type: string;
  description: string;
  short_description?: string;
  club: string;
  display: string;
  image?: string;
  tagline: string;
  price: number;
  slots: slotType[] | null;
  startDate: string;
  teamSize: string;
  endDate: string;
  scope?: string;
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
  name: string;
  type: string;
  tagline: string;
  description: string;
  category: string;
  price: number;
  total_available: number;
  sizes: string[];
  images: string[];
};
