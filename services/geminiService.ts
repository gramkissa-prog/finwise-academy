import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

// Initialize Gemini AI
// NOTE: In a real production app, ensure keys are not exposed to the client directly or use a proxy.
// For this demo, we use the process.env.API_KEY as requested.
const getAiClient = () => {
  // Safety check: prevent "process is not defined" error in browser environments that don't polyfill Node globals
  const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
  
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features may not work.");
    // We return null here to handle the error gracefully in the UI
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateTradingAdvice = async (userPrompt: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "Error: API Key not configured. AI features are currently unavailable.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the market data right now. Please try again later.";
  }
};