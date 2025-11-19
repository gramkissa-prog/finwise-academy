import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/917739877908?text=Hey%2C%20I%27m%20looking%20to%20start%20learning%20trading%20with%20FinWise%20Academy.%20Could%20you%20share%20info%20about%20the%20courses%2C%20duration%2C%20and%20admission%20process%3F%20Appreciate%20it%21"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center border-2 border-white dark:border-slate-800"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;