
import React from 'react';
import { TrendingUp, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-brand-950 text-white pt-16 pb-8 border-t border-brand-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
             <div className="flex items-center gap-2 mb-6">
               <div className="bg-brand-900 p-1 rounded">
                  <TrendingUp className="h-6 w-6 text-accent-gold" />
               </div>
               <span className="font-bold text-xl tracking-tight leading-none">
                  FINWISE <span className="text-brand-500">ACADEMY</span>
               </span>
             </div>
             <p className="text-brand-200 text-sm leading-relaxed">
               <span className="font-semibold text-accent-gold block mb-2">Where Money Talks</span>
               Empowering Indian traders with knowledge, discipline, and strategies to navigate the stock markets successfully.
             </p>
          </div>
          
          <div>
             <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
             <ul className="space-y-4 text-sm text-brand-200">
               <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-accent-gold transition-colors cursor-pointer">Home</a></li>
               <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-accent-gold transition-colors cursor-pointer">About Us</a></li>
               <li><a href="#courses" onClick={(e) => scrollToSection(e, '#courses')} className="hover:text-accent-gold transition-colors cursor-pointer">Courses</a></li>
               <li><a href="#finbot" onClick={(e) => scrollToSection(e, '#finbot')} className="hover:text-accent-gold transition-colors cursor-pointer">FinBot</a></li>
             </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
             <ul className="space-y-4 text-sm text-brand-200">
               <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-brand-500 mt-1 flex-shrink-0" />
                  <span>7739877908 / 6207814252</span>
               </li>
               <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-brand-500 mt-1 flex-shrink-0" />
                  <span>info@finwiseacademy.com</span>
               </li>
               <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-brand-500 mt-1 flex-shrink-0" />
                  <span>102, 3rd floor, Adharshila Complex, South of RBI, In front of gate no.9, Gandhi Maidan, Patna, Bihar-800001</span>
               </li>
             </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6 text-white">Social Media</h3>
             <p className="text-xs text-brand-300 leading-relaxed mb-4">
               Follow us for daily market updates and trading tips.
             </p>
             <div className="flex space-x-4 mt-6">
               <a href="https://www.instagram.com/finwise_academy?igsh=MjlkbXR0dWNyeWts" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-accent-gold transition-colors"><Instagram className="h-5 w-5" /></a>
               <a href="https://www.linkedin.com/company/finwise-academy" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-accent-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
               <a href="https://www.youtube.com/@finwise_academy" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-accent-gold transition-colors"><Youtube className="h-5 w-5" /></a>
               <a href="https://x.com/finwise_academy" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-accent-gold transition-colors"><Twitter className="h-5 w-5" /></a>
               <a href="https://www.facebook.com/finwise_academy" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-accent-gold transition-colors"><Facebook className="h-5 w-5" /></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-400">
           <p>&copy; {new Date().getFullYear()} Finwise Academy. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-200">Privacy Policy</a>
              <a href="#" className="hover:text-brand-200">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;