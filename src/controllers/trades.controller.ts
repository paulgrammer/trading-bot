import { Response, Request } from 'express'
import { binanceApi } from '../services/binance'
import z from 'zod'

const querySchema = z.object({
    symbol: z.string("Symbol is required"),
    limit: z.number().default(500)
 })

export const get = async (req: Request, res: Response) => {
    const query = querySchema.parse(req.query)
    const trades = await binanceApi.getHistoricalTrades(query.symbol, query.limit)

    res.json(trades);
}
