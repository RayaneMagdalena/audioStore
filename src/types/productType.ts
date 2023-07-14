
export interface Product {
    imageUrl: string;
    rating: number;
    price: string;
    name: string;
    description: string;
    category: string;
    created_at: string;
    reviews: Review[];
    id: number;
  }
  
  export interface Review {
    user: string;
    description: string;
    rating: number;
    date: string;
    id: number;
  }
  