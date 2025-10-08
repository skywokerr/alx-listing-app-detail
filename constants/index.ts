import { PropertyProps, Review } from '@/interfaces';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking", "Ocean View", "Private Garden", "Air Conditioning", "WiFi", "Kitchen"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    discount: ""
  },
  // ... include all other properties from previous implementation
];

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
    rating: 5,
    date: "March 2024",
    comment: "Absolutely stunning property! The ocean view was breathtaking and the amenities were top-notch. Would definitely stay here again."
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    rating: 4,
    date: "February 2024",
    comment: "Great location and beautiful villa. The pool was amazing and the staff was very helpful. Highly recommended!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    rating: 5,
    date: "January 2024",
    comment: "Perfect getaway! The villa exceeded our expectations. Everything was clean, modern, and comfortable."
  }
];

export const PROPERTY_IMAGES = [
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
];