
export enum CourseLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  level: CourseLevel;
  duration: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface NewsItem {
  headline: string;
  summary: string;
  category: 'Indian Market' | 'Forex' | 'Global' | 'Crypto';
  sentiment: 'Positive' | 'Negative' | 'Neutral';
  timestamp: string;
}
