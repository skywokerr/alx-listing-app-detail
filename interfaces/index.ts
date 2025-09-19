export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
}

// Additional interfaces can be added here as the project grows
export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  rating: number;
}