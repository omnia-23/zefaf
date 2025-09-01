export interface IHall {
  id: number;
  name: string;
  slug: string;
  description: string;
  stars: number;

  pricing: {
    min: number;
    max: number;
    currency: string;
    range: string;
  };
  location: {
    country: {
      id: number;
      name: string;
    };
    city: {
      id: number;
      name: string;
    };
    coordinates: {
      lat: number;
      lng: number;
    };
    address: string;
  };
  contact: {
    phone: string;
    address: string;
  };
  capacities: {
    overall: ICapacity;
    men_hall: ICapacity;
    women_hall: ICapacity;
    food: ICapacity;
    drinks: ICapacity;
  };
  media: {
    url: string;
    sort: number;
  }[];
  main_category: {
    title: string;
    slug: string;
  };
  features?: {
    id: number;
    name: string;
    value: string;
  }[];
  offers?: {
    title: string;
    description: string;
    starts_at: string; // ISO date string
    ends_at: string; // ISO date string
    status: string; // e.g., "active", "expired"
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  stats: {
    ratings: {
      average: number;
      count: number;
    } | null;
  };
  media_count: number;
  capacity_range: string;
}

export interface ICapacity {
  min: number;
  max: number;
  unit: string;
  unit_label: string;
  range: string;
}

// Form state (what user fills in)
export type FormInputsType = {
  eventType: string;
  date: string;
  guestMin: string;
  guestMax: string;
  budgetMin: string;
  budgetMax: string;
  inquiry: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
};

// API payload type
export type BookingPayloadType = {
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  currency: string;
  notes: string;
  event_date: string;
  occasions: { type: string }[];
  guests: { min: number; max: number }[];
  budgets: { min: number; max: number }[];
};
