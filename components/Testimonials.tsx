
import React from 'react';
import { Instagram, Play, ExternalLink, MoreVertical } from 'lucide-react';

const INSTAGRAM_REVIEWS = [
  {
    id: 1,
    title: "Student Profit & Reviews",
    // Using a reliable vertical stock market image
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDQ5OTk5NzQxOTAxODA4?story_media_id=3527717054268993821&igsh=YTRpYm81cGViOXp3"
  },
  {
    id: 2,
    title: "Live Class Experience",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDQ5OTk5NzQxOTAxODA4?story_media_id=3543185903297408343&igsh=YTRpYm81cGViOXp3"
  },
  {
    id: 3,
    title: "Success Stories",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDQ5OTk5NzQxOTAxODA4?story_media_id=3674225273752729538&igsh=YTRpYm81cGViOXp3"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-4 shadow-lg shadow-pink-500/20">
            <Instagram className="h-6 w-6 text-white" />
          </div>
           <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Student Highlights</h2>
           <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
             Watch real reviews and live market action from our students.
           </p>
        </div>
        
        {/* Mobile: Horizontal Snap Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar justify-start md:justify-center px-4 md:px-0">
          {INSTAGRAM_REVIEWS.map((review) => (
             <a 
               key={review.id} 
               href={review.link}
               target="_blank"
               rel="noopener noreferrer"
               className="snap-center shrink-0 w-[85vw] max-w-[350px] md:w-full group relative rounded-[2rem] overflow-hidden aspect-[9/16] shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2 border-[6px] border-slate-100 dark:border-slate-800 bg-slate-900"
             >
                {/* Dark background placeholder to prevent white-on-white invisible issue */}
                <div className="absolute inset-0 bg-slate-800" />
                
                {/* Background Image */}
                <img 
                  src={review.image} 
                  alt={review.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                />
                
                {/* Fake IG UI - Top Progress Bars */}
                <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
                   <div className="h-1 flex-1 bg-white/40 rounded-full overflow-hidden">
                     <div className="h-full w-2/3 bg-white rounded-full"></div>
                   </div>
                   <div className="h-1 flex-1 bg-white/40 rounded-full"></div>
                   <div className="h-1 flex-1 bg-white/40 rounded-full"></div>
                </div>

                {/* Fake IG UI - Profile Header */}
                <div className="absolute top-8 left-4 flex items-center gap-3 z-20">
                   <div className="relative">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-black p-[2px]">
                          <div className="w-full h-full bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xs">FA</div>
                        </div>
                     </div>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-white text-sm font-bold shadow-black drop-shadow-md leading-none">finwise_academy</span>
                      <span className="text-white/80 text-xs">Sponsored</span>
                   </div>
                   <MoreVertical className="ml-auto text-white w-5 h-5 drop-shadow-md" />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-pink-600 transition-all duration-300 border border-white/30 shadow-lg cursor-pointer">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                   </div>
                   <h3 className="text-white font-bold text-2xl drop-shadow-lg leading-tight">{review.title}</h3>
                </div>

                {/* Bottom Call to Action */}
                <div className="absolute bottom-8 left-0 right-0 px-6 z-20">
                    <div className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 transition-colors shadow-lg">
                       Watch on Instagram <ExternalLink className="w-4 h-4" />
                    </div>
                </div>
                
                {/* Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none"></div>
             </a>
          ))}
        </div>

        <div className="mt-12 text-center">
           <a 
             href="https://www.instagram.com/finwise_academy" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 rounded-full shadow-lg shadow-pink-500/25 transition-all hover:-translate-y-1"
           >
             <Instagram className="mr-2 h-5 w-5" />
             View More Highlights
           </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
