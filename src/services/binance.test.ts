import { describe, expect, test } from "@jest/globals";

import BinanceApi from "./binance";

describe("BinanceApi", () => {
    test("It should fetch trades", ()=> {
       const binanceApi = BinanceApi.getInstance()

        expect(binanceApi.fetch()).toBe("response")
    })
})
