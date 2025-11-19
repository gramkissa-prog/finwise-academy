
import React, { useState, useEffect } from 'react';
import { TrendingUp, Coins, Calendar } from 'lucide-react';

const RoiCalculator: React.FC = () => {
  const [capital, setCapital] = useState(100000);
  const [monthlyReturn, setMonthlyReturn] = useState(5);
  const [years, setYears] = useState(3);
  const [totalValue, setTotalValue] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    // Compound Interest Formula: A = P(1 + r)^n
    // r = monthly return / 100
    // n = years * 12
    const r = monthlyReturn / 100;
    const n = years * 12;
    const amount = capital * Math.pow(1 + r, n);
    
    setTotalValue(Math.round(amount));
    setProfit(Math.round(amount - capital));
  }, [capital, monthlyReturn, years]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-brand-900 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text & Pitch */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-800 text-accent-gold text-sm font-semibold mb-6 border border-brand-700">
              <TrendingUp className="h-4 w-4 mr-2" />
              The Power of Compounding
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Turn Consistency into <span className="text-brand-400">Wealth</span>
            </h2>
            <p className="text-lg text-brand-200 mb-8 leading-relaxed">
              Trading isn't about doubling your money overnight. It's about consistent, small gains that compound over time. Use our calculator to see how a disciplined approach taught at Finwise can grow your capital.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-800 rounded-lg">
                    <Coins className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Realistic Targets</h4>
                    <p className="text-brand-300 text-sm">We teach you to aim for 3-5% monthly consistent returns rather than risky jackpots.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-800 rounded-lg">
                    <Calendar className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Long Term Vision</h4>
                    <p className="text-brand-300 text-sm">See how 3 years of discipline can multiply your capital by 5x or more.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Calculator */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-brand-700/30">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-500 rounded-full"></span>
              ROI Simulator
            </h3>

            {/* Input: Initial Capital */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 flex justify-between">
                <span>Initial Capital</span>
                <span className="font-bold text-brand-600 dark:text-brand-400">{formatCurrency(capital)}</span>
              </label>
              <input 
                type="range" 
                min="10000" 
                max="1000000" 
                step="10000" 
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>₹10k</span>
                <span>₹10L</span>
              </div>
            </div>

            {/* Input: Monthly Return */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 flex justify-between">
                <span>Expected Monthly Return</span>
                <span className="font-bold text-brand-600 dark:text-brand-400">{monthlyReturn}%</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="15" 
                step="0.5" 
                value={monthlyReturn}
                onChange={(e) => setMonthlyReturn(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>Conservative (1%)</span>
                <span>Aggressive (15%)</span>
              </div>
            </div>

            {/* Input: Duration */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 flex justify-between">
                <span>Duration</span>
                <span className="font-bold text-brand-600 dark:text-brand-400">{years} Years</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1" 
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            {/* Results Area */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-sm text-slate-500 dark:text-slate-400">Invested Amount</span>
                 <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(capital)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                 <span className="text-sm text-slate-500 dark:text-slate-400">Est. Profit</span>
                 <span className="font-semibold text-green-600 dark:text-green-400">+{formatCurrency(profit)}</span>
              </div>
              <div className="flex justify-between items-end">
                 <span className="text-base font-bold text-slate-700 dark:text-slate-300">Total Value</span>
                 <span className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">{formatCurrency(totalValue)}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 text-center italic">
              *Projections are for educational purposes. Market returns are subject to risk.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoiCalculator;
