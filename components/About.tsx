import React from 'react';
import { Target, Compass, Users, Zap, BookOpen, Award, Briefcase, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="bg-white dark:bg-slate-900 py-20 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">Who We Are</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            About Finwise Academy
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-500 dark:text-slate-400">
            Finwise Academy is committed to transforming financial education by equipping students with the essential skills to excel in the dynamic world of finance and trading. Our mission is to provide a blend of theoretical knowledge and hands-on experience, ensuring our students are confident traders and investors.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-brand-50 dark:bg-brand-900/20 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-100 dark:bg-brand-800 rounded-xl mb-6">
                <Compass className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                We aim to be the premier institution for financial education, setting the benchmark for excellence in teaching, innovation, and practical training. We cultivate a new generation of traders and financial experts who are not only knowledgeable but also ethical and responsible in their practices.
              </p>
              <ul className="space-y-3">
                {[
                  'Foster Innovation in curriculum',
                  'Promote Ethical Trading Practices',
                  'Encourage Lifelong Learning',
                  'Build a Collaborative Community',
                  'Impact Global Finance'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-200">
                    <Target className="h-5 w-5 text-accent-gold mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Vision" 
                className="rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                 <p className="font-bold text-brand-600 dark:text-brand-400 text-lg">100% Placement</p>
                 <p className="text-xs text-slate-500 dark:text-slate-400">Assistance & Career Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Your Career Path</h3>
            <p className="mt-3 text-slate-500 dark:text-slate-400">Upon completing the course, you will be well-equipped to pursue roles such as:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Investment Advisor",
                desc: "Guide clients on investments and financial strategies.",
                icon: <Users className="h-6 w-6" />
              },
              {
                title: "Equity Analyst",
                desc: "Analyze stocks and provide recommendations.",
                icon: <TrendingUp className="h-6 w-6" />
              },
              {
                title: "Portfolio Manager",
                desc: "Manage investment portfolios for clients.",
                icon: <Briefcase className="h-6 w-6" />
              },
              {
                title: "Risk Manager",
                desc: "Develop strategies to mitigate financial risks.",
                icon: <Award className="h-6 w-6" />
              }
            ].map((career, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-700 transition-colors">
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4 shadow-sm">
                  {career.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{career.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{career.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
             {['Broking Houses', 'Asset Management Companies', 'Hedge Funds', 'Banks'].map((item, i) => (
               <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
                 {item}
               </span>
             ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-12">
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Why Finwise Academy?</h3>
             <p className="mt-3 text-slate-500 dark:text-slate-400">Access best-in-class financial education with industry-recognized certifications.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Expert Instructors",
                desc: "Learn from industry leaders with years of real-market experience."
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Real-Time Trading",
                desc: "Practice live trading with advanced platforms in our trading floor environment."
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Career Support",
                desc: "We offer 100% placement assistance and dedicated career guidance."
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Flexible Learning",
                desc: "Choose between in-person (Offline) and online classes to fit your schedule."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-brand-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;