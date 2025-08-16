export interface IHall {
  id: number;
  name: string;
  slug: string;
  description: string;
  stars: number;
  pricing?: {
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
    cover: string;
    gallery: {
      url: string;
      sort: number;
    }[];
  };
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
  capacity_range: string;
}

export interface ICapacity {
  min: number;
  max: number;
  unit: string;
  unit_label: string;
  range: string;
}

export type FormInputsType = {
  eventType: string;
  date: string;
  guestCount: string;
  budget: string;
  inquiry: string;
  name: string;
  email: string;
  phone: string;
};
