import { DetailedTour } from "@/types/tour";

export const DEMO_TOUR_DATA: DetailedTour = {
  "id": "gt-windsor-bath-stonehenge-001",
  "slug": "windsor-castle-bath-stonehenge-tour",
  "status": "active",

  "meta": {
    "title": "Windsor Castle, Bath & Stonehenge Day Tour from London",
    "short_title": "Windsor, Bath & Stonehenge",
    "tagline": "Three of Britain's National Treasures in One Day",
    "description": "Explore Windsor Castle, the mystical Stonehenge, and the Roman city of Bath on a luxury air-conditioned coach tour from London. An expert guide brings each destination to life.",
    "seo": {
      "meta_title": "Windsor Castle, Bath & Stonehenge Day Trip from London | Golden Tours",
      "meta_description": "Visit Windsor Castle, Stonehenge & Bath in one unforgettable day trip from London. Luxury coach, expert guide & flexible ticket options. Book now!",
      "keywords": [
        "day trip from london",
        "windsor castle tour",
        "stonehenge tour",
        "bath day trip",
        "golden tours london"
      ],
      "canonical_url": "https://www.goldentours.com/day-trips-from-london/windsor-castle-bath-stonehenge-tour"
    }
  },

  "media": {
    "hero_image": {
      "url": "/assets/images/tours/windsor-bath-stonehenge-hero.jpg",
      "alt": "Stonehenge at sunset with tour group",
      "width": 1920,
      "height": 1080
    },
    "gallery": [
      {
        "id": "img-001",
        "url": "/assets/images/tours/tour1.webp",
        "alt": "Windsor Castle exterior",
        "caption": "Windsor Castle – the King's royal residence"
      },
      {
        "id": "img-002",
        "url": "/assets/images/tours/tour2.webp",
        "alt": "Stonehenge stone circle",
        "caption": "The 5,000-year-old Stonehenge on Salisbury Plains"
      },
      {
        "id": "img-003",
        "url": "/assets/images/tours/tour3.webp",
        "alt": "Roman Baths in Bath",
        "caption": "The Roman Baths – one of the best-preserved Roman remains in the world"
      },
      {
        "id": "img-004",
        "url": "/assets/images/tours/tour4.webp",
        "alt": "Pulteney Bridge Bath",
        "caption": "Pulteney Bridge over the River Avon"
      }
    ],
    "video": {
      "youtube_id": "XVjHeQF8RHQ",
      "embed_url": "https://www.youtube.com/embed/XVjHeQF8RHQ?si=92XDFbvY8MC5sa2W",
      "thumbnail_url": "/assets/images/tours/tour5.jpg",
      "title": "Windsor Castle, Bath & Stonehenge Tour – Golden Tours"
    }
  },

  "overview": {
    "duration": {
      "hours": 10.5,
      "label": "Approx. 10.5 hours",
      "departure_time": "08:00",
      "checkin_time": "07:30",
      "return_time_estimate": "19:00",
      "note": "Return time may vary due to traffic and closures"
    },
    "operator": "Golden Tours",
    "category": "Day Trips from London",
    "type": "Group Coach Tour",
    "languages": [
      "English",
      "French",
      "Spanish",
      "Portuguese",
      "Italian",
      "Chinese",
      "Japanese"
    ],
    "group_size": {
      "max": 55,
      "note": "Shared coach tour"
    },
    "badge": {
      "label": "Best Seller",
      "color": "#FF6B00"
    }
  },

  "highlights": [
    "Visit the 5,000-year-old Stonehenge stone circle on Salisbury Plains",
    "Explore Windsor Castle – the King's official royal residence",
    "Discover the UNESCO World Heritage city of Bath with an expert guide",
    "Visit St George's Chapel, the final resting place of Queen Elizabeth II",
    "Travel in a modern, air-conditioned luxury coach with Wi-Fi and USB chargers",
    "Optional: Witness the Changing of the Guard (Thursdays & Saturdays)",
    "Award-winning Stonehenge Visitor Centre with 250 archaeological artefacts",
    "Visit the Roman Baths – one of the best-preserved Roman spas in the world"
  ],

  "description": "Windsor Castle\nStart your British adventure in Windsor Castle. As the oldest and largest occupied castle in the world, Windsor Castle has been home to the British monarchy for over 900 years.",

  "itinerary": [
    {
      "time": "07:30",
      "event": "Check-in at Stop Z6, outside 50 Grosvenor Gardens, London SW1W 0BD"
    },
    {
      "time": "08:00",
      "event": "Depart London on luxury air-conditioned coach"
    },
    {
      "time": "09:30",
      "event": "Arrive Windsor – explore the castle and/or town (approx. 2 hours)"
    },
    {
      "time": "11:30",
      "event": "Depart Windsor towards Stonehenge"
    },
    {
      "time": "13:00",
      "event": "Arrive Stonehenge – visit the stone circle and visitor centre (approx. 1.5 hours)"
    },
    {
      "time": "14:30",
      "event": "Depart Stonehenge towards Bath"
    },
    {
      "time": "16:00",
      "event": "Arrive Bath – guided walking tour and free time (approx. 3 hours)"
    },
    {
      "time": "19:00",
      "event": "Depart Bath, return to London"
    },
    {
      "time": "~20:00",
      "event": "Estimated return to London (traffic dependent)"
    }
  ],

  "meeting_point": {
    "name": "Stop Z6 – Outside 50 Grosvenor Gardens",
    "address": "50 Grosvenor Gardens, London, SW1W 0BD",
    "coordinates": {
      "lat": 51.496,
      "lng": -0.1477
    },
    "checkin_instructions": "Check in at 07:30. Look for the Golden Tours bus. Tour departs promptly at 08:00.",
    "nearest_transport": [
      {
        "type": "Underground",
        "station": "Victoria",
        "walk_time": "10-15 min"
      },
      {
        "type": "Train",
        "station": "London Victoria",
        "walk_time": "10-15 min"
      },
      {
        "type": "Bus",
        "station": "Victoria Coach Station",
        "walk_time": "5 min"
      }
    ]
  },

  "ticket_tiers": [
    {
      "id": "essential",
      "name": "Essential",
      "tagline": "Transport & guide only – explore at your own pace",
      "description": "Travel in comfort on the coach with a live informative guide. No attraction entries included – you have free time to explore each destination at your leisure.",
      "pricing": {
        "currency": "GBP",
        "adult": {
          "price": 59,
          "label": "Adult (16+)"
        },
        "child": {
          "price": 49,
          "label": "Child (3–15)"
        },
        "infant": {
          "price": 0,
          "label": "Infant (0–2)",
          "note": "Free when seated on parent's lap"
        }
      },
      "inclusions": [
        "Return luxury coach transport",
        "Professional live guide",
        "Wi-Fi & USB charging on coach"
      ],
      "exclusions": [
        "Windsor Castle entry",
        "Stonehenge entry",
        "Roman Baths entry"
      ],
      "badge": null
    },
    {
      "id": "essential_plus",
      "name": "Essential Plus",
      "tagline": "Coach, guide & Stonehenge entry",
      "description": "Journey to your destinations with a live guide. Includes Stonehenge entry for an in-depth visit to the ancient monument.",
      "pricing": {
        "currency": "GBP",
        "adult": {
          "price": 89,
          "label": "Adult (16+)"
        },
        "child": {
          "price": 69,
          "label": "Child (3–15)"
        },
        "infant": {
          "price": 0,
          "label": "Infant (0–2)",
          "note": "Free when seated on parent's lap"
        }
      },
      "inclusions": [
        "Return luxury coach transport",
        "Professional live guide",
        "Wi-Fi & USB charging on coach",
        "Stonehenge entry ticket",
        "Multilingual audio guide at Stonehenge"
      ],
      "exclusions": [
        "Windsor Castle entry",
        "Roman Baths entry"
      ],
      "badge": null
    },
    {
      "id": "classic",
      "name": "Classic",
      "tagline": "Most popular – all main entries included",
      "description": "The complete experience. Includes entry to Windsor Castle, Stonehenge, and the Roman Baths for an immersive visit to all three iconic sites.",
      "pricing": {
        "currency": "GBP",
        "adult": {
          "price": 139,
          "label": "Adult (16+)"
        },
        "child": {
          "price": 109,
          "label": "Child (3–15)"
        },
        "infant": {
          "price": 0,
          "label": "Infant (0–2)",
          "note": "Free when seated on parent's lap"
        }
      },
      "inclusions": [
        "Return luxury coach transport",
        "Professional live guide",
        "Wi-Fi & USB charging on coach",
        "Windsor Castle entry (State Apartments)",
        "Stonehenge entry ticket",
        "Multilingual audio guide at Stonehenge",
        "Roman Baths & Pump Rooms entry"
      ],
      "exclusions": [],
      "badge": {
        "label": "Most Popular",
        "color": "#2E7D32"
      }
    },
    {
      "id": "signature",
      "name": "Signature",
      "tagline": "Premium seats, all entries & a packed lunch",
      "description": "The ultimate day out. Enjoy premium front-of-coach seating, all attraction entries, and a packed lunch. The best views and the best experience.",
      "pricing": {
        "currency": "GBP",
        "adult": {
          "price": 169,
          "label": "Adult (16+)"
        },
        "child": {
          "price": 129,
          "label": "Child (3–15)"
        },
        "infant": {
          "price": 0,
          "label": "Infant (0–2)",
          "note": "Free when seated on parent's lap"
        }
      },
      "inclusions": [
        "Return luxury coach transport",
        "Premium seating (best views on the coach)",
        "Professional live guide",
        "Wi-Fi & USB charging on coach",
        "Windsor Castle entry (State Apartments)",
        "Stonehenge entry ticket",
        "Multilingual audio guide at Stonehenge",
        "Roman Baths & Pump Rooms entry",
        "Packed lunch"
      ],
      "exclusions": [],
      "badge": {
        "label": "Premium",
        "color": "#B8860B"
      }
    }
  ],

  "add_ons": [
    {
      "id": "ar-stonehenge",
      "name": "Stonehenge Augmented Reality Experience",
      "description": "See how Stonehenge looked in ancient times using AR on your device.",
      "price": 5,
      "currency": "GBP"
    }
  ],

  "coach": {
    "type": "Luxury air-conditioned coach",
    "features": [
      "Air conditioning",
      "Wi-Fi",
      "USB charging ports",
      "Reclining seats",
      "Deep-cleaned daily"
    ],
    "peak_period_note": "During peak periods, additional vehicles without Wi-Fi and USB chargers may be used."
  },

  "guide": {
    "type": "Professional live guide",
    "languages": [
      "English"
    ],
    "note": "Multi-language tours available – contact for details. Guide does not accompany guests inside Windsor Castle or at the Stonehenge site due to local rules but provides full briefings beforehand."
  },

  "inclusions_summary": [
    "Return transport on a luxury coach",
    "Professional live tour guide",
    "E-ticket (no paper required)",
    "25% discount on Stonehenge guidebooks (show wristband)"
  ],
  "exclusions_summary": [
    "Lunch (not included in Essential, Essential Plus, or Classic tiers)",
    "Attraction entries (depends on tier selected)",
    "Personal expenses and gratuities"
  ],

  "policies": {
    "cancellation": {
      "full_refund_before_hours": 24,
      "description": "Cancel up to 24 hours before departure for a full refund. No refund within 24 hours of travel."
    },
    "booking": {
      "confirmation": "Instant e-ticket confirmation via email",
      "ticket_type": "E-ticket (mobile or printed accepted)",
      "payment": "Full payment at time of booking"
    },
    "accessibility": {
      "wheelchair_accessible": false,
      "note": "Windsor Castle and Stonehenge have uneven terrain. Comfortable walking shoes recommended."
    },
    "age_policy": {
      "infant_free": true,
      "infant_age_range": "0–2",
      "infant_condition": "Must sit on parent's lap",
      "child_age_range": "3–15"
    }
  },

  "important_notices": [
    {
      "type": "closure",
      "icon": "warning",
      "message": "Windsor Castle is closed on Tuesdays and Wednesdays. A guided walking tour of Windsor town will operate on these days. Please select an option that does NOT include Windsor Castle entry if travelling on these days."
    },
    {
      "type": "closure",
      "icon": "info",
      "message": "St George's Chapel is closed to visitors on Sundays. Worshippers are welcome to attend services."
    },
    {
      "type": "info",
      "icon": "info",
      "message": "Windsor Castle is a working royal palace. Planned closures or disruptions may occur with little notice."
    },
    {
      "type": "tip",
      "icon": "tip",
      "message": "Download the 'Stonehenge Audio Tour' from the App Store in advance to enhance your visit."
    }
  ],

  "reviews": {
    "summary": {
      "average_rating": 4.7,
      "total_count": 5590,
      "breakdown": {
        "5_star": 4100,
        "4_star": 980,
        "3_star": 300,
        "2_star": 120,
        "1_star": 90
      }
    }
  },

  "booking": {
    "cta_label": "Book Now",
    "availability_endpoint": "/api/tours/gt-windsor-bath-stonehenge-001/availability",
    "booking_endpoint": "/api/bookings/create",
    "min_advance_booking_hours": 2,
    "operates": {
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "frequency": "Daily",
      "seasonal_note": "Year-round operation"
    }
  },

  "trust_signals": [
    {
      "icon": "shield",
      "label": "Free cancellation",
      "sublabel": "Up to 24 hours before travel"
    },
    {
      "icon": "star",
      "label": "4.7 / 5 rating",
      "sublabel": "Based on 5,590 reviews"
    },
    {
      "icon": "ticket",
      "label": "Instant e-ticket",
      "sublabel": "No printing required"
    },
    {
      "icon": "coach",
      "label": "Luxury coach",
      "sublabel": "Air-conditioned, Wi-Fi, USB charging"
    },
    {
      "icon": "guide",
      "label": "Expert live guide",
      "sublabel": "Professional & multilingual options"
    }
  ]
};
