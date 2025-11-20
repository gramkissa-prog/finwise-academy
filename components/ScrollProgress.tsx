
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const percentage = (scrollPosition / totalHeight) * 100;
      setWidth(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-accent-gold transition-all duration-100 ease-out shadow-[0_0_10px_rgba(58,162,117,0.5)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
