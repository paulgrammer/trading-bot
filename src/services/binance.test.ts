import { describe, expect, test } from "@jest/globals";

import { binanceApi } from "./binance";

describe("BinanceApi", () => {

    test("It should fetch trades", async () => {
        const data = await binanceApi.getHistoricalTrades("BTCUSDT", 1)
        expect(data.length).toBe(1)
    })

    test("It should fetch current price of a give symbol", async () => {
        const price = await binanceApi.getCurrentPrice("BTCUSDT")

        expect(price).toBeTruthy()
    })
})
