
import React, { useState } from 'react';
import { Brain, TrendingUp, ArrowRight, CheckCircle2, RefreshCcw, Shield, Zap, Clock, BarChart3, Wallet, GraduationCap, Briefcase, Coins, Activity, MessageCircle } from 'lucide-react';
import { CourseLevel } from '../types';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    points: number;
    icon: React.ReactNode;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What is your current experience with the Stock Market?",
    options: [
      { text: "I'm a complete beginner.", points: 1, icon: <GraduationCap className="w-5 h-5" /> },
      { text: "I invest occasionally but don't trade.", points: 2, icon: <Wallet className="w-5 h-5" /> },
      { text: "I trade actively but struggle with consistency.", points: 3, icon: <TrendingUp className="w-5 h-5" /> }
    ]
  },
  {
    id: 2,
    text: "How much time can you dedicate to the market daily?",
    options: [
      { text: "Very little (30 mins - 1 hr).", points: 1, icon: <Clock className="w-5 h-5" /> },
      { text: "1-2 hours for analysis.", points: 2, icon: <Brain className="w-5 h-5" /> },
      { text: "I can watch the live market (9:15 - 3:30).", points: 3, icon: <Zap className="w-5 h-5" /> }
    ]
  },
  {
    id: 3,
    text: "What interests you the most?",
    options: [
      { text: "Understanding companies & economy.", points: 1, icon: <Shield className="w-5 h-5" /> },
      { text: "Reading price charts & patterns.", points: 2, icon: <BarChart3 className="w-5 h-5" /> },
      { text: "Fast-paced buying/selling (F&O).", points: 3, icon: <Activity className="w-5 h-5" /> }
    ]
  },
   {
    id: 4,
    text: "How do you handle financial risk?",
    options: [
      { text: "I prefer safety over high returns.", points: 1, icon: <Shield className="w-5 h-5" /> },
      { text: "I take calculated risks.", points: 2, icon: <Brain className="w-5 h-5" /> },
      { text: "High risk, high reward excites me.", points: 3, icon: <Zap className="w-5 h-5" /> }
    ]
  },
  {
    id: 5,
    text: "What is your ultimate goal?",
    options: [
      { text: "Financial literacy & long-term wealth.", points: 1, icon: <Wallet className="w-5 h-5" /> },
      { text: "A second source of monthly income.", points: 2, icon: <Coins className="w-5 h-5" /> },
      { text: "To become a full-time Pro Trader.", points: 3, icon: <Briefcase className="w-5 h-5" /> }
    ]
  }
];

const TraderQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    const newAnswers = [...answers, points];
    setScore(newScore);
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const getResult = () => {
    // Min score 5, Max score 15
    if (score <= 8) {
      return {
        archetype: "The Aspiring Learner",
        desc: "You value safety and want to understand the basics before risking capital. A strong foundation is your key to success.",
        course: "Course I: Basics of Stock Market",
        courseId: "c1",
        level: CourseLevel.BEGINNER,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-800"
      };
    } else if (score <= 11) {
       return {
        archetype: "The Tactical Swing Trader",
        desc: "You have an eye for opportunity and calculated risk. Mastering technical analysis will help you time your entries perfectly.",
        course: "Course II: Technical Analysis",
        courseId: "c2",
        level: CourseLevel.INTERMEDIATE,
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        borderColor: "border-purple-200 dark:border-purple-800"
      };
    } else {
      return {
        archetype: "The Pro Trader in Making",
        desc: "You are ambitious and ready for the big leagues. You need advanced strategies, F&O mastery, and real trading floor experience.",
        course: "Smart Traders Course (Flagship)",
        courseId: "smart-traders",
        level: CourseLevel.ADVANCED,
        color: "text-brand-500",
        bg: "bg-brand-50 dark:bg-brand-900/20",
        borderColor: "border-brand-200 dark:border-brand-800"
      };
    }
  };

  const result = getResult();

  const getWhatsAppShareLink = () => {
    const message = `Hi, I took the Finwise Trader Quiz and got the archetype: *${result.archetype}*. It recommended the *${result.course}*. I'd like to discuss this path.`;
    return `https://wa.me/917739877908?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="quiz" className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden scroll-mt-24">
      {/* Dark Theme Background to make it POP */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-500/10 blur-[100px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-gold/10 blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent-gold font-bold tracking-wider text-sm uppercase mb-2 block">Interactive Assessment</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            What Kind of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">Trader</span> Are You?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Take this 1-minute personality test. We'll analyze your psychology, risk appetite, and goals to recommend the perfect trading path.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl min-h-[500px] flex flex-col justify-center">
          {!showResult ? (
            <div className="max-w-2xl mx-auto w-full animate-fade-in">
              {/* Progress Bar */}
              <div className="flex items-center gap-4 mb-8">
                 <span className="text-sm font-bold text-brand-400 whitespace-nowrap">Question {currentStep + 1}/{QUESTIONS.length}</span>
                 <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-500 to-accent-gold transition-all duration-500 ease-out"
                      style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                    ></div>
                 </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-8 leading-snug min-h-[64px]">
                {QUESTIONS[currentStep].text}
              </h3>

              <div className="space-y-4">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.points)}
                    className="w-full flex items-center justify-between p-5 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-brand-900/30 hover:border-brand-500 transition-all duration-200 group text-left hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg text-slate-300 group-hover:text-brand-400 transition-colors shadow-sm shrink-0">
                         {option.icon}
                      </div>
                      <span className="font-medium text-lg text-slate-200 group-hover:text-white">{option.text}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-brand-400 transform group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center w-full max-w-3xl mx-auto animate-fade-in-up">
              <div className="inline-flex p-4 rounded-full bg-brand-500/20 mb-6 ring-1 ring-brand-500/50">
                <Brain className="w-12 h-12 text-brand-400" />
              </div>
              
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Analysis Complete</h3>
              <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${result.color}`}>{result.archetype}</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">{result.desc}</p>
              
              <div className={`p-8 rounded-2xl ${result.bg} ${result.borderColor} border-2 border-dashed relative group transition-transform hover:scale-[1.02] max-w-xl mx-auto`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-gold text-brand-950 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> RECOMMENDED PATH
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-2xl mb-2 mt-2">{result.course}</h4>
                <div className="inline-block px-3 py-1 rounded-md bg-white/20 text-slate-700 dark:text-slate-200 text-sm font-semibold mb-6">
                   {result.level} Level
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="#courses" 
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-lg transition-colors"
                  >
                    View Course Details <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a 
                    href={getWhatsAppShareLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-brand-900 bg-accent-gold hover:bg-yellow-400 rounded-xl shadow-lg transition-colors"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" /> Consult Mentor
                  </a>
                </div>
              </div>

              <button 
                onClick={resetQuiz}
                className="mt-10 text-slate-500 hover:text-white flex items-center justify-center gap-2 mx-auto text-sm font-medium transition-colors"
              >
                <RefreshCcw className="w-4 h-4" /> Retake Analysis
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TraderQuiz;
