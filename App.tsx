
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketOverview from './components/MarketOverview';
import About from './components/About';
import Courses from './components/Courses';
import AiTutor from './components/AiTutor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ScrollProgress';
import TraderQuiz from './components/TraderQuiz';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 selection:bg-brand-500/30 selection:text-brand-900 dark:selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MarketOverview />
        <About />
        <TraderQuiz />
        <Courses />
        <AiTutor />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;