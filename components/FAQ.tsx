
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do I need a finance background to join?",
    answer: "Not at all! Our 'Course I: Basics of Stock Market' is designed specifically for beginners with zero prior knowledge. We start from the absolute fundamentals."
  },
  {
    question: "Are the classes online or offline?",
    answer: "We offer both! You can attend physical classes at our Patna center to experience the live trading floor, or join our interactive live online sessions from anywhere."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, Finwise Academy provides 100% placement assistance upon successful completion of our advanced courses. We have tie-ups with top broking houses and advisory firms."
  },
  {
    question: "Can I trade while doing a full-time job?",
    answer: "Absolutely. We teach strategies for Swing Trading and Long-term investing that require minimal screen time, perfect for working professionals."
  },
  {
    question: "What is the 'Live Trading Floor' experience?",
    answer: "Unlike recorded lectures, our students sit with mentors during live market hours (9:15 AM - 3:30 PM) to analyze real-time data, execute trades, and manage emotions practically."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-brand-100 dark:bg-brand-900/30 rounded-full mb-4">
            <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:border-brand-300 dark:hover:border-brand-600"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180 text-brand-500' : ''
                  }`} 
                />
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
