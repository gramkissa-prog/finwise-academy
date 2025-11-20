
import React, { useRef, useState, useEffect } from 'react';
import { COURSES } from '../constants';
import { CheckCircle, Clock, BarChart, CalendarDays } from 'lucide-react';

// 3D Tilt Card Component
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation degrees (limit to +/- 10 degrees)
    const rotateXVal = ((y - centerY) / centerY) * -5;
    const rotateYVal = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      ref={cardRef}
      className={`transform transition-transform duration-200 ease-out preserve-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      {children}
    </div>
  );
};

const Courses: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Set a dummy future date (e.g., 3 days from now) for the batch countdown
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(10, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        // Reset if expired
        targetDate.setDate(targetDate.getDate() + 7);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);
  
  const getWhatsAppLink = (courseId: string, courseTitle: string) => {
    const phoneNumber = "917739877908";
    let message = "";
    
    switch(courseId) {
      case 'smart-traders':
        message = "Hi FinWise! I want to become a pro trader. I'm interested in your flagship 'Smart Traders Course'. Please share details about the 3-month program and fee structure.";
        break;
      case 'c1':
        message = "Hello, I am a beginner looking to start my journey with 'Course I: Basics of Stock Market'. Please guide me on how to enroll and the upcoming batch timings.";
        break;
      case 'c2':
        message = "Hi team, I want to master charts. I'm interested in 'Course II: Technical Analysis'. Could you share the curriculum and next batch date?";
        break;
      case 'c3':
        message = "Hello, I want to learn F&O strategies. Please provide details for 'Course III: Derivatives Markets' and the fee structure.";
        break;
      case 'c4':
        message = "Hi, I'm interested in global markets and want to join 'Course IV: Forex & Commodity Trading'. Please share the course schedule.";
        break;
      case 'c5':
        message = "Hello, I want to learn long-term investing via 'Course V: Fundamental Analysis'. Please let me know the admission process.";
        break;
      default:
        message = `Hey, I'm interested in enrolling for the "${courseTitle}" at FinWise Academy. Could you please share the details?`;
    }
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="courses" className="bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">Our Curriculum</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-slate-900 dark:text-white sm:text-4xl transition-colors">
            Choose Your Path to Profitability
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto transition-colors">
            Structured learning paths designed for every level of trader, from complete beginners to F&O experts.
          </p>
          
          {/* Batch Countdown Badge */}
          <div className="mt-8 inline-flex items-center bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
             <CalendarDays className="w-4 h-4 mr-2" />
             Next Batch Starts In: {timeLeft.days} Days {timeLeft.hours} Hours
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {COURSES.map((course) => (
            <TiltCard key={course.id} className="group flex flex-col rounded-2xl shadow-lg hover:shadow-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 overflow-hidden">
              <div className="flex-shrink-0 h-48 w-full relative overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={course.image} alt={course.title} />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-800 dark:text-brand-300 shadow-sm uppercase tracking-wide z-10">
                  {course.level}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-800 p-6 flex flex-col justify-between transition-colors">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                     <span className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                       <Clock className="mr-1.5 h-4 w-4" />
                       {course.duration}
                     </span>
                     <span className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                       <BarChart className="mr-1.5 h-4 w-4" />
                       Live Classes
                     </span>
                  </div>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{course.title}</p>
                    <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{course.description}</p>
                  </a>
                  
                  <div className="mt-6 border-t border-slate-100 dark:border-slate-700 pt-6 transition-colors">
                     <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-3">What you'll learn</h4>
                     <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                           <li key={index} className="flex items-start">
                              <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 dark:text-green-400" />
                              <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{course.price}</span>
                    <span className="ml-2 text-sm font-medium text-slate-400 dark:text-slate-500 line-through">{course.originalPrice}</span>
                  </div>
                  <a 
                    href={getWhatsAppLink(course.id, course.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg transform active:scale-95 inline-block text-center cursor-pointer"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
