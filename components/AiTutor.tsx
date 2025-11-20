
import React, { useState, useRef, useEffect } from 'react';
import { generateTradingAdvice } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';
import { Send, Bot, User, Terminal, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

// Helper to parse Markdown text into React elements
const parseMarkdown = (text: string) => {
  if (!text) return null;
  
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let currentListType: 'ul' | 'ol' = 'ul';

  const flushList = (keyIndex: number) => {
    if (listItems.length > 0) {
      const ListTag = currentListType;
      elements.push(
        <ListTag key={`list-${keyIndex}`} className="list-disc pl-5 mb-3 space-y-1 marker:text-brand-500 dark:marker:text-brand-400">
          {listItems}
        </ListTag>
      );
      listItems = [];
    }
  };

  const parseInline = (str: string) => {
    // Split by bold markers **text**
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-inherit">{part.slice(2, -2)}</strong>;
      }
      
      // Handle italics *text* or _text_
      // Use a simpler regex that looks for *...* but tries to be non-greedy
      const subParts = part.split(/(\*[^*]+?\*)/g);
      return subParts.map((sub, j) => {
         if (sub.startsWith('*') && sub.endsWith('*') && sub.length > 2) {
             return <em key={`${i}-${j}`} className="italic">{sub.slice(1, -1)}</em>;
         }
         return sub;
      });
    });
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList(idx);
      return;
    }

    // Header detection (### Header)
    if (trimmed.startsWith('### ')) {
       flushList(idx);
       elements.push(
         <h3 key={`h3-${idx}`} className="font-bold text-lg mt-3 mb-2 text-brand-900 dark:text-brand-300">
            {parseInline(trimmed.substring(4))}
         </h3>
       );
       return;
    }

    // List detection (* Item or - Item)
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      currentListType = 'ul';
      listItems.push(
        <li key={`li-${idx}`} className="pl-1">
          {parseInline(trimmed.substring(2))}
        </li>
      );
    } else {
      flushList(idx);
      elements.push(
        <p key={`p-${idx}`} className="mb-2 last:mb-0 leading-relaxed">
          {parseInline(line)}
        </p>
      );
    }
  });

  flushList(lines.length);
  
  return <>{elements}</>;
};

const FinBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Namaste! I'm **FinBot**, your trading assistant. Ask me about our **Courses**, **Fees**, **Batch Timings**, or general **Stock Market** concepts.",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [lastInput, setLastInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  
  // Use a ref for the scrollable container instead of the end element
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      // Animate scroll to bottom of container
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Small timeout to ensure DOM is ready before scrolling
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, [messages, loadingState]);

  const sendMessageToAi = async (text: string) => {
    setLoadingState(LoadingState.LOADING);
    try {
      const responseText = await generateTradingAdvice(text);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || loadingState === LoadingState.LOADING) return;

    const text = inputValue;
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLastInput(text);
    
    sendMessageToAi(text);
  };

  const handleRetry = () => {
    if (lastInput) {
      sendMessageToAi(lastInput);
    }
  };

  return (
    <div id="finbot" className="py-24 bg-brand-900 relative overflow-hidden scroll-mt-24">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-500/20 blur-3xl animate-pulse-slow"></div>
         <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent-gold/10 blur-3xl animate-pulse-slow delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-800 text-accent-gold text-sm font-semibold mb-6 border border-brand-700">
              <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
              Powered by Finwise Intelligence
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Your Personal <span className="text-brand-400">Academy Assistant</span>
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              Need details about the Smart Traders Course? Want to know the fee structure or location?
              FinBot is here to answer all your questions about Finwise Academy instantly.
            </p>
            
            <div className="mt-8 space-y-4">
               <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-brand-800 p-2 rounded-lg border border-brand-700 group-hover:border-brand-500 transition-colors">
                    <Terminal className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div className="ml-4">
                     <h4 className="text-white font-bold">Course Enquiries</h4>
                     <p className="text-brand-200 text-sm mt-1">Ask about syllabus, duration, and upcoming batches.</p>
                  </div>
               </div>
               <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-brand-800 p-2 rounded-lg border border-brand-700 group-hover:border-brand-500 transition-colors">
                    <Bot className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div className="ml-4">
                     <h4 className="text-white font-bold">Market Concepts</h4>
                     <p className="text-brand-200 text-sm mt-1">Clarify trading terms and strategies before you join.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-slate-900 rounded-2xl shadow-2xl border border-brand-700/50 overflow-hidden flex flex-col h-[500px] animate-fade-in-up delay-200">
            <div className="p-4 bg-brand-950 border-b border-brand-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-500 animate-ping"></div>
                </div>
                <span className="font-bold text-white tracking-wide">FinBot</span>
              </div>
              <button 
                onClick={() => setMessages([])} 
                className="text-xs text-brand-300 hover:text-white underline"
              >
                Clear Chat
              </button>
            </div>

            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth no-scrollbar bg-slate-900"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center border ${msg.role === 'user' ? 'bg-brand-600 border-brand-500' : 'bg-slate-800 border-slate-700'}`}>
                    {msg.role === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-accent-gold" />}
                  </div>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-brand-600 text-white rounded-tr-none'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-tl-none'
                    }`}
                  >
                    {parseMarkdown(msg.text)}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {loadingState === LoadingState.LOADING && (
                <div className="flex items-start gap-3 animate-in fade-in duration-300">
                   <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                     <Bot className="h-4 w-4 text-accent-gold" />
                   </div>
                   <div className="bg-white dark:bg-slate-800 p-4 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 flex items-center space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-brand-600 dark:bg-accent-gold/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-brand-600 dark:bg-accent-gold/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-brand-600 dark:bg-accent-gold/60 rounded-full animate-bounce"></div>
                   </div>
                </div>
              )}

              {/* Error State */}
              {loadingState === LoadingState.ERROR && (
                <div className="flex items-start gap-3 animate-in fade-in duration-300">
                     <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-900/20 border border-red-500/30 flex items-center justify-center">
                        <AlertCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <div className="bg-red-900/20 border border-red-500/30 p-3 rounded-lg rounded-tl-none text-red-200 text-sm">
                        <p>Unable to connect to FinBot. Please check your connection.</p>
                        <button 
                            onClick={handleRetry} 
                            className="mt-2 flex items-center text-xs font-bold text-red-300 hover:text-white transition-colors bg-red-900/40 px-2 py-1 rounded hover:bg-red-900/60"
                        >
                            <RefreshCw className="h-3 w-3 mr-1.5" /> Retry
                        </button>
                    </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-brand-950 border-t border-brand-800">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={loadingState === LoadingState.LOADING ? "FinBot is thinking..." : "Ask about Fees, Courses, or Strategies..."}
                  disabled={loadingState === LoadingState.LOADING}
                  className="flex-1 bg-brand-900 text-white placeholder-brand-400 border border-brand-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || loadingState === LoadingState.LOADING}
                  className="bg-brand-600 text-white p-3 rounded-lg hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-brand-500/20"
                >
                  {loadingState === LoadingState.LOADING ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinBot;
