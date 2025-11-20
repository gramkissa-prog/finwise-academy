
export interface StockQuote {
  symbol: string;
  price: number;
  changePercent: number;
  change: number;
}

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1/quote';

/**
 * Fetches stock data for a single symbol.
 * Returns null if API key is missing or request fails, triggering fallback mechanisms.
 */
export const fetchStockData = async (symbol: string, apiSymbol: string): Promise<StockQuote | null> => {
  // Securely access the API Key from environment variables with safety check for browser
  const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.STOCK_API_KEY : undefined;
  
  if (!apiKey) {
    // Fail silently so the UI can fallback to simulation without console clutter
    return null; 
  }

  try {
    const response = await fetch(`${FINNHUB_BASE_URL}?symbol=${apiSymbol}&token=${apiKey}`);
    
    if (!response.ok) {
      if (response.status === 429) {
         console.warn(`[StockService] Rate limit reached for ${symbol}. Switching to simulation.`);
      } else {
         console.warn(`[StockService] Failed to fetch ${symbol}: ${response.statusText}`);
      }
      return null;
    }

    const data = await response.json();
    
    // Finnhub response format: { c: current price, d: change, dp: percent change }
    // If c is 0 and d is null, the symbol might be invalid or market closed with no data
    if (data.c === 0 && data.dp === null) {
      return null;
    }

    return {
      symbol,
      price: Number(data.c),
      change: Number(data.d),
      changePercent: Number(data.dp)
    };
  } catch (error) {
    console.error(`[StockService] Network error for ${symbol}:`, error);
    return null;
  }
};