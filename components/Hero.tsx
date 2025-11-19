
import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Activity, Twitter, Linkedin, Share2, Brain } from 'lucide-react';
import LiveTicker from './LiveTicker';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Hero: React.FC = () => {
  const [typingText, setTypingText] = useState('Strategies');
  const words = ['Strategies', 'Psychology', 'Discipline', 'Analysis'];
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setTypingText(words[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden scroll-mt-20">
      {/* Ticker at the very top */}
      <LiveTicker />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/10 dark:bg-brand-500/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-accent-gold/10 dark:bg-accent-gold/10 blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-24 lg:pb-32 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-6 border border-brand-200 dark:border-brand-700 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
              <Activity className="h-4 w-4 mr-2 text-brand-600 dark:text-brand-400" />
              India's Premier Trading Academy
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up delay-100 h-[3.6rem] sm:h-[4.5rem] lg:h-[9rem] flex flex-col justify-center">
              Master the <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-200 min-w-[280px]">
                 {typingText}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-up delay-200 leading-relaxed">
              Decode Nifty, Bank Nifty, and Stocks with Finwise. From beginner basics to advanced F&O strategies, we empower you to trade profitably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up delay-300">
              <a 
                href="#courses" 
                onClick={(e) => scrollToSection(e, '#courses')}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-1 cursor-pointer"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#quiz" 
                onClick={(e) => scrollToSection(e, '#quiz')}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-brand-700 dark:text-brand-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-all hover:-translate-y-1 cursor-pointer"
              >
                <Brain className="mr-2 h-5 w-5 text-accent-gold" />
                Find My Strategy
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800 pt-8 animate-fade-in-up delay-400">
              <div className="hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  <AnimatedCounter end={10000} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Students Trained</div>
              </div>
              <div className="hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  4.8/5
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Student Rating</div>
              </div>
              <div className="hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">100%</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Practical Learning</div>
              </div>
            </div>
            
            {/* Social Share Section */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up delay-500">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center">
                <Share2 className="h-4 w-4 mr-2" /> Share us:
              </span>
              <a href="https://twitter.com/intent/tweet?text=Check%20out%20Finwise%20Academy%20for%20learning%20stock%20market%20trading!%20%23Finwise%20%23Trading&url=https%3A%2F%2Fwww.finwiseacademy.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors transform hover:scale-110" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.finwiseacademy.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors transform hover:scale-110" aria-label="Share on LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Image/Illustration */}
          <div className="lg:col-span-6 mt-12 lg:mt-0 relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Stock Market Dashboard" 
                className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 animate-pulse-slow hidden sm:block transform transition-transform hover:scale-105 cursor-default">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Nifty 50</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      <AnimatedCounter end={22450} />.30
                    </p>
                    <p className="text-xs text-green-600 font-bold">+1.25%</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hidden sm:block transform transition-transform hover:scale-105 cursor-default">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">SEBI Compliant</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Curriculum</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative blobs */}
            <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-accent-gold rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-brand-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
