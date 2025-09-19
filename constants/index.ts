export const APP_NAME = 'ALX Listing App';
export const APP_DESCRIPTION = 'A modern Airbnb clone for property listings';


// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';
export const LISTINGS_ENDPOINT = `${API_BASE_URL}/listings`;
export const BOOKING_ENDPOINT = `${API_BASE_URL}/bookings`;

// UI text
export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  ERROR: 'Something went wrong. Please try again.',
};