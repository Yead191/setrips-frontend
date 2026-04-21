export interface TourMediaImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface TourGalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface TourVideo {
  youtube_id: string;
  embed_url: string;
  thumbnail_url: string;
  title: string;
}

export interface DetailedTourMedia {
  hero_image: TourMediaImage;
  gallery: TourGalleryImage[];
  video?: TourVideo;
}

export interface TourSEO {
  meta_title: string;
  meta_description: string;
  keywords: string[];
  canonical_url: string;
}

export interface TourMeta {
  title: string;
  short_title?: string;
  tagline?: string;
  description: string;
  seo?: TourSEO;
}

export interface TourDuration {
  hours: number;
  label: string;
  departure_time?: string;
  checkin_time?: string;
  return_time_estimate?: string;
  note?: string;
}

export interface TourOverview {
  duration: TourDuration;
  operator: string;
  category: string;
  type: string;
  languages: string[];
  group_size: {
    max: number;
    note?: string;
  };
  badge?: {
    label: string;
    color: string;
  };
}

export interface TourItineraryItem {
  time: string;
  event: string;
}

export interface TourMeetingPoint {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  checkin_instructions: string;
  nearest_transport: {
    type: string;
    station: string;
    walk_time: string;
  }[];
}

export interface TourPriceCategory {
  price: number;
  label: string;
  note?: string;
}

export interface TourTicketTier {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pricing: {
    currency: string;
    adult: TourPriceCategory;
    child: TourPriceCategory;
    infant: TourPriceCategory;
    [key: string]: any; // Allow family, senior, student etc if added later
  };
  inclusions: string[];
  exclusions: string[];
  badge: {
    label: string;
    color: string;
  } | null;
}

export interface TourAddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
}

export interface TourImportantNotice {
  type: 'closure' | 'info' | 'tip' | 'warning';
  icon: string;
  message: string;
}

export interface DetailedTour {
  id: string;
  slug: string;
  status: 'active' | 'inactive';
  meta: TourMeta;
  media: DetailedTourMedia;
  overview: TourOverview;
  highlights: string[];
  description: string;
  itinerary: TourItineraryItem[];
  meeting_point: TourMeetingPoint;
  ticket_tiers: TourTicketTier[];
  add_ons: TourAddOn[];
  coach: {
    type: string;
    features: string[];
    peak_period_note?: string;
  };
  guide: {
    type: string;
    languages: string[];
    note?: string;
  };
  inclusions_summary: string[];
  exclusions_summary: string[];
  policies: {
    cancellation: {
      full_refund_before_hours: number;
      description: string;
    };
    booking: {
      confirmation: string;
      ticket_type: string;
      payment: string;
    };
    accessibility: {
      wheelchair_accessible: boolean;
      note?: string;
    };
    age_policy: {
      infant_free: boolean;
      infant_age_range: string;
      infant_condition: string;
      child_age_range: string;
    };
  };
  important_notices: TourImportantNotice[];
  reviews: {
    summary: {
      average_rating: number;
      total_count: number;
      breakdown: {
        "5_star": number;
        "4_star": number;
        "3_star": number;
        "2_star": number;
        "1_star": number;
      };
    };
  };
  booking: {
    cta_label: string;
    availability_endpoint: string;
    booking_endpoint: string;
    min_advance_booking_hours: number;
    operates: {
      days: string[];
      frequency: string;
      seasonal_note: string;
    };
  };
  trust_signals: {
    icon: string;
    label: string;
    sublabel: string;
  }[];
}
