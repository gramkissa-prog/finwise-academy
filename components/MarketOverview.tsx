
import React, { useEffect, useState } from 'react';
import { Activity, ArrowUp, ArrowDown, PieChart, Zap } from 'lucide-react';

interface SectorData {
  name: string;
  change: string;
  value: number; // Numeric value for calculation
  positive: boolean;
}

const MarketOverview: React.FC = () => {
  const [sentiment, setSentiment] = useState(55); // 0-100 Scale
  const [sentimentLabel, setSentimentLabel] = useState('NEUTRAL');
  
  const [sectors, setSectors] = useState<SectorData[]>([
    { name: 'Nifty Bank', change: '+1.24%', value: 1.24, positive: true },
    { name: 'Nifty IT', change: '-0.45%', value: -0.45, positive: false },
    { name: 'Nifty Auto', change: '+0.85%', value: 0.85, positive: true },
    { name: 'Nifty Pharma', change: '-0.21%', value: -0.21, positive: false },
    { name: 'Nifty Metal', change: '+2.10%', value: 2.10, positive: true },
    { name: 'Nifty FMCG', change: '+0.15%', value: 0.15, positive: true },
  ]);

  // Simulation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Simulate Market Sentiment (Fear & Greed)
      setSentiment(prev => {
        // Random walk: add a small random value between -3 and +3
        const drift = (Math.random() * 6) - 3;
        let newValue = prev + drift;
        
        // Clamp between 10 and 90
        newValue = Math.max(10, Math.min(90, newValue));
        
        if (newValue > 60) setSentimentLabel('GREED');
        else if (newValue < 40) setSentimentLabel('FEAR');
        else setSentimentLabel('NEUTRAL');
        
        return newValue;
      });

      // 2. Simulate Sector Performance
      setSectors(prevSectors => prevSectors.map(sector => {
        // 30% chance to update a sector
        if (Math.random() > 0.7) {
            const drift = (Math.random() * 0.2) - 0.1; // Small fluctuation
            const newValue = sector.value + drift;
            return {
                ...sector,
                value: newValue,
                change: `${newValue >= 0 ? '+' : ''}${newValue.toFixed(2)}%`,
                positive: newValue >= 0
            };
        }
        return sector;
      }));

    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 py-12 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Market Mood Meter */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-inner relative overflow-hidden group transition-colors hover:shadow-lg">
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-brand-500" />
                  Market Mood
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Real-time sentiment simulation
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-500 transform scale-105 shadow-sm ${
                sentimentLabel === 'GREED' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                sentimentLabel === 'FEAR' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 
                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {sentimentLabel}
              </div>
            </div>
            
            {/* Custom Gauge CSS */}
            <div className="relative h-6 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-4 shadow-inner">
              <div 
                className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 relative"
                style={{ width: `${sentiment}%` }}
              >
                  {/* Shimmer effect on bar */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
              </div>
              {/* Needle Marker */}
              <div 
                className="absolute top-0 h-full w-1 bg-slate-800 dark:bg-white shadow-lg transform -translate-x-1/2 transition-all duration-1000 ease-out z-10"
                style={{ left: `${sentiment}%` }}
              ></div>
            </div>

            <div className="flex justify-between mt-2 text-xs font-mono text-slate-400 font-medium uppercase tracking-wider">
              <span>Extreme Fear</span>
              <span>Neutral</span>
              <span>Extreme Greed</span>
            </div>

             {/* Decorative pulsing blob */}
             <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-20 transition-colors duration-1000 ${
                sentiment > 60 ? 'bg-green-500' : sentiment < 40 ? 'bg-red-500' : 'bg-yellow-500'
             }`}></div>
          </div>

          {/* Sector Heatmap */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-inner relative overflow-hidden transition-colors hover:shadow-lg group">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-accent-gold" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sector Watch</h3>
              </div>
              <div className="flex items-center gap-1">
                 <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-slate-400 font-medium ml-1">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {sectors.map((sector, idx) => (
                <div 
                  key={idx}
                  className={`relative overflow-hidden flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-500 hover:scale-105 cursor-default ${
                    sector.positive 
                      ? 'bg-white dark:bg-slate-800 border-green-100 dark:border-green-900/30 shadow-[0_4px_20px_-12px_rgba(34,197,94,0.3)]' 
                      : 'bg-white dark:bg-slate-800 border-red-100 dark:border-red-900/30 shadow-[0_4px_20px_-12px_rgba(239,68,68,0.3)]'
                  }`}
                >
                  <span className="font-semibold text-xs text-slate-500 dark:text-slate-400 mb-1">{sector.name}</span>
                  <div className={`font-bold text-sm flex items-center ${sector.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {sector.positive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {sector.change}
                  </div>
                  {/* Micro-chart background simulation */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-30 ${sector.positive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
              ))}
            </div>
            
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Zap className="w-24 h-24 text-slate-900 dark:text-white" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
