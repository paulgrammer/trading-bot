import { describe, expect, test } from "@jest/globals";

import BinanceApi from "./binance";

describe("BinanceApi", () => {
    test("It should fetch trades", async () => {
        const binanceApi = BinanceApi.getInstance()
        const data = await binanceApi.getHistoricalTrades("BTCUSDT", 1)
        expect(data.length).toBe(1)
    })
})
