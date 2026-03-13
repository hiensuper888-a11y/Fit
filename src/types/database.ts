export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  tag: string;
  created_at?: string;
}

export interface Workout {
  id: string;
  title: string;
  level: string;
  duration: string;
  calories: string;
  image: string;
  category: string;
  created_at?: string;
}
