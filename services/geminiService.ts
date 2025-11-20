
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';
import { NewsItem } from '../types';

// Initialize Gemini AI
// NOTE: In a real production app, ensure keys are not exposed to the client directly or use a proxy.
const getAiClient = () => {
  // Using the API key provided by the user
  const apiKey = 'AIzaSyD1pWPP0HwBMpv9yzZ24ZyEUdSsJh1sKh4';
  return new GoogleGenAI({ apiKey });
};

export const generateTradingAdvice = async (userPrompt: string): Promise<string> => {
  const ai = getAiClient();

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

export const fetchDailyNews = async (): Promise<NewsItem[]> => {
  const ai = getAiClient();
  const today = new Date().toDateString();

  const prompt = `
    You are a financial news reporter. 
    Find the latest, most important stock market news for today, ${today}.
    Focus specifically on:
    1. Indian Stock Market (Nifty 50, Sensex, Major gainers/losers).
    2. Forex Market (USD/INR, Major currency pairs).
    3. Major Global Economic Events affecting India.

    Return exactly 4 distinct news items.
    
    Output the result strictly as a valid JSON array of objects. Do not include markdown formatting or code blocks.
    Schema:
    [
      {
        "headline": "Short catchy title",
        "summary": "2 sentence summary of the event",
        "category": "Indian Market" | "Forex" | "Global",
        "sentiment": "Positive" | "Negative" | "Neutral",
        "timestamp": "Time of event or 'Just Now'"
      }
    ]
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        // Enable Google Search Grounding to get fresh/live data
        tools: [{ googleSearch: {} }],
        // NOTE: responseMimeType: "application/json" is NOT supported with googleSearch tools
      }
    });

    let text = response.text;
    if (!text) throw new Error("Empty response from Gemini");
    
    // Clean up potential markdown code blocks if the model adds them despite instructions
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    // Extract JSON array if there is extra text around it
    const startIndex = text.indexOf('[');
    const endIndex = text.lastIndexOf(']');
    
    if (startIndex !== -1 && endIndex !== -1) {
      text = text.substring(startIndex, endIndex + 1);
      return JSON.parse(text) as NewsItem[];
    }
    
    // Try parsing directly if extraction failed but text exists
    return JSON.parse(text) as NewsItem[];
  } catch (error) {
    console.error("Gemini News Fetch Error:", error);
    // Re-throw error to be handled by the UI
    throw error;
  }
};
