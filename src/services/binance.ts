import { BinancePriceResponse, BinanceTrade } from "../types/binance"

class BinanceApiError extends Error {
  constructor(description: string) {
    super(description)

    Error.captureStackTrace(this)
  }
}

class BinanceApi {
  private static instance: BinanceApi
  private readonly baseURL = "https://api.binance.com/api/v3"

  static getInstance() {
    if (!this.instance) {
      this.instance = new BinanceApi()
    }

    return this.instance
  }

  async getHistoricalTrades(symbol: string, limit = 500): Promise<BinanceTrade[]> {
    try {
      const response = await fetch(`${this.baseURL}/historicalTrades?symbol=${symbol}&limit=${limit}`);
      const data = await response.json();
      return data as BinanceTrade[]
    } catch (e: any) {
      throw new BinanceApiError(`failed to fetch recent trades: ${e.message}`)
    }
  }

  async getCurrentPrice(symbol: string): Promise<number> {
    try {
      const response = await fetch(`${this.baseURL}/ticker/price?symbol=${symbol}`);
      const data = (await response.json()) as BinancePriceResponse;

      return data.price
    } catch (e: any) {
      throw new BinanceApiError(`failed to fetch current price: ${e.message}`)
    }
  }
}

export const binanceApi = BinanceApi.getInstance()

export default BinanceApi
