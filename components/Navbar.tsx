
import React, { useState } from 'react';
import { Menu, X, TrendingUp, Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Courses', href: '#courses' },
    { name: 'FinBot', href: '#finbot' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex-shrink-0 flex items-center gap-2 group"
            >
              <div className="bg-brand-900 dark:bg-brand-800 p-1.5 rounded-lg group-hover:bg-brand-800 dark:group-hover:bg-brand-700 transition-colors">
                <TrendingUp className="h-6 w-6 text-accent-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-brand-900 dark:text-slate-100 leading-none transition-colors">
                  FINWISE <span className="text-brand-600 dark:text-brand-500">ACADEMY</span>
                </span>
                <span className="text-[0.65rem] font-medium text-accent-goldDark dark:text-accent-gold tracking-widest uppercase leading-none mt-1">
                  Where Money Talks
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors ${link.name === 'Quiz' ? 'text-brand-600 dark:text-brand-400 flex items-center gap-1' : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400'}`}
              >
                {link.name === 'Quiz' && <Brain className="h-4 w-4" />}
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <a 
              href="#courses" 
              onClick={(e) => scrollToSection(e, '#courses')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-lg shadow-brand-500/20"
            >
              Get Started
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-slate-600 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name === 'Quiz' && <Brain className="h-4 w-4" />}
                {link.name}
              </a>
            ))}
            <a 
              href="#courses" 
              onClick={(e) => scrollToSection(e, '#courses')}
              className="block w-full text-center mt-4 bg-brand-600 text-white px-3 py-3 rounded-md font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;