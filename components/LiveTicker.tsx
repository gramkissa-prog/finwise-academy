
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockItem {
  symbol: string;
  price: number;
  change: number;
}

// Static initial data that serves as the base for simulation
const INITIAL_STOCKS: StockItem[] = [
  { symbol: 'NIFTY 50', price: 22453.30, change: 0.85 },
  { symbol: 'SENSEX', price: 73915.15, change: 0.72 },
  { symbol: 'BANKNIFTY', price: 47852.40, change: -0.12 },
  { symbol: 'RELIANCE', price: 2985.55, change: 1.25 },
  { symbol: 'HDFCBANK', price: 1542.20, change: -0.45 },
  { symbol: 'TCS', price: 4120.10, change: 0.30 },
  { symbol: 'INFY', price: 1680.75, change: 0.95 },
  { symbol: 'ICICIBANK', price: 1085.30, change: -0.20 },
  { symbol: 'SBIN', price: 765.90, change: 1.10 },
  { symbol: 'TATAMOTORS', price: 988.45, change: -0.55 },
  { symbol: 'BAJFINANCE', price: 6840.00, change: 0.15 },
  { symbol: 'ADANIENT', price: 3150.20, change: 2.10 },
  { symbol: 'WIPRO', price: 480.50, change: -0.30 },
];

const LiveTicker: React.FC = () => {
  const [stocks, setStocks] = useState<StockItem[]>(INITIAL_STOCKS);

  // Simulation Engine: Creates realistic micro-movements
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(currentStocks => 
        currentStocks.map(stock => {
          // 40% chance to update any given stock per tick
          if (Math.random() > 0.6) {
            // Random volatility between -0.2% and +0.2%
            const volatility = 0.002; 
            const randomMove = (Math.random() * volatility * 2) - volatility;
            
            const newPrice = stock.price * (1 + randomMove);
            
            // Calculate new change % based on a fixed "opening price" reference
            // We estimate opening price by reversing the current change
            const openPrice = stock.price / (1 + stock.change / 100);
            const newChange = ((newPrice - openPrice) / openPrice) * 100;

            return {
              ...stock,
              price: newPrice,
              change: newChange
            };
          }
          return stock;
        })
      );
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 overflow-hidden py-2.5 relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      
      {/* animate-scroll is defined in global CSS */}
      <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
        {/* Duplicate list 4 times to ensure smooth infinite scrolling for wide screens */}
        {[...stocks, ...stocks, ...stocks, ...stocks].map((stock, index) => {
          const isUp = stock.change >= 0;
          return (
            <div key={`${stock.symbol}-${index}`} className="flex items-center mx-6 space-x-2 group cursor-default transition-opacity hover:opacity-80">
              <span className="font-bold text-slate-400 text-xs tracking-wider">{stock.symbol}</span>
              <span className="text-white text-sm font-mono font-medium w-20 text-right">
                {stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className={`flex items-center text-xs font-bold w-16 ${isUp ? 'text-green-400' : 'text-red-400'}`}>
                {isUp ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                {Math.abs(stock.change).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveTicker;
