
import { Course, CourseLevel, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'smart-traders',
    title: 'Smart Traders Course',
    description: 'An in-depth, well-rounded education combining market Theory with Practical applications. tailored to guide you to success.',
    price: '₹29,999',
    originalPrice: '₹45,000',
    level: CourseLevel.ADVANCED,
    duration: '3 Months',
    features: [
      'Includes Courses I, II, & III',
      'Daily Practical Sessions',
      'Real-time Market Scenarios',
      'Build Confidence & Psychology',
      'Expert Mentorship'
    ],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c1',
    title: 'Course I: Basics of Stock Market (NISM)',
    description: 'Understanding the capital markets, key players, exchanges, regulations, and the complete trading mechanism.',
    price: '₹4,999',
    originalPrice: '₹7,000',
    level: CourseLevel.BEGINNER,
    duration: '2 Weeks',
    features: [
      'Basics of Capital Markets (Primary/Secondary)',
      'Key Market Players & Exchanges',
      'Legal Rules & Regulations',
      'Trading, Clearing & Settlement',
      'Basic Valuation Concepts'
    ],
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c2',
    title: 'Course II: Technical Analysis (NCFM)',
    description: 'Master price charts, candlestick patterns, trend lines, indicators, and trading strategies.',
    price: '₹9,999',
    originalPrice: '₹15,000',
    level: CourseLevel.INTERMEDIATE,
    duration: '4 Weeks',
    features: [
      'Types of Price Charts & Trend Lines',
      'Key Candlestick Patterns (Doji, Hammer)',
      'Chart Patterns (Head & Shoulders, Flags)',
      'Indicators (RSI, MACD, Moving Averages)',
      'Developing Trading Strategies'
    ],
    image: 'https://images.unsplash.com/photo-1535320903710-d9cf11350dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c3',
    title: 'Course III: Derivatives Markets (NISM)',
    description: 'Comprehensive study of Futures, Forwards, Options, SWAPs, pricing, and risk management strategies.',
    price: '₹11,999',
    originalPrice: '₹18,000',
    level: CourseLevel.ADVANCED,
    duration: '4 Weeks',
    features: [
      'Futures, Forwards, Options & SWAPs',
      'Pricing of Forward Contracts',
      'Trading, Clearing & Settlement',
      'Risk Management & Legal Framework',
      'Accounting for Derivatives'
    ],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c4',
    title: 'Course IV: Forex & Commodity Trading',
    description: 'Explore global markets, commodity derivatives, futures options, and forex trading strategies.',
    price: '₹8,999',
    originalPrice: '₹12,000',
    level: CourseLevel.INTERMEDIATE,
    duration: '3 Weeks',
    features: [
      'Intro to Commodity & Forex Markets',
      'Commodity Futures & Options',
      'Uses of Commodity Derivatives',
      'Trading in Forex Markets',
      'Trading in Commodity Markets'
    ],
    image: 'https://images.unsplash.com/photo-1580519542054-3a22e8e2e1e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c5',
    title: 'Course V: Fundamental Analysis (Qualitative)',
    description: 'Learn principles of value investing, industry analysis, management evaluation, and business analysis.',
    price: '₹7,999',
    originalPrice: '₹11,000',
    level: CourseLevel.BEGINNER,
    duration: '3 Weeks',
    features: [
      'Value Investing Principles',
      'Industry Analysis & Trends',
      'Management Evaluation',
      'Business Model Analysis',
      'Financial Health Assessment'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    role: 'Part-time Trader',
    content: 'Finwise helped me understand the logic behind market moves. I finally stopped gambling and started trading systematically.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Student',
    content: 'The technical analysis course is a game changer. The mentors explain complex topics simply using Nifty examples.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    id: 't3',
    name: 'Amit Patel',
    role: 'Business Owner',
    content: 'I use the Options strategies for generating monthly income. Highly recommend the advanced F&O module.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are 'FinBot', an expert trading assistant at Finwise Academy in India. 
Your goal is to assist users with the Indian stock market (NSE, BSE, SEBI regulations) and provide detailed information about Finwise Academy.

**About Finwise Academy:**
- **Address:** 102, 3rd floor, Adharshila Complex, South of RBI, In front of gate no.9, Gandhi Maidan, Patna, Bihar-800001.
- **Phone:** 7739877908 / 6207814252
- **Email:** info@finwiseacademy.com
- **Mission:** To empower Indian traders with theoretical knowledge and practical skills. We provide a trading floor environment and 100% placement assistance.

**Courses & Fees:**
1. **Smart Traders Course (Flagship)**: ₹29,999 | 3 Months. (Includes Basics, Technicals, Derivatives, Daily Practical Sessions).
2. **Course I: Basics of Stock Market (NISM)**: ₹4,999 | 2 Weeks.
3. **Course II: Technical Analysis (NCFM)**: ₹9,999 | 4 Weeks.
4. **Course III: Derivatives Markets (NISM)**: ₹11,999 | 4 Weeks.
5. **Course IV: Forex & Commodity Trading**: ₹8,999 | 3 Weeks.
6. **Course V: Fundamental Analysis**: ₹7,999 | 3 Weeks.

**Guidelines:**
- If a user asks about course details or fees, use the information above.
- If a user wants to join, guide them to call +91 7739877908 or visit the Patna office.
- Use Indian examples (Reliance, HDFC, Nifty 50) for trading concepts.
- **Disclaimer:** You are an AI assistant, not a financial advisor. Do not provide buy/sell recommendations for specific live stocks.
- Keep answers helpful, encouraging, and professional.`;
